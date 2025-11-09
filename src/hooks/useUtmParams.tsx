import { useEffect, useState } from 'react';

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'utm_source_platform',
  'utm_campaign_id',
  'gclid',
  'fbclid',
  'msclkid',
];

const SESSION_KEY = 'persisted_utm_query';

export const useUtmParams = () => {
  const [utmString, setUtmString] = useState<string>('');

  useEffect(() => {
    // Captura UTMs da URL atual
    const captureUtms = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const utmParams = new URLSearchParams();

      UTM_PARAMS.forEach(param => {
        const value = searchParams.get(param);
        if (value) {
          utmParams.set(param, value);
        }
      });

      const utmQueryString = utmParams.toString();
      if (utmQueryString) {
        sessionStorage.setItem(SESSION_KEY, utmQueryString);
        setUtmString(utmQueryString);
      }
    };

    // Recupera UTMs salvos
    const savedUtms = sessionStorage.getItem(SESSION_KEY);
    if (savedUtms) {
      setUtmString(savedUtms);
    }

    captureUtms();
  }, []);

  // Função helper para adicionar UTMs a uma URL
  const addUtmsToUrl = (url: string): string => {
    if (!utmString) return url;

    try {
      const urlObj = new URL(url, window.location.origin);
      const existingParams = new URLSearchParams(urlObj.search);
      const utmParams = new URLSearchParams(utmString);

      // Adiciona UTMs apenas se não existirem
      utmParams.forEach((value, key) => {
        if (!existingParams.has(key)) {
          existingParams.set(key, value);
        }
      });

      urlObj.search = existingParams.toString();
      return urlObj.toString();
    } catch {
      return url;
    }
  };

  return { utmString, addUtmsToUrl };
};
