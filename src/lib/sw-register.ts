/**
 * Service Worker registration - completely deferred from critical path
 */
export const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator) || !import.meta.env.PROD) {
    return;
  }

  try {
    const { registerSW } = await import('virtual:pwa-register');
    registerSW({
      immediate: false,
      onNeedRefresh() {
        console.log('New content available');
      },
      onOfflineReady() {
        console.log('App ready offline');
      },
    });
  } catch (error) {
    // Silently fail - PWA is progressive enhancement
  }
};
