import { Request, Response } from 'express';
import { authService } from './auth.service.js';
import catchAsync from '../../utils/catchAsync.js';

const login = catchAsync(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await authService.userLogin(email, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

export const authController = {
  login,
};