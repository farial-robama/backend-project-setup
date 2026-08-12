import dotenv from 'dotenv';
import path from 'path';
import { envValidate } from './env.validate.js';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

const env = envValidate();

const config = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,

  databaseURL: env.DATABASE_URL,

  smtpUser: env.SMTP_USER,
  smtpPass: env.SMTP_PASS,
  smtpHost: env.SMTP_HOST,
  smtpPort: env.SMTP_PORT,
  smtpFrom: env.SMTP_FROM,
};

export default config;