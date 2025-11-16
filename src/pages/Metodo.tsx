import { SEO } from "@/components/SEO";
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
  X,
  Zap
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
        "item": "https://odontoresults.com.br/metodo-paciente-previsivel"
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
        "name": "Posso começar com apenas um pilar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, é possível começar com os pilares mais adequados para sua clínica e expandir gradualmente. O método funciona melhor integrado, mas é adaptável."
        }
      },
      {
        "@type": "Question",
        "name": "Funciona para tratamentos high ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o método é especialmente eficaz para tratamentos de alto valor como implantes, harmonização orofacial, lentes de contato dentais, ortodontia invisível e procedimentos estéticos."
        }
      },
      {
        "@type": "Question",
        "name": "Como acompanho os resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Através do CRM Inteligente com dashboard em tempo real, relatórios periódicos e análise de ROI detalhada."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso mudar meu sistema atual?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O método se integra com sistemas existentes. Avaliamos sua infraestrutura na apresentação."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o primeiro passo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agendar uma apresentação personalizada onde analisamos seu caso e mostramos o potencial do método para sua clínica."
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
        "text": "Anúncios segmentados no Facebook, Instagram e Google que atraem pacientes com intenção de contratar"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Vitrine de Autoridade",
        "text": "Conteúdos estratégicos que posicionam sua clínica como autoridade e reduzem resistência"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Google Top 1",
        "text": "Apareça no topo quando pacientes procuram dentista perto de mim no Google Maps"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Agendamento Inteligente",
        "text": "CRC profissional + IA 24h no WhatsApp para converter leads em consultas agendadas"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "CRM Inteligente",
        "text": "Organize, priorize e maximize o aproveitamento de cada oportunidade de negócio"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OdontoResults",
    "url": "https://odontoresults.com.br",
    "logo": "https://odontoresults.com.br/logo.png",
    "sameAs": [
      "https://www.instagram.com/odontoresults",
      "https://www.facebook.com/odontoresults",
      "https://www.linkedin.com/company/odontoresults"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  const allSchemas = [breadcrumbSchema, serviceSchema, faqSchema, howToSchema, organizationSchema];

  const pilares = [
    {
      numero: "01",
      titulo: "Captação de Leads Qualificados",
      icon: Target,
      frase: "Anúncios segmentados no Facebook, Instagram e Google que atraem pacientes com intenção de contratar seus tratamentos.",
      beneficios: [
        "Segmentação precisa por tratamento",
        "Criativos impactantes validados",
        "Gestão profissional de orçamento",
        "Otimização contínua de performance"
      ],
      numeroDestaque: "+500 mil",
      subtexto: "leads gerados para 1.500+ clínicas",
      link: "/captacao"
    },
    {
      numero: "02",
      titulo: "Vitrine de Autoridade Digital",
      icon: Award,
      frase: "Conteúdos estratégicos que posicionam sua clínica como autoridade e reduzem a resistência na hora da decisão.",
      beneficios: [
        "Casos antes/depois reais",
        "Vídeos educativos do dentista",
        "Depoimentos autênticos de pacientes",
        "Presença consistente nas redes sociais"
      ],
      numeroDestaque: "10x",
      subtexto: "Mais Qualidade nos Pacientes",
      link: "/autoridade"
    },
    {
      numero: "03",
      titulo: "Google Top 1 (SEO Local)",
      icon: Search,
      frase: "Apareça em primeiro lugar quando pacientes procuram \"dentista perto de mim\" e tratamentos odontológicos na sua cidade.",
      beneficios: [
        "Otimização completa Google Meu Negócio",
        "SEO técnico e de conteúdo local",
        "Gestão estratégica de avaliações",
        "78% das buscas resultam em contato"
      ],
      numeroDestaque: "5x",
      subtexto: "mais visibilidade que concorrentes",
      link: "/google-top-1"
    },
    {
      numero: "04",
      titulo: "Agendamento Inteligente",
      icon: Calendar,
      frase: "CRC profissional + IA 24h no WhatsApp para aproveitar ao máximo cada paciente captado.",
      beneficios: [
        "CRC treinada com scripts validados",
        "IA 24h respondendo no WhatsApp",
        "Qualificação e nutrição de leads",
        "Lembretes automáticos de consultas"
      ],
      numeroDestaque: "+85%",
      subtexto: "taxa de comparecimento",
      link: "/agendamento"
    },
    {
      numero: "05",
      titulo: "CRM Inteligente",
      icon: Database,
      frase: "CRM integrado que organiza, prioriza e maximiza o aproveitamento de cada oportunidade de negócio.",
      beneficios: [
        "Todos os leads em um só lugar",
        "Priorização por potencial de conversão",
        "Automações de follow-up",
        "Recuperação de leads inativos"
      ],
      numeroDestaque: "+45%",
      subtexto: "aproveitamento de leads",
      link: "/crm"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Método Paciente Previsível"
        description="Conheça o Método Paciente Previsível: sistema integrado de 5 pilares que gera pacientes de forma previsível para clínicas odontológicas. Resultados baseados em +1.500 clínicas."
        keywords="método paciente previsível, marketing odontológico, captação de leads odontologia, seo dentistas, crm clínicas odontológicas, google top 1 dentista"
        canonical="https://odontoresults.com.br/metodo-paciente-previsivel"
        structuredData={allSchemas}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Método Completo</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Método Paciente <span className="text-accent">Previsível</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              5 pilares integrados que geram pacientes de forma previsível para sua clínica
            </p>
            <Button variant="cta" size="lg" asChild>
              <UtmExternalLink href="https://form.odontoresults.com.br/dLTRVKuI">
                Agendar Apresentação <ArrowRight className="ml-2" />
              </UtmExternalLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Os 5 Pilares do Método */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Os 5 Pilares do Método
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <Card key={pilar.numero} className="p-8 border-accent/20 hover:border-accent/40 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Pilar {pilar.numero}</Badge>
                      <h3 className="text-2xl font-bold">{pilar.titulo}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{pilar.frase}</p>
                  
                  <div className="space-y-2 mb-8">
                    {pilar.beneficios.map((beneficio, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-accent/5 p-4 rounded-lg mb-6 text-center">
                    <div className="text-3xl font-bold text-accent">{pilar.numeroDestaque}</div>
                    <div className="text-sm text-muted-foreground">{pilar.subtexto}</div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <UtmLink to={pilar.link}>
                      Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
                    </UtmLink>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como os Pilares Trabalham Juntos */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como os Pilares Trabalham Juntos
          </h2>
          
          <div className="relative">
            {/* Desktop: Fluxo Horizontal */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="text-center flex-1">
                <div className="bg-accent/10 p-4 rounded-lg mb-2">
                  <Target className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="font-semibold text-sm">CAPTAÇÃO</div>
                <div className="text-xs text-muted-foreground">Anúncios</div>
              </div>
              
              <ArrowRight className="text-accent" />
              
              <div className="text-center flex-1">
                <div className="bg-accent/10 p-4 rounded-lg mb-2">
                  <Award className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="font-semibold text-sm">AUTORIDADE</div>
                <div className="text-xs text-muted-foreground">Confiança</div>
              </div>
              
              <ArrowRight className="text-accent" />
              
              <div className="text-center flex-1">
                <div className="bg-accent/10 p-4 rounded-lg mb-2">
                  <Search className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="font-semibold text-sm">GOOGLE TOP 1</div>
                <div className="text-xs text-muted-foreground">Visibilidade</div>
              </div>
              
              <ArrowRight className="text-accent" />
              
              <div className="text-center flex-1">
                <div className="bg-accent/10 p-4 rounded-lg mb-2">
                  <Calendar className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="font-semibold text-sm">AGENDAMENTO</div>
                <div className="text-xs text-muted-foreground">Conversão</div>
              </div>
              
              <ArrowRight className="text-accent" />
              
              <div className="text-center flex-1">
                <div className="bg-accent/10 p-4 rounded-lg mb-2">
                  <Database className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="font-semibold text-sm">CRM</div>
                <div className="text-xs text-muted-foreground">Otimização</div>
              </div>
            </div>
            
            {/* Mobile: Fluxo Vertical */}
            <div className="md:hidden space-y-4">
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-2 inline-block">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-sm">CAPTAÇÃO</div>
                <div className="text-xs text-muted-foreground">Anúncios</div>
                <ArrowRight className="text-accent mx-auto mt-2 rotate-90" />
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-2 inline-block">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-sm">AUTORIDADE</div>
                <div className="text-xs text-muted-foreground">Confiança</div>
                <ArrowRight className="text-accent mx-auto mt-2 rotate-90" />
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-2 inline-block">
                  <Search className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-sm">GOOGLE TOP 1</div>
                <div className="text-xs text-muted-foreground">Visibilidade</div>
                <ArrowRight className="text-accent mx-auto mt-2 rotate-90" />
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-2 inline-block">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-sm">AGENDAMENTO</div>
                <div className="text-xs text-muted-foreground">Conversão</div>
                <ArrowRight className="text-accent mx-auto mt-2 rotate-90" />
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-lg mb-2 inline-block">
                  <Database className="w-8 h-8 text-accent" />
                </div>
                <div className="font-semibold text-sm">CRM</div>
                <div className="text-xs text-muted-foreground">Otimização</div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Sistema integrado onde cada pilar alimenta e potencializa os demais
          </p>
        </div>
      </section>

      {/* Por Que o Método Funciona */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por Que o Método Funciona
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-accent/20">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">+1.500</div>
              <div className="text-sm text-muted-foreground">Clínicas Atendidas</div>
            </Card>
            
            <Card className="p-6 text-center border-accent/20">
              <Target className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">+500 mil</div>
              <div className="text-sm text-muted-foreground">Leads Gerados</div>
            </Card>
            
            <Card className="p-6 text-center border-accent/20">
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">+85%</div>
              <div className="text-sm text-muted-foreground">Taxa Comparecimento</div>
            </Card>
            
            <Card className="p-6 text-center border-accent/20">
              <BarChart3 className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">+45%</div>
              <div className="text-sm text-muted-foreground">Aproveitamento Leads</div>
            </Card>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={metaPartnerBadge} alt="Meta Business Partner" className="h-16" loading="lazy" />
            <img src={googlePartnerBadge} alt="Google Partner" className="h-16" loading="lazy" />
            <img src={manychatBadge} alt="ManyChat Partner" className="h-16" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Para Quem É o Método */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Para Quem É o Método
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-green-500/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Check className="text-green-500" /> Ideal Para
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Clínicas que querem crescimento previsível</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Dentistas prontos para investir em marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Clínicas com estrutura para receber novos pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Profissionais que valorizam dados e métricas</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 border-red-500/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <X className="text-red-500" /> Não É Para
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Quem busca resultados imediatos sem investimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Clínicas que não podem atender mais pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Profissionais que não acompanham resultados</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Quem não tem disponibilidade para parceria ativa</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Posso começar com apenas um pilar?
              </AccordionTrigger>
              <AccordionContent>
                Sim, é possível começar com os pilares mais adequados para sua clínica e expandir gradualmente. O método funciona melhor integrado, mas é adaptável.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Funciona para tratamentos high ticket?
              </AccordionTrigger>
              <AccordionContent>
                Sim, o método é especialmente eficaz para tratamentos de alto valor como implantes, harmonização orofacial, lentes de contato dentais, ortodontia invisível e procedimentos estéticos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Como acompanho os resultados?
              </AccordionTrigger>
              <AccordionContent>
                Através do CRM Inteligente com dashboard em tempo real, relatórios periódicos e análise de ROI detalhada.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Preciso mudar meu sistema atual?
              </AccordionTrigger>
              <AccordionContent>
                Não. O método se integra com sistemas existentes. Avaliamos sua infraestrutura na apresentação.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Qual o primeiro passo?
              </AccordionTrigger>
              <AccordionContent>
                Agendar uma apresentação personalizada onde analisamos seu caso e mostramos o potencial do método para sua clínica.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Resultados Previsíveis?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Agende uma apresentação do método para sua clínica
          </p>
          
          <Button variant="cta" size="lg" asChild>
            <UtmExternalLink href="https://form.odontoresults.com.br/dLTRVKuI">
              Agendar Apresentação <ArrowRight className="ml-2" />
            </UtmExternalLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Metodo;
