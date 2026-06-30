import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { AppProvider } from './app-provider';

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
