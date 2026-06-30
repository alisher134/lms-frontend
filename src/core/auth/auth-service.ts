import { toastService } from '@/shared/service/toast-service';
import type { SignInPayload, SignUpPayload } from './repository/auth-payload';
import type { AuthRepository } from './repository/auth-repository';
import type { Session } from './session/session-types';

export type AuthServiceDeps = {
  authRepo: AuthRepository;
  setSession: (value: Session) => void;
};

export const createAuthService = ({ authRepo, setSession }: AuthServiceDeps) => ({
  async signIn(payload: SignInPayload) {
    try {
      const { data } = await authRepo.signIn({ params: payload });

      setSession({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });

      toastService.showSuccess('Регистрация успешна!');
    } catch {
      toastService.showError('Ошибка регистрации!');
    }
  },
  async signUp(payload: SignUpPayload) {
    try {
      const { data } = await authRepo.signUp({ params: payload });

      setSession({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });

      toastService.showSuccess('Вы успешно вошли');
    } catch {
      toastService.showError('Ошибка входа');
    }
  },
});

export type AuthService = ReturnType<typeof createAuthService>;
