import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 🧭 import this
import ScrollToTop from './ScrollToTop'; // ⬆️ import this
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>          {/* ✅ START wrap */}
      <ScrollToTop />        {/* ✅ Scroll reset on route change */}
      <App />                {/* ✅ Main App */}
    </BrowserRouter>         {/* ✅ END wrap */}
  </StrictMode>
);
