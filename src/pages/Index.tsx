import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Star, TrendingUp, Calendar, BarChart3, MessageSquare, Users, Zap, Clock, CheckCircle, TrendingDown, FileText, Shield } from "lucide-react";
import logoSvg from "@/assets/logo.svg";
import blogPost1 from "@/assets/blog-post-1.png";
import blogPost2 from "@/assets/blog-post-2.png";
import blogPost3 from "@/assets/blog-post-3.png";
import Header from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BentoItem } from "@/components/ui/cybernetic-bento-grid";
import { motion } from "motion/react";
const Index = () => {
  return <>
      <Header />
      
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
        {/* 2) Hero Section - Com Beams Background */}
        <BeamsBackground className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary" intensity="medium">
          <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bata recorde de faturamento com pacientes certos na sua agenda
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Captação de Leads Qualificados, Vitrine de Autoridade, Google Top 1, Agendamento Profissional (CRC + IA) e CRM inteligente para transformar leads em pacientes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sem compromisso • Apresentação personalizada • Plano claro para 90 dias
            </motion.p>
          </div>
        </BeamsBackground>

        {/* 3) Prova Social - Contadores */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl font-bold text-accent">1500+</div>
                <div className="text-left">
                  <div className="text-base font-semibold">Clínicas</div>
                  <div className="text-sm text-muted-foreground">atendidas</div>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border"></div>
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl font-bold text-accent">500 mil+</div>
                <div className="text-left">
                  <div className="text-base font-semibold">Leads</div>
                  <div className="text-sm text-muted-foreground">gerados</div>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border"></div>
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl font-bold text-accent">10 milhões+</div>
                <div className="text-left">
                  <div className="text-base font-semibold">Gerenciados em</div>
                  <div className="text-sm text-muted-foreground">tráfego pago</div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Experiência consolidada em diferentes regiões e especialidades
            </p>
          </div>
        </section>


        {/* 4) O Método - 5 Pilares - Com Cybernetic Bento Grid */}
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

            <div className="bento-grid">
              <BentoItem href="/captacao">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Captação de Leads Qualificados</h3>
                <p className="text-muted-foreground">
                  Anúncios segmentados por tratamento e localização no Facebook, Instagram e Google.
                </p>
              </BentoItem>

              <BentoItem href="/autoridade">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vitrine de Autoridade</h3>
                <p className="text-muted-foreground">
                  Conteúdo estratégico que reduz o risco percebido e aumenta a confiança.
                </p>
              </BentoItem>

              <BentoItem href="/google-top-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Top 1</h3>
                <p className="text-muted-foreground">
                  Otimização de Google Maps e SEO local para alcançar Top 3, em média, nas buscas da sua região.
                </p>
              </BentoItem>

              <BentoItem href="/agendamento">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agendamento Profissional</h3>
                <p className="text-muted-foreground">
                  CRC treinada + IA 24h no WhatsApp para garantir velocidade e consistência no atendimento.
                </p>
              </BentoItem>

              <BentoItem href="/crm">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">CRM Inteligente</h3>
                <p className="text-muted-foreground">
                  Funil claro com foco em Agendamento e Comparecimento, tarefas e automações que aumentam aproveitamento.
                </p>
              </BentoItem>
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
              <BentoItem>
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
              </BentoItem>

              <BentoItem>
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
              </BentoItem>

              <BentoItem>
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
              </BentoItem>

              <BentoItem>
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
              </BentoItem>
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

            <div className="bento-grid">
              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">CRC + IA 24h</h3>
                <p className="text-muted-foreground">
                  Rapidez e consistência no primeiro contato.
                </p>
              </BentoItem>

              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Top 1 local</h3>
                <p className="text-muted-foreground">
                  Método focado em buscas da sua região (Top 3, em média).
                </p>
              </BentoItem>

              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Criativos por tratamento</h3>
                <p className="text-muted-foreground">
                  Linguagem e intenção que viram consulta.
                </p>
              </BentoItem>

              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Funil operacional</h3>
                <p className="text-muted-foreground">
                  Prioridade por valor/urgência e follow-up estruturado.
                </p>
              </BentoItem>

              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Relatórios claros</h3>
                <p className="text-muted-foreground">
                  Visão por Agendamento e Comparecimento.
                </p>
              </BentoItem>

              <BentoItem>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Onboarding ágil</h3>
                <p className="text-muted-foreground">
                  Do plano ao início das campanhas em poucos dias.
                </p>
              </BentoItem>
            </div>
          </div>
        </section>

        {/* Projeção de Resultados */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Projeção de Resultados
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Exemplo de resultado possível em fases mais avançadas do projeto
              </p>
            </div>

            {/* Funil de Marketing - Formato de Funil */}
            <div className="space-y-3 mb-8 max-w-2xl mx-auto">
              {/* Leads Gerados - 75% largura */}
              <div className="w-[75%] mx-auto">
                <Card className="p-3 sm:p-4 bg-accent/10 backdrop-blur-sm border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 text-foreground">Leads Gerados</h3>
                        <p className="text-xl sm:text-2xl font-bold text-accent">588</p>
                      </div>
                    </div>
                    <div className="text-right ml-auto">
                      <p className="font-semibold text-accent text-xs sm:text-sm">Investimento: R$ 10.000,00</p>
                      <p className="text-muted-foreground text-xs">Custo por Lead: R$ 17,00</p>
                    </div>
                  </div>
                  {/* Barra de progresso completa */}
                  <div className="mt-2 h-1 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-accent w-full"></div>
                  </div>
                </Card>
              </div>

              {/* Conector */}
              <div className="flex justify-center">
                <div className="relative w-0 h-4 border-l-2 border-dashed border-accent/30">
                  <div className="absolute left-1/2 -translate-x-1/2 top-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent/30"></div>
                  </div>
                </div>
              </div>

              {/* Agendamentos - 65% largura */}
              <div className="w-[65%] mx-auto">
                <Card className="p-3 sm:p-4 bg-accent/10 backdrop-blur-sm border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 text-foreground">Agendamentos</h3>
                        <p className="text-xl sm:text-2xl font-bold text-accent">176</p>
                      </div>
                    </div>
                    <div className="text-right ml-auto">
                      <p className="font-semibold text-accent text-xs sm:text-sm">Taxa: 30%</p>
                      <p className="text-muted-foreground text-xs">Custo: R$ 56,82</p>
                    </div>
                  </div>
                  {/* Barra de progresso 30% */}
                  <div className="mt-2 h-1 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-accent w-[30%]"></div>
                  </div>
                </Card>
              </div>

              {/* Conector */}
              <div className="flex justify-center">
                <div className="relative w-0 h-4 border-l-2 border-dashed border-accent/30">
                  <div className="absolute left-1/2 -translate-x-1/2 top-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent/30"></div>
                  </div>
                </div>
              </div>

              {/* Comparecimentos - 55% largura */}
              <div className="w-[55%] mx-auto">
                <Card className="p-3 sm:p-4 bg-accent/10 backdrop-blur-sm border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 text-foreground">Comparecimentos</h3>
                        <p className="text-xl sm:text-2xl font-bold text-accent">58</p>
                      </div>
                    </div>
                    <div className="text-right ml-auto">
                      <p className="font-semibold text-accent text-xs sm:text-sm">Taxa: 33%</p>
                      <p className="text-muted-foreground text-xs">Custo: R$ 172,41</p>
                    </div>
                  </div>
                  {/* Barra de progresso 33% de 30% = ~10% */}
                  <div className="mt-2 h-1 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-accent w-[10%]"></div>
                  </div>
                </Card>
              </div>

              {/* Conector */}
              <div className="flex justify-center">
                <div className="relative w-0 h-4 border-l-2 border-dashed border-accent/30">
                  <div className="absolute left-1/2 -translate-x-1/2 top-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent/30"></div>
                  </div>
                </div>
              </div>

              {/* Fechamentos - 45% largura */}
              <div className="w-[45%] mx-auto">
                <Card className="p-3 sm:p-4 bg-accent/10 backdrop-blur-sm border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 text-foreground">Fechamentos</h3>
                        <p className="text-xl sm:text-2xl font-bold text-accent">19</p>
                      </div>
                    </div>
                    <div className="text-right ml-auto">
                      <p className="font-semibold text-accent text-xs sm:text-sm">Taxa: 33%</p>
                      <p className="text-muted-foreground text-xs">Custo: R$ 526,32</p>
                    </div>
                  </div>
                  {/* Barra de progresso 33% de 10% = ~3% */}
                  <div className="mt-2 h-1 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-accent w-[3%]"></div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Cards de Métricas - Abaixo do Funil */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">Ticket Médio</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">R$ 5.000,00</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">Faturamento</p>
                <p className="text-xl sm:text-2xl font-bold text-accent">R$ 95.000,00</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">ROI</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">9.50x</p>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">*Projeção baseada em dados de clientes em fases avançadas. Resultados podem variar.</p>
              <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="w-full sm:w-auto">
                  Quero resultados como esses
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>


        {/* Últimos Posts do Blog */}
        <section id="ultimos-posts" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Blog da Odonto Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Confira nossas dicas, estratégias e insights para clínicas odontológicas crescerem mais com marketing digital.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://blog.odontoresults.com.br/post/metodo-paciente-previsivel-odonto-results" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                    <img 
                      src={blogPost1}
                      alt="Método Paciente Previsível"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Conheça o Método Paciente Previsível da Odonto Results
                    </h3>
                    <p className="text-muted-foreground">
                      Descubra como o Método Paciente Previsível da Odonto Results potencializa captação, agendamento e faturamento em clínicas.
                    </p>
                  </div>
                </Card>
              </a>

              <a href="https://blog.odontoresults.com.br/post/calculadora-de-marketing-odontologico-como-definir-investimentos" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                    <img 
                      src={blogPost2}
                      alt="Calculadora de marketing odontológico"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Calculadora de marketing odontológico: como definir investimentos?
                    </h3>
                    <p className="text-muted-foreground">
                      Use a calculadora de marketing odontológico para estimar leads, conversões e investimentos ideais para sua clínica dental.
                    </p>
                  </div>
                </Card>
              </a>

              <a href="https://blog.odontoresults.com.br/post/marketing-odontologico-2025-guia-completo-atrair-pacientes" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                    <img 
                      src={blogPost3}
                      alt="Marketing Odontológico em 2025"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Marketing Odontológico em 2025: Guia Completo para Atrair Pacientes
                    </h3>
                    <p className="text-muted-foreground">
                      Entenda as estratégias, regras do CFO, SEO Local, inbound e automação para crescer sua clínica odontológica em 2025.
                    </p>
                  </div>
                </Card>
              </a>
            </div>

            <div className="text-center mt-8">
              <a href="https://blog.odontoresults.com.br/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Ver todos os artigos
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
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
                  <li><a href="/sobre" className="hover:text-accent transition-colors">Sobre</a></li>
                  <li><a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contato</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>faleconosco@odontoresults.com.br</li>
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
    </>;
};
export default Index;