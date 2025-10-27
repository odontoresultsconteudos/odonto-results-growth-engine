import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import alexGurraoCeo from "@/assets/alex-gurrao-ceo.png";
import viniciusRagazziCoo from "@/assets/vinicius-ragazzi-coo.png";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sobre = () => {
  return (
    <>
      <Header />
      <WhatsAppButton />
      
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
                    <img src={alexGurraoCeo} alt="Dr Alex Gurrão" className="w-full h-auto object-cover" />
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
                    <img src={viniciusRagazziCoo} alt="Vinícius Ragazzi" className="w-full h-auto object-cover" />
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

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
