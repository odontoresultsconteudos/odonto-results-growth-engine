import { Link, LinkProps } from 'react-router-dom';
import { useUtmParams } from '@/hooks/useUtmParams';

interface UtmLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const UtmLink = ({ to, children, ...props }: UtmLinkProps) => {
  const { utmString } = useUtmParams();

  // Adiciona UTMs ao path interno
  const toWithUtms = typeof to === 'string' && utmString
    ? `${to}${to.includes('?') ? '&' : '?'}${utmString}`
    : to;

  return (
    <Link to={toWithUtms} {...props}>
      {children}
    </Link>
  );
};
