interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  width?: number;
  height?: number;
}

export const ResponsiveImage = ({
  src,
  alt,
  sizes = "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px",
  loading = "lazy",
  fetchPriority = "auto",
  className = "",
  width = 800,
  height = 450,
}: ResponsiveImageProps) => {
  // Extract base name and extension from src
  const getResponsiveSrc = (size: string) => {
    // For imported images, the src will be a processed URL
    // We'll try to generate responsive versions, but fallback to original
    const baseName = src.replace(/\.(webp|png|jpg|jpeg)$/i, '');
    const ext = src.match(/\.(webp|png|jpg|jpeg)$/i)?.[0] || '.webp';
    return `${baseName}-${size}${ext}`;
  };

  // Generate srcset for different screen sizes
  const srcSet = `
    ${getResponsiveSrc('400w')} 400w,
    ${getResponsiveSrc('800w')} 800w,
    ${getResponsiveSrc('1200w')} 1200w
  `.trim();

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      // @ts-ignore - fetchpriority is valid HTML but TypeScript doesn't recognize it yet
      fetchpriority={fetchPriority}
      className={className}
      width={width}
      height={height}
      onError={(e) => {
        // Fallback to original src if responsive versions don't exist
        const img = e.currentTarget;
        if (img.srcset) {
          img.srcset = '';
          img.src = src;
        }
      }}
    />
  );
};
