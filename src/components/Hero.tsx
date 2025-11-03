import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0606]">
      {/* gradiente escuro para dar contraste ao texto (não cobre a imagem) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
      {/* leve vinheta vermelha */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_40%,rgba(220,38,38,0.08),transparent)] z-0" />

      {/* container + GRID 2 colunas */}
      <div className="container mx-auto px-4">
        <div className="relative z-10 grid grid-cols-12 gap-6 items-center h-[85vh] min-h-[640px]">

          {/* COLUNA ESQUERDA — TEXTO */}
          <div className="col-span-12 md:col-span-6 text-white">
            <div className="max-w-[680px] space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Estrutura profissional no{" "}
                <span className="text-red-500">Criminal</span> para captar com
                urgência e previsibilidade
              </h1>

              <p className="text-base md:text-xl text-white/85">
                Receba uma estrutura completa de marketing jurídico pronta para gerar
                novos clientes em até 7 dias
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* COLUNA DIREITA — IMAGEM (inteira, sem cortes) */}
          <div className="col-span-12 md:col-span-6 relative h-full flex items-end md:items-center justify-end">
            <img
              src={heroBg}
              alt="Criminal Elite"
              loading="eager"
              className="
                h-[70vh] md:h-[80vh] max-h-[82vh]
                w-auto object-contain   /* nunca corta */
                ml-auto                  /* encosta à direita */
                -mr-2 md:mr-0            /* ajuste fino de respiro */
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
