import z from 'zod';

export const passwordSchema = z
  .string()
  .min(8, 'Минимум 8 символов')
  .regex(/[A-Z]/, 'Минимум одна большая буква')
  .regex(/[0-9]/, 'Минимум одна цифра');

export const emailSchema = z.email('Введите правильный email');
