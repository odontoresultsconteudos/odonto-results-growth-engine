/**
 * Performance optimization utilities
 * These utilities help reduce Time to Interactive (TTI) by deferring non-critical work
 */

/**
 * Defers execution until the browser is idle
 * Falls back to setTimeout if requestIdleCallback is not available
 */
export const deferUntilIdle = (callback: () => void, timeout = 2000): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, timeout);
  }
};

/**
 * Runs a callback after the page has loaded and become interactive
 */
export const runAfterInteractive = (callback: () => void): void => {
  if (document.readyState === 'complete') {
    deferUntilIdle(callback);
  } else {
    window.addEventListener('load', () => deferUntilIdle(callback), { once: true });
  }
};

/**
 * Preloads a module but doesn't execute it until needed
 */
export const preloadModule = (moduleFactory: () => Promise<any>): void => {
  deferUntilIdle(() => {
    moduleFactory().catch(() => {
      // Silently fail - the module will be loaded when actually needed
    });
  });
};
