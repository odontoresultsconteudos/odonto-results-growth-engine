import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

const app = (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </BrowserRouter>
);

// Use hydration for SSG in production, createRoot in development
if (import.meta.env.PROD) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// Extreme deferral of service worker - load after page becomes interactive
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    import('./lib/sw-register').then(({ registerServiceWorker }) => {
      registerServiceWorker();
    });
  }, { timeout: 30000 });
} else {
  setTimeout(() => {
    import('./lib/sw-register').then(({ registerServiceWorker }) => {
      registerServiceWorker();
    });
  }, 30000);
}
