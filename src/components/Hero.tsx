import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png"; // sua imagem

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0606]">
      {/* altura da dobra */}
      <div className="relative h-[78vh] md:h-[92vh] min-h-[640px]">

        {/* GRADIENTE PRETO p/ texto (esquerda → centro) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-[60%] md:w-[58%] bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(1000px_520px_at_18%_38%,rgba(220,38,38,0.08),transparent)]" />
        </div>

        {/* IMAGEM: ocupa a altura inteira, ancorada à direita */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Criminal Elite"
            className="
              absolute right-[-4%] top-1/2 -translate-y-1/2
              h-[115%] md:h-full w-auto max-w-none
              object-contain md:object-contain
              select-none pointer-events-none
            "
            loading="eager"
          />
        </div>

        {/* CONTEÚDO (coluna esquerda, texto normal, alinhado à esquerda) */}
        <div className="relative z-20 h-full container mx-auto px-4">
          <div className="h-full grid grid-cols-1 md:grid-cols-12">
            <div className="flex flex-col justify-center md:col-span-7 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight">
                Estrutura profissional no <span className="text-red-500">Criminal</span> para captar com urgência e previsibilidade
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/80 max-w-[44rem]">
                Receba uma estrutura completa de marketing jurídico pronta para gerar novos clientes em até 7 dias
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
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

            {/* coluna fantasma p/ reservar espaço da imagem em desktop */}
            <div className="hidden md:block md:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
