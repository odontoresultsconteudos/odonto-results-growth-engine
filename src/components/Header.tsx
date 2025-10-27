import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Odonto Results" className="h-10 lg:h-12" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#metodo" className="text-sm font-medium hover:text-accent transition-colors">
            Método
          </a>
          <a href="#servicos" className="text-sm font-medium hover:text-accent transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-accent transition-colors">
            Contato
          </a>
        </nav>
        <a href="#contato">
          <Button variant="cta" size="sm">
            Agendar Agora
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
