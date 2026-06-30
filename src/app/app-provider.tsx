import { useState, type ReactNode } from 'react';
import { createAppStore, type AppStore } from './app-store';
import { createDi } from '@/shared/lib/create-di';

export const { Injector, useDi: useAppStore } = createDi<AppStore>();

export function AppProvider({ children }: { children: ReactNode }) {
  const [appStore] = useState(() => createAppStore().getState());

  return <Injector value={appStore}>{children}</Injector>;
}
