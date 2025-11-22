/**
 * IndexNow - Notify search engines about URL updates
 * https://www.indexnow.org/
 */

const INDEXNOW_KEY = '12a08b7a0b904a8c9d89ae68517fc343';
const INDEXNOW_HOST = 'odontoresults.com.br';
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

/**
 * Submit URLs to IndexNow for immediate indexing
 * @param urls - Array of full URLs to submit (e.g., ['https://odontoresults.com.br/page1'])
 * @returns Promise<boolean> - Success status
 */
export const submitToIndexNow = async (urls: string[]): Promise<boolean> => {
  if (!urls || urls.length === 0) {
    console.warn('IndexNow: No URLs provided');
    return false;
  }

  const payload: IndexNowSubmission = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`IndexNow: Successfully submitted ${urls.length} URLs`);
      return true;
    } else {
      console.error(`IndexNow: Failed with status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error('IndexNow: Submission error', error);
    return false;
  }
};

/**
 * Submit a single URL to IndexNow
 * @param url - Full URL to submit
 * @returns Promise<boolean> - Success status
 */
export const submitUrlToIndexNow = async (url: string): Promise<boolean> => {
  return submitToIndexNow([url]);
};

/**
 * Submit all main pages of the site to IndexNow
 * Useful for initial setup or major updates
 */
export const submitAllPagesToIndexNow = async (): Promise<boolean> => {
  const urls = [
    'https://odontoresults.com.br/',
    'https://odontoresults.com.br/metodo-paciente-previsivel',
    'https://odontoresults.com.br/captacao-leads-qualificados',
    'https://odontoresults.com.br/vitrine-autoridade-digital',
    'https://odontoresults.com.br/google-top-1-seo-local',
    'https://odontoresults.com.br/agendamento-profissional',
    'https://odontoresults.com.br/crm-inteligente',
    'https://odontoresults.com.br/sobre',
    'https://odontoresults.com.br/contato',
  ];

  return submitToIndexNow(urls);
};

// Expose to window for easy testing in console
if (typeof window !== 'undefined') {
  (window as any).indexNow = {
    submitUrl: submitUrlToIndexNow,
    submitUrls: submitToIndexNow,
    submitAll: submitAllPagesToIndexNow,
  };
}
