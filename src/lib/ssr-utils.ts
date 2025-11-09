/**
 * SSR-safe utilities for browser-only operations
 */

/**
 * Check if code is running in browser environment
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Check if code is running in SSR/server environment
 */
export const isServer = (): boolean => {
  return typeof window === 'undefined';
};

/**
 * Safely get window object (returns undefined on server)
 */
export const safeWindow = (): Window | undefined => {
  return isBrowser() ? window : undefined;
};

/**
 * Safely get document object (returns undefined on server)
 */
export const safeDocument = (): Document | undefined => {
  return isBrowser() ? document : undefined;
};

/**
 * Execute callback only in browser
 */
export const onlyInBrowser = <T>(callback: () => T, fallback?: T): T | undefined => {
  return isBrowser() ? callback() : fallback;
};
