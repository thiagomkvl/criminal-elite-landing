import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0606] via-[#0b0606] to-[#100909]">
      {/* altura da dobra */}
      <div className="h-[80vh] md:h-[92vh] min-h-[640px] relative">

        {/* IMAGEM: inteira, mais distante, ancorada à direita */}
        <img
          src={heroBg}
          alt="Criminal Elite"
          className="
            pointer-events-none select-none
            absolute right-0 inset-y-0
            h-full w-auto object-contain
            md:translate-x-6        /* leve afastamento */
            scale-[0.9] md:scale-[0.84] /* deixa mais distante/menor */
          "
          loading="eager"
        />

        {/* GRADIENTE PRETO à esquerda para texto */}
        <div className="absolute inset-y-0 left-0 w-1/2 md:w-[56%] bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

        {/* Vignette sutil para integrar */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_40%,rgba(220,38,38,0.08),transparent)] z-10" />

        {/* CONTEÚDO */}
        <div className="relative z-20 h-full container mx-auto px-4">
          <div className="h-full flex flex-col items-center justify-center text-center text-white">
            <div className="max-w-[980px] space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Estrutura profissional no{" "}
                <span className="text-red-500">Criminal</span> para captar com
                urgência e previsibilidade
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto">
                Receba uma estrutura completa de marketing jurídico pronta para gerar
                novos clientes em até 7 dias
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
