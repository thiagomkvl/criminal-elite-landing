import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Atendimento atencioso, muito claro e objetivo.",
      author: "A. Cavalcante",
      oab: "TRAIRI/CE",
      avatar: "https://i.pravatar.cc/150?img=18"
    },
    {
      quote: "O melhor advogado criminalista da região.",
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
