import z from 'zod';

const envSchema = z.object({
  PORT: z.string().default('5000'),

  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  DATABASE_URL: z.string(),

  SMTP_USER: z.string(),
  SMTP_PASS: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_FROM: z.string(),
});

export const envValidate = () => {
  const parsedEnv = envSchema.safeParse(process.env);

  if (!parsedEnv.success) {
    console.error(parsedEnv.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsedEnv.data;
};