import z from 'zod';
import { emailSchema, passwordSchema } from './primitives-schema';

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInFormValues = z.input<typeof signInSchema>;
