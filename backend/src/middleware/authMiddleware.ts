// middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";  // Adjust path
import { User } from "@prisma/client";

interface JwtPayload {
  id: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      req.user = null;
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    const user: User | null = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    req.user = user;
    return next();
  } catch (error) {
    console.error("Auth Middleware Error:", (error as Error).message);
    req.user = null;
    return next();
  }
};
