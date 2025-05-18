import prisma from '../lib/prisma'
import { Request, Response } from 'express'

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, role } = req.body
    if (!name || !email || !password) {
        res.status(400).json({ success: false, message: 'Please provide all required fields' })
        return
    }
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            res.status(400).json({ success: false, message: 'Email already registered' })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword, role },
        })

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
        })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}



export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        res.status(200).json({ success: true, users })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' })
            return
        }

        res.status(200).json({ success: true, user })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}


export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const { name, email, password, role } = req.body

    try {
        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' })
            return
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                password,
                role,
            },
        })

        res.status(200).json({ success: true, message: 'User updated successfully', user: updatedUser })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' })
            return
        }

        await prisma.user.delete({ where: { id } })

        res.status(200).json({ success: true, message: 'User deleted successfully' })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}




export const getUserMembership = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                membership: true,
            },
        })

        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' })
            return
        }

        res.status(200).json({ success: true, membership: user.membership })
    } catch (error: any) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message })
    }
}

const userController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserMembership,
}


export default userController