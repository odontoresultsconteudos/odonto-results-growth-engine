import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const formUrl = "https://form.odontoresults.com.br/dLTRVKuI";

  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Agendar apresentação"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-[#25D366] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Agende agora!
      </span>
    </a>
  );
};

export default WhatsAppButton;
