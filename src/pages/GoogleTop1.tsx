import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { MapPin, Search, Star, TrendingUp, Eye } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { UtmLink } from "@/components/UtmLink";

const GoogleTop1 = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://odontoresults.com.br"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Google Top 1",
      "item": "https://odontoresults.com.br/google-top-1"
    }]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Google Top 1 para Dentistas - SEO Local e Google Maps"
        description="Apareça no topo quando pacientes buscam 'dentista perto de mim'. Estratégia SEO local, otimização Google Maps e gestão de avaliações. Média de ranqueamento Top 3."
        keywords="Google Maps dentista, SEO local odontologia, dentista perto de mim, Google Meu Negócio clínica, ranqueamento Google dentista"
        canonical="https://odontoresults.com.br/google-top-1"
        structuredData={breadcrumbSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pilar 3: Google Top 1</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Domine o <span className="text-accent">Google Maps</span> na Sua Região
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Apareça em primeiro lugar quando pacientes procuram "dentista perto de mim" e tratamentos odontológicos na sua cidade.
            </p>
            <a href="#contato">
              <Button variant="cta" size="lg" className="text-lg">
                Quero Estar no Topo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Por Que Google Maps */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Seu maior concorrente está no topo do Google.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              70% dos pacientes pesquisam no Google antes de escolher um dentista. Estar no topo significa mais pacientes para você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border/40 hover:border-accent/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">78%</h3>
              <p className="text-muted-foreground">
                das buscas no Google Maps resultam em contato ou visita
              </p>
            </Card>

            <Card className="p-8 text-center border-border/40 hover:border-accent/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5x</h3>
              <p className="text-muted-foreground">
                mais cliques para quem está nas 3 primeiras posições
              </p>
            </Card>

            <Card className="p-8 text-center border-border/40 hover:border-accent/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">+300%</h3>
              <p className="text-muted-foreground">
                aumento médio de visibilidade com otimização profissional
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Estratégia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            O método <span className="text-accent">Google Top 1</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Estratégia para colocar sua clínica no topo das buscas do Google Maps.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Posicionamento de Líder</h3>
                  <p className="text-muted-foreground">
                    Analisamos seus concorrentes e otimizamos o perfil da clínica para ranquear nas principais palavras-chave da sua região.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Avaliações Ouro</h3>
                  <p className="text-muted-foreground">
                    Criamos um plano estratégico para gerar depoimentos reais, positivos e consistentes que aumentam sua credibilidade e atraem novos pacientes.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Presença Infinita</h3>
                  <p className="text-muted-foreground">
                    Mantemos sua clínica ativa e relevante no Google com postagens, fotos e atualizações automáticas que fortalecem sua autoridade local.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Resultados Reais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">Top 3</div>
              <p className="text-lg text-muted-foreground">Posicionamento médio em 90 dias</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">+200</div>
              <p className="text-lg text-muted-foreground">Cliques mensais no perfil</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">4.8★</div>
              <p className="text-lg text-muted-foreground">Nota média das clínicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Domine as Buscas Locais
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Faça sua clínica aparecer em primeiro lugar quando pacientes procuram tratamentos na sua região.
          </p>
          <Button variant="cta" size="lg" className="text-lg">
            Agendar Diagnóstico Gratuito
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4">
            1500+ Clínicas atendidas • 500 mil+ Leads gerados • 10 milhões+ Gerenciados em tráfego pago
          </p>
        </div>
      </section>

      {/* Link para o Método Completo */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Este é um dos 5 Pilares do Método Paciente Previsível
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
            Veja como todos os pilares trabalham juntos em um sistema integrado para gerar resultados previsíveis
          </p>
          <Button variant="default" size="lg" asChild className="gap-2">
            <UtmLink to="/metodo">
              <Eye className="h-4 w-4" />
              Conheça o Método Completo
            </UtmLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleTop1;
