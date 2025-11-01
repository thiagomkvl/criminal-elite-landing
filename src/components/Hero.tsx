import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  const benefits = [
    {
      title: "Estratégia Direito Criminal",
      description: "com foco em captação e estratégias validadas"
    },
    {
      title: "Perfil Ideal",
      description: "(IG/FB/LinkedIn) com bio, destaques e 12 publicações iniciais"
    },
    {
      title: "Anúncios Redes Sociais",
      description: "Implementação de toda estrutura de tráfego pago"
    },
    {
      title: "Automação WhatsApp",
      description: "(triagem → escritório → fechamento)"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
      <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-8 lg:gap-12 items-center">
        {/* Left Column - Headline & CTA */}
        <div className="animate-fade-in space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight text-balance">
            Estrutura profissional no{" "}
            <span className="text-primary">Criminal</span> para captar com urgência e previsibilidade
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Receba uma estrutura completa de marketing jurídico pronta para gerar novos clientes em até 7 dias
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#condicao">Quero essa estrutura</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/48999379752?text=Quero+avancar+com+a+estrutura+digital" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Benefits Card */}
        <div className="animate-slide-up">
          <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Você recebe
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3 items-start bg-secondary/50 border border-border rounded-xl p-4 transition-all hover:bg-secondary/80">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground">{benefit.title}</p>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
