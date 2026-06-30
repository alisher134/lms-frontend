import type { User } from '@/entities/user';

export type Session = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
