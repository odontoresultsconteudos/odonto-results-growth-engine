import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';

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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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

export default App;
