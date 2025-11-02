import { Head } from 'vite-react-ssg';

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
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Preload critical images */}
      {preloadImages.map((imageUrl, index) => (
        <link 
          key={index}
          rel="preload" 
          as="image" 
          href={imageUrl}
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Odonto Results" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : structuredData)}
        </script>
      )}
    </Head>
  );
};
