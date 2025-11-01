import { useEffect } from 'react';

const criticalRoutes = [
  '/captacao',
  '/autoridade',
  '/agendamento',
  '/crm',
];

/**
 * Prefetch critical routes after initial load to speed up navigation
 * Uses requestIdleCallback to avoid blocking main thread
 */
export const PrefetchLinks = () => {
  useEffect(() => {
    const prefetchRoute = (route: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      link.as = 'document';
      document.head.appendChild(link);
    };

    const prefetchAll = () => {
      criticalRoutes.forEach(route => {
        prefetchRoute(route);
      });
    };

    // Prefetch after idle time
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(prefetchAll, { timeout: 5000 });
      return () => window.cancelIdleCallback(idleCallbackId);
    } else {
      const timeoutId = setTimeout(prefetchAll, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return null;
};
