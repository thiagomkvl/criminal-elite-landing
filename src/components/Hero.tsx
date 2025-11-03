import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png"; // <── coloque a imagem em src/assets/

const Hero = () => {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center md:justify-start
 overflow-hidden bg-cover bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Sombra preta à esquerda */}
      <div className="absolute inset-y-0 left-0 w-1/3 md:w-1/2 bg-gradient-to-r from-black via-black/60 to-transparent z-0"></div>

      {/* Overlay decorativo em vermelho (mantém o clima visual) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_50%)]" />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight">
              Estrutura profissional no{" "}
              <span className="text-red-500">Criminal</span> para captar com urgência e previsibilidade
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mx-auto max-w-3xl">
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
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="https://wa.me/48999379752?text=Quero+avancar+com+a+estrutura+digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
