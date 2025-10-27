import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Target, 
  Star, 
  TrendingUp, 
  Calendar, 
  BarChart3,
  MessageSquare,
  Users,
  Zap,
  Clock,
  CheckCircle,
  TrendingDown,
  FileText,
  Shield
} from "lucide-react";
import logoSvg from "@/assets/logo.svg";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <>
      <Header />
      <WhatsAppButton />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur border-t border-border/40">
        <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="cta" size="lg" className="w-full">
            Agende uma Apresentação
            <ArrowRight className="ml-2" />
          </Button>
        </a>
      </div>

      <main className="min-h-screen pb-20 md:pb-0">
        {/* 2) Hero Section - Sem Imagens */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bata recorde de faturamento com pacientes certos na sua agenda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Captação de Leads Qualificados, Vitrine de Autoridade, Google Top 1, Agendamento Profissional (CRC + IA) e CRM inteligente para transformar leads em pacientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="text-lg w-full sm:w-auto">
                  Agende uma Apresentação
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="#como-trabalhamos">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto bg-white/10 border-white/20 hover:bg-white/20 text-foreground">
                  Ver como funciona
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Sem compromisso • Apresentação personalizada • Plano claro para 90 dias
            </p>
          </div>
        </section>

        {/* 3) Prova Social - Contadores */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <Card className="p-12">
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-4">1500+</div>
                <div className="text-xl font-semibold mb-2">Clínicas atendidas</div>
              </Card>
              <Card className="p-12">
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-4">3 milhões+</div>
                <div className="text-xl font-semibold mb-2">Gerenciados em tráfego pago</div>
              </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Experiência consolidada em diferentes regiões e especialidades.
            </p>
          </div>
        </section>

        {/* 4) O Método - 5 Pilares (SEM IMAGENS) */}
        <section id="metodo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Seu crescimento em 5 pilares
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estratégia ponta a ponta — do anúncio ao comparecimento — para transformar leads em pacientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-8 hover:shadow-xl transition-shadow hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Captação de Leads Qualificados</h3>
                <p className="text-muted-foreground">
                  Anúncios segmentados por tratamento e localização no Facebook, Instagram e Google.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vitrine de Autoridade</h3>
                <p className="text-muted-foreground">
                  Conteúdo estratégico que reduz o risco percebido e aumenta a confiança.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Top 1</h3>
                <p className="text-muted-foreground">
                  Otimização de Google Maps e SEO local para alcançar Top 3, em média, nas buscas da sua região.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agendamento Profissional</h3>
                <p className="text-muted-foreground">
                  CRC treinada + IA 24h no WhatsApp para garantir velocidade e consistência no atendimento.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">CRM Inteligente</h3>
                <p className="text-muted-foreground">
                  Funil claro com foco em Agendamento e Comparecimento, tarefas e automações que aumentam aproveitamento.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg">
                  Conhecer o Método
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* 5) Como Trabalhamos - 4 Passos */}
        <section id="como-trabalhamos" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Como colocamos pacientes na sua cadeira
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Diagnóstico</h3>
                    <p className="text-muted-foreground text-lg">
                      Entendemos sua região, metas e tratamentos prioritários.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Plano de Tráfego e Conteúdo</h3>
                    <p className="text-muted-foreground text-lg">
                      Segmentação por tratamento, criativos e calendário editorial.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Aquisição & Agendamento</h3>
                    <p className="text-muted-foreground text-lg">
                      Mídia ativa + CRC e IA 24/7 com protocolo de confirmação.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Gestão do Funil</h3>
                    <p className="text-muted-foreground text-lg">
                      Acompanhamos Agendamento e Comparecimento e otimizamos continuamente.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg">
                  Agende uma Apresentação
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* 6) Diferenciais - Grid 2x3 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                O que nos diferencia
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">CRC + IA 24h</h3>
                <p className="text-muted-foreground">
                  Rapidez e consistência no primeiro contato.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Top 1 local</h3>
                <p className="text-muted-foreground">
                  Método focado em buscas da sua região (Top 3, em média).
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Criativos por tratamento</h3>
                <p className="text-muted-foreground">
                  Linguagem e intenção que viram consulta.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Funil operacional</h3>
                <p className="text-muted-foreground">
                  Prioridade por valor/urgência e follow-up estruturado.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Relatórios claros</h3>
                <p className="text-muted-foreground">
                  Visão por Agendamento e Comparecimento.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Onboarding ágil</h3>
                <p className="text-muted-foreground">
                  Do plano ao início das campanhas em poucos dias.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8) FAQ - 6 Perguntas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Em quanto tempo começo a perceber resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Varia por região e tratamento. Na apresentação, mostramos um plano de metas e expectativas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Funciona em cidade pequena ou região rural?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. Ajustamos segmentação, raio e linguagem para seu contexto local.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Vocês atendem qualquer especialidade?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Atuamos com tratamentos funcionais e estéticos. Adequamos a campanha por prioridade clínica.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Quem fala com os leads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  CRC treinada e IA 24h no WhatsApp, com protocolo de confirmação para aumentar comparecimento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Como acompanho os resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Relatórios claros com foco em Agendamento e Comparecimento, além de rotinas de otimização.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Posso pausar ou priorizar tratamentos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O plano é vivo e pode priorizar campanhas por demanda e sazonalidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 9) CTA Final */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para encher sua agenda com pacientes qualificados?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma apresentação e receba um plano claro para os próximos 90 dias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="text-lg w-full sm:w-auto">
                  Agende uma Apresentação
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* 10) Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-8">
              <div>
                <img src={logoSvg} alt="Odonto Results" className="h-10 mb-4" />
                <p className="text-sm text-muted-foreground">
                  Transformando clínicas odontológicas através do Método Paciente Previsível.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Navegação</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#metodo" className="hover:text-accent transition-colors">Método</a></li>
                  <li><a href="http://blog.odontoresults.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Blog</a></li>
                  <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
                  <li><a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contato</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>contato@odontoresults.com.br</li>
                  <li>WhatsApp: (11) 99999-9999</li>
                  <li className="pt-2">
                    <div className="text-xs">CNPJ: 00.000.000/0001-00</div>
                    <div className="text-xs">São Paulo, SP</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© 2025 Odonto Results. Todos os direitos reservados.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
                  <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
