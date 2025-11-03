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

// Register service worker with maximum deferral to not block TTI
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Defer SW registration until page is fully interactive and idle
  const registerServiceWorker = () => {
    import('virtual:pwa-register').then(({ registerSW }) => {
      registerSW({
        immediate: false,
        onNeedRefresh() {
          console.log('New content available');
        },
        onOfflineReady() {
          console.log('App ready offline');
        },
      });
    });
  };
  
  // Only register after significant delay to not impact TTI
  if ('requestIdleCallback' in window) {
    requestIdleCallback(registerServiceWorker, { timeout: 5000 });
  } else {
    setTimeout(registerServiceWorker, 5000);
  }
}
