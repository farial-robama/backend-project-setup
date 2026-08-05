import z from 'zod';

const envSchema = z.object({
  PORT: z.string().default('5000'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

export const envValidate = () => {
  const parsedEnv = envSchema.safeParse(process.env);

  if (!parsedEnv.success) {
    throw new Error('Invalid environment variables');
  }

  return parsedEnv.data;
};