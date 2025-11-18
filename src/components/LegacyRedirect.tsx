import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Fallback client-side redirects for legacy URLs
const redirectMap: Record<string, string> = {
  '/captacao': '/captacao-leads-qualificados',
  '/autoridade': '/vitrine-autoridade-digital',
  '/google-top-1': '/google-top-1-seo-local',
  '/agendamento': '/agendamento-profissional',
  '/agendamento-inteligente': '/agendamento-profissional',
  '/crm': '/crm-inteligente',
};

// External redirects
const externalRedirectMap: Record<string, string> = {
  '/saiba-mais': 'https://form.odontoresults.com.br/dLTRVKuI/?utm_source=ig&utm_medium=link_na_bio&utm_campaign=link_na_bio&utm_term=link_na_bio&utm_content=link_na_bio',
};

export const LegacyRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for external redirects first
    const externalUrl = externalRedirectMap[location.pathname];
    if (externalUrl) {
      window.location.replace(externalUrl);
      return;
    }
    
    // Check for internal redirects
    const newPath = redirectMap[location.pathname];
    if (newPath) {
      // Use replace to avoid adding to browser history
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};
