import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker with requestIdleCallback for better performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  const registerServiceWorker = () => {
    import('virtual:pwa-register').then(({ registerSW }) => {
      registerSW({
        immediate: true,
        onNeedRefresh() {
          console.log('New content available, updating...');
        },
        onOfflineReady() {
          console.log('App ready to work offline');
        },
      });
    });
  };

  // Use requestIdleCallback to avoid blocking main thread
  const scheduleRegistration = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => registerServiceWorker(), { timeout: 2000 });
    } else {
      registerServiceWorker();
    }
  };

  window.addEventListener('load', scheduleRegistration);
}
