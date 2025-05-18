import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/members/register', authController.registerMember);
router.post('/admins/register', authController.registerAdmin);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/me', authController.getMe); 

export default router;
