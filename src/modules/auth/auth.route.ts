import { Router } from 'express';
import { authController } from './auth.controller.js';

const router = Router();

router.post('/login', authController.login);
router.get('/send-mail', authController.sendMail);

export default router;