import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { UtmLink } from "@/components/UtmLink";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-2xl">
          <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
          <p className="mb-4 text-2xl font-semibold">Página não encontrada</p>
          <p className="mb-8 text-lg text-muted-foreground">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <UtmLink to="/">
            <Button variant="cta" size="lg">
              Voltar para Home
            </Button>
          </UtmLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
