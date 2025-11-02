import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  preloadImages?: string[];
}

export const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical = 'https://odontoresults.com.br',
  ogImage = 'https://odontoresults.com.br/og-image.jpg',
  ogType = 'website',
  structuredData,
  preloadImages = []
}: SEOProps) => {
  const fullTitle = `${title} | Odonto Results`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // Open Graph
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:url', canonical, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:site_name', 'Odonto Results', true);
    updateMeta('og:locale', 'pt_BR', true);
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    
    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Preload images
    preloadImages.forEach((imageUrl, index) => {
      let preloadLink = document.querySelector(`link[rel="preload"][href="${imageUrl}"]`) as HTMLLinkElement;
      if (!preloadLink) {
        preloadLink = document.createElement('link');
        preloadLink.setAttribute('rel', 'preload');
        preloadLink.setAttribute('as', 'image');
        preloadLink.setAttribute('href', imageUrl);
        preloadLink.setAttribute('fetchpriority', index === 0 ? 'high' : 'low');
        document.head.appendChild(preloadLink);
      }
    });
    
    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(Array.isArray(structuredData) ? structuredData : structuredData);
    }
  }, [fullTitle, description, keywords, canonical, ogImage, ogType, structuredData, preloadImages]);
  
  return null;
};
