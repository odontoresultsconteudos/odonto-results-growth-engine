import logoSvg from "@/assets/logo.svg";
import { UtmLink } from "@/components/UtmLink";
import { UtmExternalLink } from "@/components/UtmExternalLink";
export const Footer = () => {
  return <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img src={logoSvg} alt="Odonto Results" className="h-10 mb-4" width="120" height="40" />
            <p className="text-sm text-muted-foreground">A Odonto Results ajuda Clínicas Odontológicas a baterem Recorde de Faturamento através do Método Paciente Previsível, com 5 pilares: Captação de Leads Qualificados, Vitrine de Autoridade, Google Top 1, Agendamento Profissional, CRM Inteligente.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#metodo" className="hover:text-accent transition-colors">Método</a></li>
              <li><UtmLink to="/captacao" className="hover:text-accent transition-colors">Captação de Leads</UtmLink></li>
              <li><UtmLink to="/autoridade" className="hover:text-accent transition-colors">Vitrine de Autoridade</UtmLink></li>
              <li><UtmLink to="/google-top-1" className="hover:text-accent transition-colors">Google Top 1</UtmLink></li>
              <li><UtmLink to="/agendamento" className="hover:text-accent transition-colors">Agendamento</UtmLink></li>
              <li><UtmLink to="/crm" className="hover:text-accent transition-colors">CRM</UtmLink></li>
              <li><UtmLink to="/sobre" className="hover:text-accent transition-colors">Sobre</UtmLink></li>
              <li><UtmExternalLink href="https://blog.odontoresults.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Blog</UtmExternalLink></li>
              <li><UtmLink to="/contato" className="hover:text-accent transition-colors">Contato</UtmLink></li>
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
    </footer>;
};