import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
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
    </section>
  );
};

export default Hero;
