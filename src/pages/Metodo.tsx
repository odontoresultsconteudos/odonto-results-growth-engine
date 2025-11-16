import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UtmLink } from "@/components/UtmLink";
import { UtmExternalLink } from "@/components/UtmExternalLink";
import { 
  Target, 
  Award, 
  Search, 
  Calendar, 
  Database,
  Check,
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import metaPartnerBadge from "@/assets/meta-partner-badge.webp";
import googlePartnerBadge from "@/assets/google-partner-badge.webp";
import manychatBadge from "@/assets/manychat-badge.webp";

const Metodo = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://odontoresults.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Método Paciente Previsível",
        "item": "https://odontoresults.com.br/metodo"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Método Paciente Previsível",
    "description": "Sistema integrado de marketing odontológico com 5 pilares: Captação de Leads, Vitrine de Autoridade, Google Top 1, Agendamento Inteligente e CRM. Resultados previsíveis para clínicas odontológicas.",
    "provider": {
      "@type": "Organization",
      "name": "OdontoResults"
    },
    "serviceType": "Marketing Odontológico",
    "areaServed": "BR"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Posso começar com apenas um pilar ou preciso implementar todos de uma vez?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Embora o método funcione melhor de forma integrada, é possível começar com os pilares mais adequados para a situação atual da clínica e expandir gradualmente conforme as necessidades e objetivos específicos."
        }
      },
      {
        "@type": "Question",
        "name": "O método funciona para todas as especialidades odontológicas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o método é adaptável para todas as especialidades odontológicas - ortodontia, implantodontia, odontopediatria, periodontia, estética dental e outras. Adaptamos as estratégias de captação, conteúdo e conversão para cada nicho específico."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o acompanhamento dos resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Através do CRM Inteligente fornecemos dashboards com métricas em tempo real, relatórios periódicos detalhados e análise de ROI de cada pilar. Você terá visibilidade completa de leads gerados, consultas agendadas, taxa de conversão e custo por aquisição de paciente."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso mudar meu sistema de gestão atual?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não necessariamente. O método se integra com diversos sistemas existentes. Na apresentação, avaliamos sua infraestrutura e identificamos as melhores formas de integração."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o primeiro passo para aplicar o método na minha clínica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agende uma apresentação onde analisamos sua situação atual, identificamos oportunidades e mostramos como o método pode ser aplicado na sua realidade. Sem compromisso, apenas insights valiosos."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o método gera resultados previsíveis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Porque é baseado em dados reais de mais de 1.500 clínicas odontológicas, utiliza otimização contínua data-driven através do CRM e integra todos os pontos de contato do paciente em um sistema único. A CRC trabalha internamente em conjunto com a equipe de marketing, permitindo ajustes rápidos e precisos baseados em feedback real."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Funciona o Método Paciente Previsível",
    "description": "Sistema integrado de 5 pilares para gerar pacientes de forma previsível para clínicas odontológicas",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Captação de Leads Qualificados",
        "text": "Geração de leads através de anúncios segmentados em múltiplas plataformas digitais"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Vitrine de Autoridade",
        "text": "Construção de credibilidade através de conteúdo estratégico e provas sociais"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Google Top 1",
        "text": "Posicionamento orgânico no Google Maps e Pesquisa Local"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Agendamento Inteligente",
        "text": "Conversão de leads em consultas agendadas através de CRC profissional e IA"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "CRM Inteligente",
        "text": "Gestão e otimização contínua data-driven baseada em dados reais"
      }
    ]
  };

  const pilares = [
    {
      numero: "01",
      titulo: "Captação de Leads Qualificados",
      icon: Target,
      descricao: "A captação é o primeiro pilar do método e representa a porta de entrada do sistema. Não se trata apenas de gerar volume de leads, mas de atrair pessoas realmente interessadas nos tratamentos específicos que sua clínica oferece.",
      descricao2: "Através de segmentação precisa em múltiplas plataformas (Facebook, Instagram, Google Ads), criamos campanhas específicas por tratamento - implantes, ortodontia, harmonização, clareamento - cada uma com suas próprias estratégias de atração e conversão.",
      descricao3: "Este pilar alimenta todo o sistema. Sem leads qualificados entrando consistentemente, os outros pilares não têm com o que trabalhar. É a base sobre a qual construímos todo o processo de geração de pacientes previsível.",
      beneficios: [
        "Segmentação precisa por tratamento e perfil de paciente",
        "Campanhas simultâneas em múltiplas plataformas digitais",
        "Otimização contínua baseada em dados de conversão",
        "Leads qualificados prontos para o processo de agendamento"
      ],
      estatistica: "+500 mil leads qualificados gerados",
      link: "/captacao-leads-qualificados"
    },
    {
      numero: "02",
      titulo: "Vitrine de Autoridade Digital",
      icon: Award,
      descricao: "A autoridade é o pilar que transforma sua clínica de 'mais uma opção' para 'a referência' no mercado local. Enquanto a captação traz pessoas interessadas, a autoridade converte esse interesse em confiança e decisão de compra.",
      descricao2: "Construímos essa autoridade através de conteúdo estratégico: casos antes/depois reais, vídeos educativos do dentista explicando tratamentos, depoimentos autênticos de pacientes e presença consistente nas redes sociais. Cada peça de conteúdo é planejada para gerar credibilidade e reduzir objeções.",
      descricao3: "Este pilar trabalha em conjunto com a captação - enquanto os anúncios trazem o lead, a autoridade digital é o que o lead encontra quando pesquisa sobre sua clínica, influenciando diretamente a taxa de conversão em consultas agendadas.",
      beneficios: [
        "Conteúdo estratégico que gera credibilidade e confiança",
        "Provas sociais com casos reais e depoimentos verificados",
        "Presença digital consistente que nutre relacionamento",
        "Redução de objeções e aumento da taxa de conversão"
      ],
      link: "/vitrine-autoridade-digital"
    },
    {
      numero: "03",
      titulo: "Google Top 1 - Posicionamento Orgânico",
      icon: Search,
      descricao: "O posicionamento no Google, especialmente no Google Maps, é o pilar que captura a intenção ativa de busca. Enquanto os anúncios pagos trazem tráfego, o tráfego orgânico vem de pessoas já decididas a buscar um dentista, tornando a conversão muito mais eficiente.",
      descricao2: "Trabalhamos otimização contínua do Google Meu Negócio, estratégia estruturada de avaliações positivas e presença local consistente. O objetivo é posicionar sua clínica entre as 3 primeiras posições do mapa quando potenciais pacientes buscarem por tratamentos odontológicos na região.",
      descricao3: "Este pilar é especialmente poderoso porque 78% das buscas no Google Maps resultam em contato ou visita, e 70% dos pacientes pesquisam no Google antes de escolher um dentista. É tráfego altamente qualificado com custo zero por clique.",
      beneficios: [
        "Visibilidade nas 3 primeiras posições do Google Maps local",
        "Tráfego orgânico qualificado com zero custo por clique",
        "Estratégia estruturada de reviews e avaliações positivas",
        "Autoridade local que atrai pacientes continuamente"
      ],
      estatistica: "78% das buscas no Google Maps resultam em contato",
      estatistica2: "70% dos pacientes pesquisam no Google antes de escolher",
      link: "/google-top-1-seo-local"
    },
    {
      numero: "04",
      titulo: "Agendamento Inteligente",
      icon: Calendar,
      descricao: "CRC profissional + IA no WhatsApp que transforma leads em consultas confirmadas. Atendimento humanizado, follow-up automatizado e lembretes que reduzem no-show. Ponto crítico onde leads viram pacientes e geram receita real.",
      beneficios: [
        "CRC profissional especializada em atendimento odontológico",
        "IA de agendamento 24/7 via WhatsApp para respostas imediatas",
        "Follow-up automatizado que reduz perda de oportunidades",
        "Confirmações e lembretes que aumentam a taxa de comparecimento"
      ],
      link: "/agendamento-inteligente"
    },
    {
      numero: "05",
      titulo: "CRM Inteligente",
      icon: Database,
      descricao: "Dashboard completo com todas as métricas - leads, agendamentos, conversões, ROI por campanha. Identifica o que funciona e otimiza continuamente. Transforma dados em decisões e torna resultados previsíveis e escaláveis.",
      beneficios: [
        "Dashboard centralizado com todas as métricas do método",
        "Análise de ROI detalhada por campanha e tratamento",
        "Automações que economizam tempo da equipe",
        "Insights data-driven para otimização contínua"
      ],
      link: "/crm-inteligente"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Método Paciente Previsível - Sistema Completo de Marketing Odontológico"
        description="Sistema integrado de marketing para clínicas odontológicas com 5 pilares: Captação de Leads, Autoridade Digital, Google Top 1, Agendamento Inteligente e CRM. Mais de 500 mil leads gerados para 1.500+ clínicas."
        keywords="método paciente previsível, marketing odontológico completo, captação pacientes odontologia, sistema marketing dentistas, marketing integrado clínicas, marketing para dentistas"
        canonical="https://odontoresults.com.br/metodo"
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema, howToSchema]}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="default" className="mb-6 text-sm px-4 py-2">
              5 Pilares Integrados
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Método Paciente Previsível: O Sistema Completo de Marketing Odontológico
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              5 pilares integrados que trabalham juntos para gerar crescimento previsível e sustentável para sua clínica odontológica
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Não vendemos serviços isolados. Oferecemos um método completo onde cada componente foi desenhado para funcionar em conjunto, criando um sistema de geração de pacientes que é previsível, escalável e sustentável.
            </p>
            
            <Button size="lg" variant="default" asChild className="text-lg px-8 py-6 mb-12">
              <UtmExternalLink href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20do%20M%C3%A9todo">
                Agendar uma Apresentação
                <ArrowRight className="ml-2 h-5 w-5" />
              </UtmExternalLink>
            </Button>

            {/* Grid visual dos 5 pilares */}
            <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-medium text-center">Captação</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-medium text-center">Autoridade</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-medium text-center">Google Top 1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-medium text-center">Agendamento</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-medium text-center">CRM</span>
              </div>
            </div>
          </div>
        </section>

        {/* O Que é o Método */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                O Que é o Método Paciente Previsível?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
                <div>
                  <p className="mb-4 text-muted-foreground">
                    O Método Paciente Previsível não é um serviço isolado de marketing. É um sistema integrado onde 5 pilares trabalham em conjunto para transformar sua clínica odontológica em uma máquina previsível de geração de pacientes.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    A diferença fundamental está na palavra "método". Enquanto a maioria das agências vende serviços separados - um pouco de anúncios aqui, algum conteúdo ali - nós desenvolvemos um processo estruturado onde cada componente foi desenhado para potencializar os outros.
                  </p>
                  <p className="text-muted-foreground">
                    Captação sem autoridade gera leads caros que não convertem. Autoridade sem captação não traz volume suficiente. Agendamento sem CRM perde oportunidades valiosas. É por isso que o método só funciona de forma integrada.
                  </p>
                </div>
                <div>
                  <p className="mb-4 text-muted-foreground">
                    Desenvolvemos este método ao longo de anos trabalhando com mais de 1.500 clínicas odontológicas. Testamos, erramos, ajustamos e refinamos cada etapa baseado em dados reais de performance e conversão.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    O resultado é um sistema que torna o crescimento da clínica previsível. Você não fica dependente de indicações ou de "sorte" no marketing. Sabe exatamente quantos leads precisa para gerar X consultas, quanto precisa investir para ter Y pacientes novos, qual o ROI de cada tratamento.
                  </p>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Aplicado por mais de 1.500 clínicas odontológicas em todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os 5 Pilares do Método */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Os 5 Pilares do Método
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada pilar tem um papel específico no sistema. Juntos, criam um processo completo de atração, conversão e otimização.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pilares.map((pilar) => (
                <Card key={pilar.numero} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <pilar.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-primary mb-1">Pilar {pilar.numero}</div>
                      <h3 className="text-2xl font-bold mb-2">{pilar.titulo}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {pilar.descricao}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {pilar.descricao2}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {pilar.descricao3}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pilar.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{beneficio}</span>
                      </div>
                    ))}
                  </div>

                  {pilar.estatistica && (
                    <div className="bg-primary/5 rounded-lg p-4 mb-6">
                      <div className="text-2xl font-bold text-primary mb-1">{pilar.estatistica}</div>
                      {pilar.estatistica2 && (
                        <div className="text-lg font-semibold text-primary">{pilar.estatistica2}</div>
                      )}
                    </div>
                  )}

                  <Button variant="outline" size="lg" asChild className="w-full">
                    <UtmLink to={pilar.link}>
                      Entenda a Estratégia Completa
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </UtmLink>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como os Pilares Trabalham Juntos */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Como os Pilares Trabalham Juntos
              </h2>

              {/* Fluxo Visual */}
              <div className="bg-card rounded-2xl p-8 mb-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <div className="font-bold">CAPTAÇÃO</div>
                    <div className="text-sm text-muted-foreground">Leads</div>
                  </div>
                  <ArrowRight className="hidden md:block h-6 w-6 text-primary" />
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Award className="h-10 w-10 text-primary" />
                    </div>
                    <div className="font-bold">AUTORIDADE</div>
                    <div className="text-sm text-muted-foreground">Confiança</div>
                  </div>
                  <ArrowRight className="hidden md:block h-6 w-6 text-primary" />
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Search className="h-10 w-10 text-primary" />
                    </div>
                    <div className="font-bold">GOOGLE TOP 1</div>
                    <div className="text-sm text-muted-foreground">Tráfego</div>
                  </div>
                  <ArrowRight className="hidden md:block h-6 w-6 text-primary" />
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Calendar className="h-10 w-10 text-primary" />
                    </div>
                    <div className="font-bold">AGENDAMENTO</div>
                    <div className="text-sm text-muted-foreground">Consultas</div>
                  </div>
                  <ArrowRight className="hidden md:block h-6 w-6 text-primary" />
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Database className="h-10 w-10 text-primary" />
                    </div>
                    <div className="font-bold">CRM</div>
                    <div className="text-sm text-muted-foreground">Otimização Data-Driven</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Loop de Otimização Contínua</span>
                  </div>
                </div>
              </div>

              {/* Texto Explicativo */}
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">O método funciona como um sistema sequencial e cíclico.</strong> A <strong>Captação</strong> traz leads qualificados através de anúncios segmentados. Esses leads pesquisam sobre sua clínica e encontram a <strong>Autoridade Digital</strong> - casos reais, vídeos, depoimentos - que gera confiança e credibilidade.
                </p>
                
                <p className="text-muted-foreground">
                  Simultaneamente, o <strong>Google Top 1</strong> captura pessoas que já estão buscando ativamente por dentistas na região - tráfego orgânico altamente qualificado. Quando o lead entra em contato, seja pela captação paga ou busca orgânica, o <strong>Agendamento Inteligente</strong> entra em ação com CRC profissional e IA para converter o lead em consulta agendada.
                </p>
                
                <p className="text-muted-foreground">
                  O <strong>CRM Inteligente</strong> fecha o ciclo coletando dados de todas as etapas - quais anúncios geraram leads que mais convertem, quais conteúdos têm melhor engajamento, quais horários têm menor no-show, qual o ROI de cada tratamento. Esses dados alimentam a <strong>Otimização Data-Driven</strong> de todos os pilares anteriores.
                </p>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex gap-4">
                    <BarChart3 className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">
                        O Diferencial da Otimização Data-Driven Integrada
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        A grande vantagem competitiva do método está na integração entre CRC e equipe de marketing. Como nossa Central de Relacionamento trabalha internamente em conjunto com o time de tráfego e conteúdo, conseguimos capturar dados mais precisos e agir mais rápido.
                      </p>
                      <p className="text-muted-foreground">
                        Enquanto agências tradicionais levam semanas para receber feedback e ajustar campanhas, nós otimizamos em tempo real. A CRC identifica objeções recorrentes? O marketing ajusta as campanhas e o conteúdo. Uma campanha está gerando leads desqualificados? Pivotamos imediatamente. Essa velocidade de otimização é o que torna os resultados verdadeiramente previsíveis.
                      </p>
                    </div>
                  </div>
                </Card>

                <p className="text-muted-foreground">
                  <strong className="text-foreground">Remover qualquer pilar quebra o sistema.</strong> Sem captação, não há volume de leads suficiente. Sem autoridade, os leads não confiam e não convertem. Sem Google Top 1, você perde tráfego orgânico de alta intenção. Sem agendamento estruturado, leads viram oportunidades perdidas. Sem CRM, você opera no escuro sem dados para otimizar.
                </p>

                <p className="text-muted-foreground">
                  É essa integração que transforma marketing odontológico de "tentativa e erro" para um processo previsível e escalável. Você não está mais apostando no escuro - está seguindo um método validado por dados reais de mais de 1.500 clínicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que o Método Funciona */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que o Método Funciona
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Resultados baseados em dados reais de mais de 1.500 clínicas odontológicas
              </p>
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1.500+</div>
                <div className="text-sm text-muted-foreground">Clínicas Parceiras</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+500mil</div>
                <div className="text-sm text-muted-foreground">Leads Qualificados Gerados</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">78%</div>
                <div className="text-sm text-muted-foreground">Conversão Google Maps</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Pesquisam Antes de Escolher</div>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-muted-foreground text-center mb-4">
                O método não é baseado em teoria ou achismos. Foi desenvolvido e refinado ao longo de anos trabalhando com mais de 1.500 clínicas odontológicas em todo Brasil, gerando mais de 500 mil leads qualificados.
              </p>
              <p className="text-lg text-muted-foreground text-center mb-4">
                Cada pilar foi testado, otimizado e validado com dados reais de conversão. Sabemos o que funciona porque medimos tudo - desde o custo por lead até a taxa de comparecimento em consultas.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                A otimização contínua data-driven garante que o método evolui constantemente. O que funcionou ontem pode não ser ideal amanhã, por isso os dados do CRM alimentam ajustes constantes em todos os pilares.
              </p>
            </div>

            {/* Badges/Selos */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Parceiros Oficiais das Principais Plataformas
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <img 
                    src={metaPartnerBadge} 
                    alt="Meta Business Partner Badge" 
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                    loading="lazy"
                  />
                  <h4 className="font-bold mb-2">Meta Business Partner</h4>
                  <p className="text-sm text-muted-foreground">
                    Parceiro oficial Meta com acesso a recursos avançados de Facebook e Instagram Ads
                  </p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <img 
                    src={googlePartnerBadge} 
                    alt="Google Partner Badge" 
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                    loading="lazy"
                  />
                  <h4 className="font-bold mb-2">Google Partner</h4>
                  <p className="text-sm text-muted-foreground">
                    Certificação oficial Google com expertise em Google Ads e Google Meu Negócio
                  </p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <img 
                    src={manychatBadge} 
                    alt="ManyChat Expert Badge" 
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                    loading="lazy"
                  />
                  <h4 className="font-bold mb-2">ManyChat Expert</h4>
                  <p className="text-sm text-muted-foreground">
                    Especialistas em automação de WhatsApp e IA de agendamento
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Para Quem é o Método */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Para Quem é o Método Paciente Previsível?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    Ideal Para:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Clínicas que buscam crescimento previsível e sustentável, não explosões temporárias
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Dentistas que já investem em marketing mas não veem resultados consistentes
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Clínicas que querem reduzir dependência de indicações e ter controle sobre o fluxo de pacientes
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Profissionais que preferem focar em atender pacientes, não em fazer marketing
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-red-500" />
                    Não é Para:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <div className="w-full h-full rounded-full border-2 border-red-500 flex items-center justify-center">
                          <div className="w-2.5 h-0.5 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">
                        Quem busca resultados mágicos ou instantâneos sem processo estruturado
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <div className="w-full h-full rounded-full border-2 border-red-500 flex items-center justify-center">
                          <div className="w-2.5 h-0.5 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">
                        Clínicas que não estão dispostas a seguir um método estruturado e baseado em dados
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Perguntas Frequentes sobre o Método
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Posso começar com apenas um pilar ou preciso implementar todos de uma vez?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Embora o método funcione melhor integrado, você pode começar com os pilares mais adequados para sua situação atual e expandir gradualmente. Na apresentação, analisamos sua realidade e recomendamos o melhor caminho.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    O método funciona para todas as especialidades odontológicas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim, o método é adaptável para todas as especialidades odontológicas - ortodontia, implantodontia, odontopediatria, periodontia, estética dental e outras. Adaptamos as estratégias de captação, conteúdo e conversão para cada nicho específico, mantendo a estrutura integrada dos 5 pilares.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Como funciona o acompanhamento dos resultados?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Através do CRM Inteligente fornecemos dashboards com métricas em tempo real, relatórios periódicos detalhados e análise de ROI de cada pilar. Você terá visibilidade completa de leads gerados, consultas agendadas, taxa de conversão, custo por aquisição de paciente e retorno sobre investimento por tratamento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Preciso mudar meu sistema de gestão atual?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não necessariamente. O método se integra com diversos sistemas existentes. Na apresentação, avaliamos sua infraestrutura e identificamos as melhores formas de integração.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Qual o primeiro passo para aplicar o método na minha clínica?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Agende uma apresentação onde analisamos sua situação atual, identificamos oportunidades e mostramos como o método pode ser aplicado na sua realidade. Sem compromisso, apenas insights valiosos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Por que o método gera resultados previsíveis?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Porque é baseado em dados reais de mais de 1.500 clínicas odontológicas, utiliza otimização contínua data-driven através do CRM e integra todos os pontos de contato do paciente em um sistema único. Além disso, nossa CRC trabalha internamente em conjunto com a equipe de marketing, permitindo ajustes rápidos e precisos baseados em feedback real dos leads e pacientes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para Ter Pacientes de Forma Previsível?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Agende uma apresentação e descubra como aplicar o método na sua clínica
              </p>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Análise do seu marketing atual</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Oportunidades específicas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Plano personalizado</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Sem compromisso</span>
                </div>
              </div>

              <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-7">
                <UtmExternalLink href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20do%20M%C3%A9todo">
                  <Clock className="mr-2 h-5 w-5" />
                  Agendar Apresentação
                </UtmExternalLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metodo;