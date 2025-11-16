import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LegacyRedirect } from "@/components/LegacyRedirect";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Metodo from "./pages/Metodo";
import Captacao from "./pages/Captacao";
import Autoridade from "./pages/Autoridade";
import GoogleTop1 from "./pages/GoogleTop1";
import Agendamento from "./pages/Agendamento";
import CRM from "./pages/CRM";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const App = () => {
  // Optimize React rendering by reducing initial work
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000, // 1 minute
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ScrollToTop />
            <LegacyRedirect />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/metodo-paciente-previsivel" element={<Metodo />} />
              <Route path="/captacao-leads-qualificados" element={<Captacao />} />
              <Route path="/vitrine-autoridade-digital" element={<Autoridade />} />
              <Route path="/google-top-1-seo-local" element={<GoogleTop1 />} />
              <Route path="/agendamento-profissional" element={<Agendamento />} />
              <Route path="/crm-inteligente" element={<CRM />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
