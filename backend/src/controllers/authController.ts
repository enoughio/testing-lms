import { Request, RequestHandler, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';

// temporary-code
declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}


// register MEMBER
export const registerMember = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({ success: false, message: 'Passwords do not match' });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ success: false, message: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    // Store user ID in session
    req.session.userId = user.id;

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// register ADMIN
export const registerAdmin = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({ success: false, message: 'Passwords do not match' });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ success: false, message: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'ADMIN', // 👈 This is the key difference
      },
    });

    // Optional: Auto-login admin after registration (if needed)
    req.session.userId = user.id;

    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};


// login
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
      return;
    }

    // Store user ID in session
    req.session.userId = user.id;

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// logout
export const logout = async (req: Request, res: Response): Promise<void> => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).json({ success: false, message: 'Logout failed' });
    } else {
      res.clearCookie('connect.sid');
      res.status(200).json({ success: true, message: 'Logged out successfully' });
    }
  });
};


// getME
export const getMe: RequestHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.session?.userId;

    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        memberships: {
          where: { status: "ACTIVE" },
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            membershipPlan: { select: { name: true } },
            library: { select: { id: true } }
          }
        }
      }
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const latestMembership = user.memberships[0];

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        plan: latestMembership?.membershipPlan?.name ?? null,
        libraryId: latestMembership?.library?.id ?? null
      }
    });

  } catch (error) {
    console.error("getMe error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};