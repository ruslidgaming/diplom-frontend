import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Убрано расширение .tsx
import './assets/css/style.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);