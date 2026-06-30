import { Outlet, type RouteObject } from 'react-router';
import { ROUTES } from '@/shared/routes';
import { SignUpPage } from '@/pages/sign-up-page';
import { SignInPage } from '@/pages/sign-in-page';
import { AuthServiceProvider } from '@/core/auth/auth-provider';
import { authApi } from '@/core/auth/repository/auth-api';

export const authRoutes: RouteObject[] = [
  {
    element: (
      <AuthServiceProvider authRepo={authApi}>
        <Outlet />
      </AuthServiceProvider>
    ),
    children: [
      { path: ROUTES.AUTH.SIGN_UP.path, element: <SignUpPage /> },
      { path: ROUTES.AUTH.SIGN_IN.path, element: <SignInPage /> },
    ],
  },
];
