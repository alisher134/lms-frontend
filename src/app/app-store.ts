import type { User } from '@/entities/user';
import type { Session } from '@/core/auth';
import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

type AppState = {
  session: Session | null;
  isAuthorized: boolean;
  user: User | null;
};

type AppActions = {
  setSession: (value: Session) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  getSession: () => void;
  clearSession: () => void;
};

export type AppStore = AppState & AppActions;

export const createAppStore = () => {
  return create<AppStore>()(
    persist(
      (set, get) => ({
        session: null,
        isAuthorized: false,
        user: null,

        setSession: (value) =>
          set({
            session: value,
            isAuthorized: true,
          }),

        setTokens: (accessToken, refreshToken) => {
          const currentSession = get().session;

          if (currentSession) {
            set({
              session: {
                ...currentSession,
                accessToken,
                refreshToken,
              },
            });
          }
        },

        getSession: () => {
          return get().session;
        },

        clearSession: () =>
          set({
            session: null,
            isAuthorized: false,
            user: null,
          }),
      }),
      {
        name: 'lms-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  );
};
