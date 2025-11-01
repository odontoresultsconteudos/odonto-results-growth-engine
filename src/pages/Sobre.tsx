import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import alexGurraoCeo from "@/assets/alex-gurrao-ceo.webp";
import viniciusRagazziCoo from "@/assets/vinicius-ragazzi-coo.webp";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";

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

  return (
    <>
      <SEO 
        title="Sobre a Odonto Results - Nossa Equipe"
        description="Conheça a equipe por trás da Odonto Results. Dr. Alex Gurrão, dentista e CEO, e Vinícius Ragazzi, especialista em marketing digital como CMO."
        keywords="equipe Odonto Results, Dr Alex Gurrão, Vinícius Ragazzi, agência marketing odontológico"
        canonical="https://odontoresults.com.br/sobre"
        structuredData={[breadcrumbSchema, teamSchema]}
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quem está por trás da Odonto Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe combina experiência clínica e expertise em marketing digital para transformar clínicas odontológicas.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full max-w-sm mb-6 overflow-hidden rounded-lg">
                    <img src={alexGurraoCeo} alt="Dr Alex Gurrão - CEO da Odonto Results, dentista e especialista em marketing odontológico" className="w-full h-auto object-cover" width="400" height="400" loading="lazy" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Dr Alex Gurrão</h2>
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
                  <h2 className="text-2xl font-bold mb-2">Vinícius Ragazzi</h2>
                  <p className="text-accent font-semibold mb-4">CMO</p>
                  <p className="text-muted-foreground">
                    Com 12 anos de experiência em marketing digital, lidera as estratégias de captação e crescimento de clínicas odontológicas em todo Brasil.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                A Odonto Results foi fundada em <strong className="text-foreground">fevereiro de 2020</strong> por dois amigos 
                que compartilhavam a visão de transformar o marketing digital odontológico no Brasil.
              </p>
              <p>
                Tudo começou quando Vinícius Ragazzi começou a prestar serviços de marketing digital 
                para o Dr. Alex Gurrão e suas clínicas. Os resultados foram tão expressivos que 
                perceberam o potencial de ajudar outros dentistas a alcançarem o mesmo sucesso.
              </p>
              <p>
                Unidos pela experiência prática do Dr. Alex como dentista e dono de clínicas, 
                e pela expertise de Vinícius com 12 anos em marketing digital, decidiram fundar 
                a Odonto Results para ajudar outros profissionais a terem resultados reais por meio do digital.
              </p>
              <p className="text-center pt-4">
                <strong className="text-foreground text-xl">
                  Desde então, já atendemos mais de 1500 clínicas e geramos mais de 500 mil leads qualificados.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
    </>
  );
};

export default Sobre;
