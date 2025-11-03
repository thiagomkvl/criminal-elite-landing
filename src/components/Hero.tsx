import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight">
              Estrutura profissional no{" "}
              <span className="text-primary">Criminal</span> para captar com urgência e previsibilidade
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl">
              Receba uma estrutura completa de marketing jurídico pronta para gerar novos clientes em até 7 dias
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
