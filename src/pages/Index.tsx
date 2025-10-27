import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Calendar, CreditCard, Star, Target, MessageSquare, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import alexImage from "@/assets/alex-gurrao.png";
import viniciusImage from "@/assets/vinicius-ragazzi.png";
import financingImage from "@/assets/financing.jpg";
import crmLeadsImage from "@/assets/crm-leads.jpg";
import logoImage from "@/assets/logo.png";
import meetingImage from "@/assets/meeting.jpg";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <img src={logoImage} alt="Odonto Results Logo" className="h-12" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Fazemos a sua Clínica bater Recorde de Faturamento
              </h1>
              <p className="text-xl text-muted-foreground">
                Com o Método Paciente Previsível, sua clínica odontológica terá leads qualificados e agendamentos estruturados para crescer com previsibilidade.
              </p>
              <a href="#contato">
                <Button variant="cta" size="lg" className="text-lg">
                  Solicitar Diagnóstico
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={alexImage} 
                  alt="Alex Gurrão - CEO" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <img 
                  src={viniciusImage} 
                  alt="Vinícius Ragazzi - COO" 
                  className="rounded-lg shadow-2xl w-full h-auto mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Método Paciente Previsível: Sua Estratégia para o Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistema estruturado em 5 pilares que transforma audiência em faturamento real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/captacao" className="block">
              <Card className="p-6 hover:shadow-xl transition-shadow h-full hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Captação de Leads</h3>
                <p className="text-muted-foreground">
                  Anúncios qualificados no Facebook, Instagram e Google com segmentação precisa por tratamento e localização.
                </p>
              </Card>
            </Link>

            <Link to="/autoridade" className="block">
              <Card className="p-6 hover:shadow-xl transition-shadow h-full hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vitrine de Autoridade</h3>
                <p className="text-muted-foreground">
                  Conteúdo estratégico que prova sua competência e reduz o risco percebido pelos pacientes.
                </p>
              </Card>
            </Link>

            <Link to="/google-top-1" className="block">
              <Card className="p-6 hover:shadow-xl transition-shadow h-full hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Top 1</h3>
                <p className="text-muted-foreground">
                  Método exclusivo para ocupar o topo das buscas locais com otimização de Google Maps e SEO local.
                </p>
              </Card>
            </Link>

            <Link to="/agendamento" className="block">
              <Card className="p-6 hover:shadow-xl transition-shadow h-full hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agendamento Estruturado</h3>
                <p className="text-muted-foreground">
                  CRC profissional e IA 24/7 no WhatsApp para converter leads em consultas agendadas com alta taxa de comparecimento.
                </p>
              </Card>
            </Link>

            <Link to="/crm" className="block">
              <Card className="p-6 hover:shadow-xl transition-shadow h-full hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">CRM Inteligente</h3>
                <p className="text-muted-foreground">
                  Gestão completa do funil com dashboards em tempo real e automações que aumentam aproveitamento.
                </p>
              </Card>
            </Link>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financiamento Facilitado</h3>
              <p className="text-muted-foreground">
                Suporte para linhas de crédito de alto ticket. Clínica recebe à vista, paciente parcela facilmente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture Quality Section */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={crmLeadsImage} 
                alt="Gestão de Leads" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Captação de Leads: Qualidade acima de Quantidade
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Perguntas Qualificadas</h3>
                    <p className="text-muted-foreground">
                      Utilizamos perguntas estratégicas nos anúncios para garantir leads com real interesse e capacidade de investimento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Integração com CRM</h3>
                    <p className="text-muted-foreground">
                      Automação completa desde o primeiro contato até o agendamento, com scripts validados e rotinas de follow-up.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Localização e Investimento</h3>
                    <p className="text-muted-foreground">
                      Filtros avançados garantem que apenas leads da sua região e perfil ideal cheguem até você.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRC Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Agendamento Estruturado: Previsibilidade e Eficiência
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Profissionais Treinados</h3>
              <p className="text-muted-foreground">
                Utilizamos a técnica de soft selling para abordar cada lead, aumentar conexão e interesse antes de agendar.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Scripts de Agendamento</h3>
              <p className="text-muted-foreground">
                Metodologia validada para converter leads em consultas, com lembretes e confirmações automáticas.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Suporte Full-Time</h3>
              <p className="text-muted-foreground">
                IA no WhatsApp 24h para não perder nenhum lead fora do horário comercial. Sempre disponível para seus pacientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Alavancagem de Caixa com Financiamento: Expanda sua clínica oferecendo facilidade de pagamento
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground">
                      Integração completa com financeiras para facilitar o acesso dos pacientes aos tratamentos de alto valor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Aumento Rápido</h3>
                    <p className="text-muted-foreground">
                      Clínica recebe à vista enquanto o paciente parcela com juros competitivos, aumentando sua taxa de fechamento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pagamento Integral</h3>
                    <p className="text-muted-foreground">
                      Fluxo de caixa saudável desde o início: você recebe antes de começar o tratamento enquanto o paciente paga no prazo dele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={financingImage} 
                alt="Financiamento para clínicas" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Social Mídia: Construa Sua Autoridade Online
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Conteúdo Educacional</h3>
                    <p className="text-muted-foreground">
                      Posts estratégicos que educam e engajam seu público, posicionando você como referência.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Roteiros de Vídeos</h3>
                    <p className="text-muted-foreground">
                      Desenvolvemos roteiros completos e criativos que conectam e geram resultados nas redes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Produção Profissional</h3>
                    <p className="text-muted-foreground">
                      Arte gráfica e identidade visual alinhadas para fortalecer sua marca no digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={viniciusImage} 
                alt="Autoridade Online" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Top 1 Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Método Top 1 no Google: Aumente Sua Visibilidade
          </h2>
          <div className="space-y-4 text-left">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-lg">Posicionamento de Lider: Otimização completa da ficha no Google Meu Negócio</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-lg">Avaliações Ouro: Estratégia para multiplicar avaliações positivas</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-lg">Presença Infinita: Posts e atualizações constantes para máxima relevância</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a Odonto Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fundada em fevereiro de 2020, somos especialistas em transformar audiência em faturamento real para clínicas odontológicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar clínicas odontológicas com um sistema estruturado de marketing digital que integra captação, gestão de leads e agendamento, gerando resultados previsíveis e faturamento recorde.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a referência nacional em marketing digital para odontologia, reconhecida pela excelência operacional e resultados comprovados.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clínicas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Consultas Agendadas</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <img
                src={alexImage}
                alt="Alex Gurrão - CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent/20"
              />
              <h3 className="text-xl font-bold mb-2">Alex Gurrão</h3>
              <p className="text-accent font-medium mb-3">CEO & Co-Fundador</p>
              <p className="text-sm text-muted-foreground">
                Especialista em estratégias de captação e conversão para alto ticket no mercado odontológico
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <img
                src={viniciusImage}
                alt="Vinícius Ragazzi - COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent/20"
              />
              <h3 className="text-xl font-bold mb-2">Vinícius Ragazzi</h3>
              <p className="text-accent font-medium mb-3">COO & Co-Fundador</p>
              <p className="text-sm text-muted-foreground">
                Expert em automação, CRM e processos estruturados para maximizar resultados operacionais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={meetingImage} 
                alt="Videochamada profissional" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Agende sua Apresentação
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubra como podemos transformar sua clínica com o Método Paciente Previsível. Agende uma videochamada e receba uma proposta personalizada.
              </p>
              <a href="#contato">
                <Button variant="cta" size="lg" className="text-lg">
                  Solicitar Apresentação
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <img src={logoImage} alt="Odonto Results" className="h-10 mx-auto" />
          </div>
          <p className="text-muted-foreground mb-2">
            © 2025 Odonto Results. Fundada em fevereiro de 2020.
          </p>
          <p className="text-muted-foreground">
            Transformando clínicas odontológicas em máquinas de crescimento previsível.
          </p>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Index;
