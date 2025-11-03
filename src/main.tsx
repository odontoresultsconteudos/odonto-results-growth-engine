import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Use hydration for pre-rendered content, otherwise use createRoot
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Register service worker with lower priority
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Use requestIdleCallback to defer SW registration
  const registerServiceWorker = () => {
    import('virtual:pwa-register').then(({ registerSW }) => {
      registerSW({
        immediate: false, // Don't register immediately
        onNeedRefresh() {
          console.log('New content available, updating...');
        },
        onOfflineReady() {
          console.log('App ready to work offline');
        },
      });
    });
  };
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(registerServiceWorker, { timeout: 3000 });
  } else {
    setTimeout(registerServiceWorker, 2000);
  }
}
