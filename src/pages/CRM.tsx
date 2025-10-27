import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { BarChart3, Database, Filter, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CRM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Database className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pilar 5: CRM</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Gestão Inteligente de <span className="text-accent">Todos os Leads</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              CRM integrado que organiza, prioriza e maximiza o aproveitamento de cada oportunidade de negócio.
            </p>
            <a href="#contato">
              <Button variant="cta" size="lg" className="text-lg">
                Quero Organizar Meus Leads
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Por Que CRM é Essencial */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Sem CRM, Você Perde Dinheiro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estudos mostram que clínicas sem gestão adequada de leads perdem até 60% das oportunidades por falta de follow-up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
              <h3 className="text-2xl font-bold mb-4 text-destructive">Sem CRM:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Leads perdidos no WhatsApp e planilhas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Sem priorização dos contatos mais quentes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Follow-up manual e inconsistente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Impossível medir resultados reais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Desperdício de investimento em anúncios</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-accent/20 bg-accent/5">
              <h3 className="text-2xl font-bold mb-4 text-accent">Com CRM Odonto Results:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>100% dos leads organizados e rastreados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Priorização automática por score e valor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Follow-up automatizado em múltiplos canais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Relatórios completos de desempenho</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>ROI positivo e previsível</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Recursos do CRM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
            Funcionalidades <span className="text-accent">Poderosas</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <Database className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integração Total</h3>
              <p className="text-muted-foreground">
                RD Station, HubSpot, Google Sheets e WhatsApp em um só lugar.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <Filter className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Qualificação Automática</h3>
              <p className="text-muted-foreground">
                Score de leads baseado em comportamento e dados demográficos.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Funil Completo</h3>
              <p className="text-muted-foreground">
                Visualize cada lead em MQL → Contato → Agendado → Compareceu → Fechou.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <BarChart3 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dashboards em Tempo Real</h3>
              <p className="text-muted-foreground">
                Métricas de desempenho, custo por lead e ROI atualizados diariamente.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <Database className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Histórico Completo</h3>
              <p className="text-muted-foreground">
                Todas as interações, mensagens e ligações registradas por paciente.
              </p>
            </Card>

            <Card className="p-6 border-border/40 hover:border-accent/50 transition-all">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automações Inteligentes</h3>
              <p className="text-muted-foreground">
                Tarefas, lembretes e follow-ups configurados para não perder nada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Indicadores Monitorados */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Indicadores que Acompanhamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Métricas claras para você tomar decisões baseadas em dados reais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">MQL</div>
              <p className="text-muted-foreground">Marketing Qualified Lead</p>
              <p className="text-sm text-muted-foreground/80 mt-2">Leads que entraram no funil</p>
            </div>

            <div className="bg-card border border-border/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">SQL</div>
              <p className="text-muted-foreground">Sales Qualified Lead</p>
              <p className="text-sm text-muted-foreground/80 mt-2">Leads qualificados para venda</p>
            </div>

            <div className="bg-card border border-border/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">Taxa</div>
              <p className="text-muted-foreground">Conversão</p>
              <p className="text-sm text-muted-foreground/80 mt-2">% de leads que viraram pacientes</p>
            </div>

            <div className="bg-card border border-border/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">CAC</div>
              <p className="text-muted-foreground">Custo de Aquisição</p>
              <p className="text-sm text-muted-foreground/80 mt-2">Quanto custa cada novo paciente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Impacto Mensurável
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">+45%</div>
              <p className="text-lg text-muted-foreground">Aproveitamento de leads</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">-30%</div>
              <p className="text-lg text-muted-foreground">Custo por paciente</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">3x</div>
              <p className="text-lg text-muted-foreground">ROI médio em 6 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Maximize Cada Oportunidade
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tenha controle total sobre seus leads e transforme mais contatos em pacientes pagantes.
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
    </div>
  );
};

export default CRM;
