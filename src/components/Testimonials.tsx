import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Fui acusado injustamente e estava em desespero. Desde o primeiro contato, a equipe do escritório demonstrou uma competência técnica fora do comum. O Dr. Ricardo Almeida não apenas dominava a lei, mas também me tratou com a humanidade e o respeito que eu precisava naquele momento terrível. Eles traçaram uma estratégia de defesa impecável, que resultou na absolvição completa. Devo minha liberdade e minha reputação a este escritório. O compromisso deles é real.",
      author: "A. Cavalcante",
      oab: "TRAIRI/CE",
      avatar: "https://i.pravatar.cc/150?img=18"
    },
    {
      quote: "Em momentos de crise, a rapidez é tudo. Liguei para o escritório em uma situação de urgência e, em poucas horas, já tínhamos um advogado experiente atuando no caso, com total disponibilidade. O escritório não mediu esforços, trabalhando incansavelmente para proteger meus direitos. A dedicação 24/7 deles fez toda a diferença. Eu os recomendo a qualquer pessoa que precise de uma defesa criminal de excelência e alto nível.",
      author: "M. Ribeiro",
      oab: "TRAIRI/CE",
      avatar: "https://i.pravatar.cc/150?img=53"
    }
  ];

  return (
    <section id="prova" className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Depoimento de Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
        
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-8 space-y-6 hover:border-primary/30 transition-all"
            >
              <Quote className="w-10 h-10 text-primary/40" />
              
              <blockquote className="text-foreground/90 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.oab}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
