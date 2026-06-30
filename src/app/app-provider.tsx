import { useState, type ReactNode } from 'react';
import { createAppStore, type AppStore } from './app-store';
import { createDi } from '@/shared/lib/create-di';
import { setupAuthInterceptors } from '@/core/auth/auth-interceptors';

export const { Injector, useDi: useAppStore } = createDi<AppStore>();

export function AppProvider({ children }: { children: ReactNode }) {
  const [appStore] = useState(() => {
    const store = createAppStore().getState();

    setupAuthInterceptors({ getToken: () => store.getSession()?.accessToken });

    return store;
  });

  return <Injector value={appStore}>{children}</Injector>;
}
