import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import { preloadModule } from '@/lib/performance';

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Captacao = lazy(() => import("./pages/Captacao"));
const Autoridade = lazy(() => import("./pages/Autoridade"));
const GoogleTop1 = lazy(() => import("./pages/GoogleTop1"));
const Agendamento = lazy(() => import("./pages/Agendamento"));
const CRM = lazy(() => import("./pages/CRM"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Preload non-critical pages after initial load for faster navigation
if (typeof window !== 'undefined') {
  preloadModule(() => import("./pages/Captacao"));
  preloadModule(() => import("./pages/Sobre"));
  preloadModule(() => import("./pages/Contato"));
}

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
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/captacao" element={<Captacao />} />
                <Route path="/autoridade" element={<Autoridade />} />
                <Route path="/google-top-1" element={<GoogleTop1 />} />
                <Route path="/agendamento" element={<Agendamento />} />
                <Route path="/crm" element={<CRM />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
