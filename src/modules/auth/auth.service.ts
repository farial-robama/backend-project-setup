import AppError from '../../utils/AppError.js';
import { sendEmail } from '../../services/email.service.js';

const userLogin = async (email: string, password: string) => {
  const user = {
    email: 'farialrobama@gmail.com',
    password: '123456',
  };

  if (!user) {
    throw new AppError(404, 'User not found!');
  }

  if (user.email !== email || user.password !== password) {
    throw new AppError(401, 'Invalid email or password');
  }

  return user;
};

const sendMail = async () => {
  return await sendEmail({
    to: 'farialrobama15@gmail.com',
    subject: 'Test Mail',
    html: `
      <h2>Hello Farial....</h2>
    `,
  });
};

export const authService = {
  userLogin,
  sendMail,
};