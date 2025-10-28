import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const Captacao = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pilar 1: Captação</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Leads Qualificados que Viram <span className="text-accent">Pacientes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">Anúncios segmentados no Facebook, Instagram e Google que atraem pacientes com intenção de contratar seus tratamentos.</p>
            <a href="#contato">
              <Button variant="cta" size="lg" className="text-lg">
                Quero Mais Pacientes
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Como Geramos Leads Qualificados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um sistema completo de captação que combina estratégia, criativos impactantes e segmentação precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Segmentação Precisa</h3>
              <p className="text-muted-foreground">
                Anúncios direcionados para pessoas na sua região que procuram tratamentos odontológicos específicos.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Criativos por Tratamento</h3>
              <p className="text-muted-foreground">Anúncios específicos para implantes, ortodontia, lentes de contato, HOF e outros tratamentos de alto valor.</p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Múltiplas Plataformas</h3>
              <p className="text-muted-foreground">
                Presença estratégica no Facebook, Instagram e Google Ads para captar pacientes em diferentes momentos.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Otimização Contínua</h3>
              <p className="text-muted-foreground">
                Monitoramento diário e ajustes em tempo real para maximizar resultados e reduzir custo por lead.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipos de Anúncios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Anúncios que <span className="text-accent">Convertem</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Criamos campanhas específicas para cada tratamento, com mensagens e imagens que falam diretamente com o paciente ideal.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Facebook & Instagram Ads</h3>
                    <p className="text-muted-foreground">
                      Alcance pessoas na sua região interessadas em tratamentos estéticos e funcionais.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Google Ads</h3>
                    <p className="text-muted-foreground">
                      Apareça quando as pessoas procuram "dentista perto de mim" ou tratamentos específicos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Remarketing</h3>
                    <p className="text-muted-foreground">
                      Impacte novamente quem já demonstrou interesse na sua clínica ou visitou seu site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-4">+500 mil</div>
                  <p className="text-xl font-semibold mb-2">Leads Gerados</p>
                  <p className="text-muted-foreground">para clínicas parceiras</p>
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
            Pronto para Atrair Mais Pacientes?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma conversa e descubra como podemos encher sua agenda com pacientes qualificados.
          </p>
          <Button variant="cta" size="lg" className="text-lg">
            Agendar Diagnóstico Gratuito
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4">
            Sem compromisso • Diagnóstico personalizado • Resultados previsíveis
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Odonto Results. Todos os direitos reservados.
            </p>
            <Link to="/" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium">
              ← Voltar para Home
            </Link>
          </div>
        </div>
      </footer>
    </div>;
};
export default Captacao;