import { useUtmParams } from '@/hooks/useUtmParams';
import { AnchorHTMLAttributes } from 'react';

interface UtmExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const UtmExternalLink = ({ href, children, ...props }: UtmExternalLinkProps) => {
  const { addUtmsToUrl } = useUtmParams();

  return (
    <a href={addUtmsToUrl(href)} {...props}>
      {children}
    </a>
  );
};
