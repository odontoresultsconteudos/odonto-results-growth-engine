import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Optimize initial render by using concurrent features
const renderApp = () => {
  // Use hydration for pre-rendered content, otherwise use createRoot
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <App />);
  } else {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
};

// Start rendering immediately
renderApp();

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
