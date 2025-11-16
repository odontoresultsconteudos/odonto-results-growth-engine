import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Fallback client-side redirects for legacy URLs
const redirectMap: Record<string, string> = {
  '/captacao': '/captacao-leads-qualificados',
  '/autoridade': '/vitrine-autoridade-digital',
  '/google-top-1': '/google-top-1-seo-local',
  '/agendamento': '/agendamento-inteligente',
  '/crm': '/crm-inteligente',
};

export const LegacyRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const newPath = redirectMap[location.pathname];
    if (newPath) {
      // Use replace to avoid adding to browser history
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};
