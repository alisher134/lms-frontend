import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app.tsx';
import './app/index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
