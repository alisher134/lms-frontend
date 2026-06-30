import { createDi } from '@/shared/lib/create-di';
import { createAuthService, type AuthService } from './auth-service';
import { useState, type ReactNode } from 'react';
import type { AuthRepository } from './repository/auth-repository';
import { useAppStore } from '@/app/app-provider';

type AuthServiceProviderProps = {
  children: ReactNode;
  authRepo: AuthRepository;
};

export const { Injector, useDi: useAuthService } = createDi<AuthService>();

export function AuthServiceProvider({ children, authRepo }: AuthServiceProviderProps) {
  const { setSession } = useAppStore();

  const [authService] = useState(() => createAuthService({ authRepo, setSession }));

  return <Injector value={authService}>{children}</Injector>;
}
