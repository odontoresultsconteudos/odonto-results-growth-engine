import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Bot, Calendar, Clock, PhoneCall } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const Agendamento = () => {
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
      "name": "Agendamento Profissional",
      "item": "https://odontoresults.com.br/agendamento"
    }]
  };

  return <div className="min-h-screen bg-background">
      <SEO 
        title="Sistema de Agendamento Inteligente - CRC + IA WhatsApp 24h"
        description="Converta leads em consultas com CRC treinada + IA 24h no WhatsApp. Sistema profissional de agendamento que aumenta taxa de comparecimento em +85%."
        keywords="agendamento online dentista, CRC odontologia, chatbot WhatsApp clínica, automação agendamento, IA agendamento pacientes"
        canonical="https://odontoresults.com.br/agendamento"
        structuredData={breadcrumbSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pilar 4: Agendamento</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme Leads em <span className="text-accent">Consultas Agendadas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">CRC profissional + IA 24h no WhatsApp para aproveitar ao máximo cada paciente captado.</p>
            <a href="#contato">
              <Button variant="cta" size="lg" className="text-lg">
                Quero Mais Agendamentos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Dupla de Agendamento */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Dois Sistemas Trabalhando por Você
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Combinamos equipe humana profissional + inteligência artificial para buscarmos o máximo de aproveitamento de cada lead.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-border/40 bg-gradient-to-br from-primary/5 to-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <PhoneCall className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CRC Profissional</h3>
                  <p className="text-muted-foreground">Central de Relacionamento</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Equipe treinada com scripts validados</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Abordagem personalizada por tratamento</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Follow-up estruturado e consistente</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Lembretes e confirmação de consultas</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <p className="text-sm font-medium text-accent">Horário: Segunda a Sexta, 9h às 18h</p>
              </div>
            </Card>

            <Card className="p-8 border-border/40 bg-gradient-to-br from-accent/5 to-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IA de Agendamento</h3>
                  <p className="text-muted-foreground">WhatsApp 24/7</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Atendimento automático 24h por dia</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Qualificação inteligente dos leads</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Padronização na qualidade do atendimento</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">Resposta instantânea a qualquer hora</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <p className="text-sm font-medium text-accent">Horário: 24 horas, 7 dias por semana</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo de Agendamento */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
            Como Funciona o <span className="text-accent">Processo</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-card border border-border/40 hover:border-accent/50 transition-all hover:shadow-lg rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Chega</h3>
                <p className="text-muted-foreground">
                  Paciente demonstra interesse via anúncio, Google ou redes sociais.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border/40 hover:border-accent/50 transition-all hover:shadow-lg rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualificação</h3>
                <p className="text-muted-foreground">
                  CRC ou IA identifica o tratamento de interesse e urgência do paciente.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border/40 hover:border-accent/50 transition-all hover:shadow-lg rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Agendamento</h3>
                <p className="text-muted-foreground">
                  Consulta marcada diretamente na agenda da clínica com confirmação.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border/40 hover:border-accent/50 transition-all hover:shadow-lg rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Protocolo de Confirmação</h3>
                <p className="text-muted-foreground">Sistema estruturado de confirmação para reduzir faltas e aumentar o comparecimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Resultados Médios das Clínicas Parceiras
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">-70%</div>
              <p className="text-muted-foreground">Redução no tempo de resposta</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">+85%</div>
              <p className="text-muted-foreground">Taxa de comparecimento</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">+300%</div>
              <p className="text-muted-foreground">Mais consultas agendadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">Nunca Mais Perca um Paciente por Falta de Tentativa</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tenha uma máquina de agendamento profissional trabalhando 24/7 para sua clínica.
          </p>
          <Button variant="cta" size="lg" className="text-lg">
            Agendar Diagnóstico Gratuito
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4">
            1500+ Clínicas atendidas • 500 mil+ Leads gerados • 10 milhões+ Gerenciados em tráfego pago
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Agendamento;