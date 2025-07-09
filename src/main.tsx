import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅
import ScrollToTop from './ScrollToTop'; // ✅
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap everything */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
