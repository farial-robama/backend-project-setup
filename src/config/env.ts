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
};

export default config;