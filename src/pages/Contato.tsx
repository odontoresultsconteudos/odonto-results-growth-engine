import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const Contato = () => {
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
      "name": "Contato",
      "item": "https://odontoresults.com.br/contato"
    }]
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Odonto Results",
    "description": "Entre em contato com a Odonto Results para impulsionar sua clínica odontológica"
  };

  return (
    <>
      <SEO 
        title="Contato Odonto Results - Agende Apresentação Gratuita"
        description="Fale com nossa equipe e agende uma apresentação para sua clínica. Atendimento seg-sex 9h-18h. Bandeirantes, PR. faleconosco@odontoresults.com.br"
        keywords="contato Odonto Results, falar com consultor odontológico, orçamento marketing dental"
        canonical="https://odontoresults.com.br/contato"
        structuredData={[breadcrumbSchema, contactSchema]}
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Estamos prontos para ajudar sua clínica a crescer. Fale conosco e descubra como podemos impulsionar seus resultados.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground mb-8">
                  Escolha a melhor forma de falar conosco. Nossa equipe está pronta para atendê-lo.
                </p>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a href="https://wa.me/5543991781922" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                          (43) 99178-1922
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <a href="mailto:faleconosco@odontoresults.com.br" className="text-muted-foreground hover:text-accent transition-colors">
                          faleconosco@odontoresults.com.br
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          R. João Francisco Ferreira, 259<br />
                          Bandeirantes, PR, 86362-003
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 9h às 18h<br />
                          Sábado e Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Visite Nosso Escritório
              </h2>
              <p className="text-muted-foreground">
                Estamos localizados em Bandeirantes, PR. Venha nos visitar!
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.839692017769!2d-50.374760599999995!3d-23.1029635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eac11f764ac38d%3A0x56aaa6971da4b3f!2sOdonto%20Results!5e0!3m2!1spt-BR!2sbr!4v1763098239225!5m2!1spt-BR!2sbr" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Odonto Results"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Transformar sua Clínica?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma apresentação sem compromisso e descubra como podemos ajudar sua clínica a crescer.
            </p>
            <a href="https://form.odontoresults.com.br/dLTRVKuI" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="text-lg">
                Agende uma Apresentação Gratuita
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contato;
