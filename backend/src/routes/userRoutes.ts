// src/routes/userRoutes.ts
import { Router } from 'express';
import userController from '../controllers/userController';
import { authenticate, authorizeRoles } from '../middleware/auth';

const router = Router();

/**
 * @route GET /api/users
 * @desc Get all users (with filtering)
 * @access Private (Admin/Super Admin)
 */
router.get('/', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), userController.getAllUsers);

/**
 * @route GET /api/users/:id
 * @desc Get user by ID
 * @access Private (Admin/Super Admin or Own User)
 */
router.get('/:id', authenticate, userController.getUserById);

/**
 * @route POST /api/users
 * @desc Create a new user
 * @access Private (Admin/Super Admin)
 */
router.post('/', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), userController.createUser);

/**
 * @route PUT /api/users/:id
 * @desc Update user
 * @access Private (Admin/Super Admin or Own User)
 */
router.put('/:id', authenticate, userController.updateUser);

/**
 * @route DELETE /api/users/:id
 * @desc Delete user
 * @access Private (Admin/Super Admin)
 */
router.delete('/:id', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), userController.deleteUser);

/**
 * @route GET /api/users/:id/membership
 * @desc Get user membership details
 * @access Private (Admin/Super Admin or Own User)
 */
router.get('/:id/membership', authenticate, userController.getUserMembership);

export default router;