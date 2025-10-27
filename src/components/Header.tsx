import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, ExternalLink } from "lucide-react";
import logoImage from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

const pilares = [
  { title: "Captação de Leads", href: "/captacao", description: "Anúncios segmentados para gerar volume qualificado" },
  { title: "Vitrine de Autoridade", href: "/autoridade", description: "Conteúdo estratégico que prova competência" },
  { title: "Google Top 1", href: "/google-top-1", description: "Dominância nas buscas locais do Google Maps" },
  { title: "Agendamento Estruturado", href: "/agendamento", description: "CRC + IA para converter leads em consultas" },
  { title: "CRM Inteligente", href: "/crm", description: "Gestão profissional para maximizar conversão" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Odonto Results" className="h-10 lg:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              isActive("/") && "text-accent"
            )}
          >
            Início
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Método
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 bg-background border border-border/40">
                    {pilares.map((pilar) => (
                      <li key={pilar.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={pilar.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent",
                              isActive(pilar.href) && "bg-accent/20 text-accent"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{pilar.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {pilar.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="http://blog.odontoresults.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-accent flex items-center gap-1"
          >
            Blog
            <ExternalLink className="h-3 w-3" />
          </a>

          <a href="#sobre" className="text-sm font-medium transition-colors hover:text-accent">
            Sobre
          </a>

          <a href="#contato" className="text-sm font-medium transition-colors hover:text-accent">
            Contato
          </a>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <a href="#contato">
            <Button variant="cta" size="sm">
              Agendar Consulta
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent py-2",
                  isActive("/") && "text-accent"
                )}
              >
                Início
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="metodo" className="border-b-0">
                  <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline hover:text-accent">
                    Método
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4">
                      {pilares.map((pilar) => (
                        <Link
                          key={pilar.href}
                          to={pilar.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "text-sm py-2 transition-colors hover:text-accent",
                            isActive(pilar.href) && "text-accent font-medium"
                          )}
                        >
                          {pilar.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <a
                href="http://blog.odontoresults.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-accent py-2 flex items-center gap-2"
              >
                Blog
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="#sobre"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium transition-colors hover:text-accent py-2"
              >
                Sobre
              </a>

              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium transition-colors hover:text-accent py-2"
              >
                Contato
              </a>

              <a href="#contato" onClick={() => setMobileOpen(false)} className="mt-4">
                <Button variant="cta" className="w-full">
                  Agendar Consulta
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
