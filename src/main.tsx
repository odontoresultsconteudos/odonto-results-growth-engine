import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, isClient }) => {
    // Register service worker only on client side
    if (isClient && 'serviceWorker' in navigator && import.meta.env.PROD) {
      window.addEventListener('load', () => {
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
      });
    }
  }
);
