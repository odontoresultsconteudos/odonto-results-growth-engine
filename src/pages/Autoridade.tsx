import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Award, Eye, Star, Video } from "lucide-react";
import { Link } from "react-router-dom";
const Autoridade = () => {
  return <div className="min-h-screen bg-background">
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
            <Card className="p-8 border-border/40">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Antes x Depois</h3>
              <p className="text-muted-foreground text-lg">
                Casos reais que demonstram a qualidade dos seus tratamentos e aumentam a confiança do paciente.
              </p>
            </Card>

            <Card className="p-8 border-border/40">
              <Video className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Vídeos Educativos</h3>
              <p className="text-muted-foreground text-lg">
                Conteúdo que educa sobre tratamentos, quebra objeções e posiciona você como especialista.
              </p>
            </Card>

            <Card className="p-8 border-border/40">
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Depoimentos</h3>
              <p className="text-muted-foreground text-lg">
                Histórias reais de pacientes satisfeitos que validam a experiência na sua clínica.
              </p>
            </Card>

            <Card className="p-8 border-border/40">
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
                Conteúdo que <span className="text-accent">Converte</span>
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-2">Gestão de Redes Sociais</h3>
                  <p className="text-muted-foreground">Posts e reels planejados para engajar e educar sua audiência.</p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-2">Produção de Conteúdo</h3>
                  <p className="text-muted-foreground">Vídeos e artes que destacam seus diferenciais e tratamentos.</p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-2">Calendário Editorial</h3>
                  <p className="text-muted-foreground">
                    Planejamento mensal com temas, datas comemorativas e campanhas específicas.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-2">Construção de Autoridade</h3>
                  <p className="text-muted-foreground">Posicionamento estratégico que estabelece sua clínica e você como referência e especialista.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">10x</div>
                    <p className="text-lg font-semibold">Mais Engajamento</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">+1000</div>
                    <p className="text-lg font-semibold">Seguidores Qualificados/Mês</p>
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
export default Autoridade;