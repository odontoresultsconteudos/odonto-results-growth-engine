import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Direct imports (not lazy) for SSR
import Index from "./pages/Index";
import Captacao from "./pages/Captacao";
import Autoridade from "./pages/Autoridade";
import GoogleTop1 from "./pages/GoogleTop1";
import Agendamento from "./pages/Agendamento";
import CRM from "./pages/CRM";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

// QueryClient created outside component for SSR
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchOnWindowFocus: false,
    },
  },
});

const AppServer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/captacao" element={<Captacao />} />
          <Route path="/autoridade" element={<Autoridade />} />
          <Route path="/google-top-1" element={<GoogleTop1 />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppServer;
