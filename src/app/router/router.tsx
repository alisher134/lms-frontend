import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, Outlet } from 'react-router';
import { authRoutes } from './routes/auth-routes';

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary fallback={<div>Что-то пошло не так</div>}>
        <Outlet />
      </ErrorBoundary>
    ),
    children: [...authRoutes],
  },
]);
