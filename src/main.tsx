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

// Extreme deferral of service worker to avoid blocking critical path
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  let swRegistered = false;
  
  const registerServiceWorker = () => {
    if (swRegistered) return;
    swRegistered = true;
    
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
  
  // Register only after significant user engagement OR very long delay
  let interactionCount = 0;
  const events = ['click', 'keydown', 'touchstart', 'scroll'];
  
  const trackInteraction = () => {
    interactionCount++;
    if (interactionCount >= 3) {
      registerServiceWorker();
      events.forEach(event => {
        window.removeEventListener(event, trackInteraction);
      });
    }
  };
  
  events.forEach(event => {
    window.addEventListener(event, trackInteraction, { passive: true, once: false });
  });
  
  // Fallback: register after 20 seconds if no engagement
  if ('requestIdleCallback' in window) {
    requestIdleCallback(registerServiceWorker, { timeout: 20000 });
  } else {
    setTimeout(registerServiceWorker, 20000);
  }
}
