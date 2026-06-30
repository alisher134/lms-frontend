import z from 'zod';
import { emailSchema, passwordSchema } from './primitives-schema';

export const signUpSchema = z
  .object({
    firstName: z.string().min(3, { error: 'Имя должно быть минимум 3 символа' }),
    lastName: z.string().min(3, { error: 'Фамилия должна быть минимум 3 символа' }),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, { error: 'Пароль не может быть пустым' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
