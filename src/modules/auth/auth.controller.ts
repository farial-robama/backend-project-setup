import { Request, Response } from 'express';
import { authService } from './auth.service.js';
import catchAsync from '../../utils/catchAsync.js';
import ApiResponse from '../../utils/ApiResponse.js';

const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await authService.userLogin(email, password);

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: result,
  });
});

const sendMail = catchAsync(async (_req: Request, res: Response) => {
  const result = await authService.sendMail();

  ApiResponse.success(
    res,
    result,
    'Mail sent successfully!',
  );
});

export const authController = {
  login,
  sendMail,
};