import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Award, MapPin, Calendar, Database, TrendingUp, Quote, Linkedin, Instagram, Youtube } from "lucide-react";
import alexGurraoCeo from "@/assets/alex-gurrao-ceo.webp";
import viniciusRagazziCoo from "@/assets/vinicius-ragazzi-coo.webp";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const Sobre = () => {
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
      "name": "Sobre",
      "item": "https://odontoresults.com.br/sobre"
    }]
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre a Odonto Results",
    "description": "Conheça a equipe por trás da Odonto Results: Dr. Alex Gurrão (CEO) e Vinícius Ragazzi (CMO)",
    "about": {
      "@type": "Organization",
      "name": "Odonto Results"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odonto Results",
    "description": "Agência de marketing odontológico especializada em fazer clínicas baterem recorde de faturamento colocando pacientes certos na cadeira",
    "foundingDate": "2020-02",
    "url": "https://odontoresults.com.br",
    "logo": "https://odontoresults.com.br/og-image.jpg",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500"
    }
  };

  return (
    <>
      <SEO 
        title="Sobre Nós - Odonto Results | Dr. Alex Gurrão e Vinícius Ragazzi"
        description="Fundada em 2020 por Dr. Alex Gurrão e Vinícius Ragazzi. 1.500+ clínicas atendidas, 500 mil leads gerados. Conheça o Método Paciente Previsível e nossa equipe."
        keywords="Odonto Results, método paciente previsível, agência marketing odontológico, leads qualificados odontologia, equipe Odonto Results, Dr Alex Gurrão, Vinícius Ragazzi"
        canonical="https://odontoresults.com.br/sobre"
        structuredData={[breadcrumbSchema, teamSchema, organizationSchema]}
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Conheça a Odonto Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A agência de marketing odontológico que transforma clínicas em máquinas de faturamento previsível através do Método Paciente Previsível
            </p>
          </div>
        </section>

        {/* Nossa História Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Como Tudo Começou
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                A Odonto Results nasceu em <strong className="text-foreground">fevereiro de 2020</strong>, quando o Dr. Alex Gurrão, cirurgião-dentista e especialista em implantes, uniu forças com Vinícius Ragazzi, estrategista digital com mais de uma década de experiência no mercado.
              </p>
              <p>
                Alex enfrentava o desafio diário de muitas clínicas: consultório estruturado, equipe qualificada, mas poucos pacientes. Vinícius, vindo do mundo corporativo e digital, enxergava uma oportunidade enorme de aplicar estratégias de marketing digital que funcionavam em outros setores no universo odontológico.
              </p>
              <p>
                A parceria começou testando anúncios pagos para a própria clínica do Alex. <strong className="text-foreground">Os resultados foram impressionantes:</strong> em poucos meses, a agenda estava cheia e a clínica batendo recordes de faturamento. Foi quando perceberam: se funcionou para uma clínica, poderia funcionar para milhares.
              </p>
              <p>
                E assim nasceu o <strong className="text-foreground">Método Paciente Previsível</strong>, que hoje já transformou a realidade de mais de 1.500 clínicas em todo o Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* O Método Paciente Previsível Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                O Método Paciente Previsível
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Uma abordagem completa que conecta todas as etapas do funil, desde a captação até o fechamento do tratamento:
              </p>
            </div>

            {/* 5 Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Captação de Leads Qualificados</h3>
                <p className="text-muted-foreground">
                  Anúncios segmentados por tratamento e região para atrair pacientes ideais.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Vitrine de Autoridade</h3>
                <p className="text-muted-foreground">
                  Conteúdos que aumentam confiança e reduzem objeções antes do contato.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Google Top 1</h3>
                <p className="text-muted-foreground">
                  Otimização de presença local no Google Maps e SEO odontológico.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Agendamento Profissional</h3>
                <p className="text-muted-foreground">
                  CRC humana treinada e IA 24h no WhatsApp para conversão máxima.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Database className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">CRM Inteligente</h3>
                <p className="text-muted-foreground">
                  Organiza, prioriza e acompanha cada contato até o fechamento.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Resultado Comprovado</h3>
                <p className="text-muted-foreground">
                  Todas as especialidades: implantes, ortodontia, estética e harmonização facial.
                </p>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">1.500+</div>
                <p className="text-muted-foreground text-lg">Clínicas Atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">500 mil</div>
                <p className="text-muted-foreground text-lg">Leads Gerados</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">R$ 10M+</div>
                <p className="text-muted-foreground text-lg">Em Tráfego Gerenciado</p>
              </div>
            </div>

            {/* Focus Statement */}
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-2">
                Nosso foco não é curtida ou visualização.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Nosso foco é previsibilidade de caixa, agenda cheia e crescimento mensurável para cada clínica.
              </p>
            </div>

            {/* Quote */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <Quote className="w-12 h-12 text-accent flex-shrink-0" />
                <blockquote className="text-xl font-semibold text-foreground italic">
                  "A Odonto Results não vende leads. A gente entrega pacientes decididos, comparecendo e iniciando tratamento."
                </blockquote>
              </div>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Conheça os Fundadores
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                O Método Paciente Previsível foi desenvolvido pela experiência combinada de um dentista que conhece a dor do consultório e um estrategista digital com mais de uma década de mercado
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full max-w-sm mb-6 overflow-hidden rounded-lg">
                    <img src={alexGurraoCeo} alt="Dr Alex Gurrão - CEO da Odonto Results, dentista e especialista em marketing odontológico" className="w-full h-auto object-cover" width="400" height="400" loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Dr Alex Gurrão</h3>
                  <p className="text-accent font-semibold mb-4">CEO</p>
                  <p className="text-muted-foreground">
                    Dentista e dono de clínica, com vivência de resultado nas suas clínicas próprias. Aplica estratégias validadas na prática para transformar clínicas odontológicas.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full max-w-sm mb-6 overflow-hidden rounded-lg">
                    <img src={viniciusRagazziCoo} alt="Vinícius Ragazzi - CMO da Odonto Results, especialista em marketing digital para clínicas" className="w-full h-auto object-cover" width="400" height="400" loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vinícius Ragazzi</h3>
                  <p className="text-accent font-semibold mb-4">CMO</p>
                  <p className="text-muted-foreground mb-6">
                    Engenheiro de Produção, com MBA em Gestão de Tráfego Pago e em Gestão de Agência de Marketing. Há 12 anos atua no marketing digital e hoje ajuda clínicas odontológicas a baterem recordes de faturamento através do Método Paciente Previsível.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="https://br.linkedin.com/in/viniciusragazzi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/euviniciusragazzi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@viniciusragazzi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transformar clínicas odontológicas através do Método Paciente Previsível, 
              combinando captação estratégica de leads, autoridade digital e gestão inteligente 
              para encher agendas com pacientes qualificados.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para transformar sua clínica?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma apresentação e receba um plano claro para os próximos 90 dias.
            </p>
            
            <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="text-lg">
                Fale com nossa equipe
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;