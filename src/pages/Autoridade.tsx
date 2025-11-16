import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Award, Eye, Star, Video } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { UtmLink } from "@/components/UtmLink";

const Autoridade = () => {
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
      "name": "Vitrine de Autoridade",
      "item": "https://odontoresults.com.br/vitrine-autoridade-digital"
    }]
  };

  return <div className="min-h-screen bg-background">
      <SEO 
        title="Vitrine de Autoridade - Construa Reputação Digital para Dentistas"
        description="Construa autoridade digital com conteúdos estratégicos: vídeos educativos, casos antes/depois e depoimentos que convertem pacientes. Marketing de conteúdo odontológico."
        keywords="autoridade odontológica, marketing de conteúdo dentista, branding clínica, reputação online dentista, vídeos educativos odontologia"
        canonical="https://odontoresults.com.br/vitrine-autoridade-digital"
        structuredData={breadcrumbSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pilar 2: Vitrine de Autoridade</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Seja a Clínica <span className="text-accent">Referência</span> da Sua Região
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdos estratégicos que posicionam sua clínica como autoridade e reduzem a resistência na hora da decisão.
            </p>
            <a href="#contato">
              <Button variant="cta" size="lg" className="text-lg">
                Quero Construir Autoridade
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Estratégia de Conteúdo */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Por Que Autoridade é Fundamental?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pacientes escolhem clínicas que transmitem confiança e competência. Sua vitrine digital precisa provar isso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Antes x Depois</h3>
              <p className="text-muted-foreground text-lg">
                Casos reais que demonstram a qualidade dos seus tratamentos e aumentam a confiança do paciente.
              </p>
            </Card>

            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <Video className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Vídeos Educativos</h3>
              <p className="text-muted-foreground text-lg">
                Conteúdo que educa sobre tratamentos, quebra objeções e posiciona você como especialista.
              </p>
            </Card>

            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Depoimentos</h3>
              <p className="text-muted-foreground text-lg">
                Histórias reais de pacientes satisfeitos que validam a experiência na sua clínica.
              </p>
            </Card>

            <Card className="p-8 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg">
              <Star className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Presença Consistente</h3>
              <p className="text-muted-foreground text-lg">Publicações regulares que mantêm sua clínica sempre visível,  relevante e humanizada.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Vitrine de <span className="text-accent">Autoridade</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Posicionamento estratégico que transforma o seu perfil em referência na odontologia.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6 py-2 hover:bg-accent/5 transition-all hover:pl-8">
                  <h3 className="font-semibold text-xl mb-2">1. Roteiro e Copy Estratégica</h3>
                  <p className="text-muted-foreground">Textos e falas planejadas para gerar autoridade e despertar o interesse do paciente.</p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2 hover:bg-accent/5 transition-all hover:pl-8">
                  <h3 className="font-semibold text-xl mb-2">2. Gravação Guiada</h3>
                  <p className="text-muted-foreground">Orientamos o doutor em vídeos autênticos que mostram técnica, empatia e experiência.</p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2 hover:bg-accent/5 transition-all hover:pl-8">
                  <h3 className="font-semibold text-xl mb-2">3. Edição Profissional</h3>
                  <p className="text-muted-foreground">Cortes, legendas e artes que reforçam credibilidade e destacam seus diferenciais.</p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2 hover:bg-accent/5 transition-all hover:pl-8">
                  <h3 className="font-semibold text-xl mb-2">4. Construção de Autoridade</h3>
                  <p className="text-muted-foreground">Publicações consistentes que consolidam sua imagem como especialista na área.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">10x</div>
                    <p className="text-lg font-semibold">Mais Autoridade</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">10x</div>
                    <p className="text-lg font-semibold">Mais Qualidade nos Pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Construa Autoridade e Atraia Mais Pacientes
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transforme sua presença digital em uma máquina de captação de pacientes qualificados.
          </p>
          <Button variant="cta" size="lg" className="text-lg">
            Agendar uma Apresentação
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
    </div>;
};
export default Autoridade;