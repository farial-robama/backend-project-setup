import nodemailer from 'nodemailer';
import config from './env.js';

export const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: Number(config.smtpPort),
  secure: Number(config.smtpPort) === 465,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
});