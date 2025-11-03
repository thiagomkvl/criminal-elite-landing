import { Button } from "@/components/ui/button";
import heroBgDesktop from "@/assets/background-lp-criminal.png";
import heroBgMobile from "@/assets/hero-criminal-mobile.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0606] min-h-[90vh] md:min-h-[100vh] flex items-center">
      {/* BACKGROUND */}
      <div className="absolute -inset-[2px] pointer-events-none">
        {/* Mobile background */}
        <img
          src={heroBgMobile}
          alt="Criminal Elite Mobile"
          className={`
            w-full h-full object-cover md:hidden
            object-[50%_35%] opacity-95
            [backface-visibility:hidden] [transform:translateZ(0)]
          `}
          loading="eager"
        />

        {/* Desktop background */}
        <img
          src={heroBgDesktop}
          alt="Criminal Elite Desktop"
          className={`
            hidden md:block w-full h-full object-cover
            md:object-[70%_center] lg:object-[72%_center]
            opacity-95 [backface-visibility:hidden] [transform:translateZ(0)]
          `}
          loading="eager"
        />
      </div>

      {/* OVERLAYS */}
      {/* Gradiente lateral (inalterado) */}
      <div className="absolute inset-y-0 left-0 w-[85%] xs:w-[78%] sm:w-[66%] md:w-[60%] lg:w-[58%] bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

      {/* Radial discreto (mantido) */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />

      {/* MOBILE: sombra suave para leitura */}
      <div className="absolute inset-0 bg-black/45 md:hidden pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full h-full grid">
        <div
          className="
            self-center
            w-full max-w-[780px]
            px-5 sm:px-6
            md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
            text-left text-white space-y-5
          "
        >
          {/* TÍTULO */}
          <h1
            className="
              text-[1.85rem] leading-[1.12]
              sm:text-[2.2rem] sm:leading-[1.12]
              md:text-5xl md:leading-[1.1]
              lg:text-6xl font-extrabold tracking-tight
              max-w-[26rem] sm:max-w-none
            "
          >
            {/* MOBILE: quebras controladas */}
            <span className="sm:hidden">
              Estrutura para{" "}
              <span className="text-red-500 whitespace-nowrap">
                Advogado Criminal
              </span>
              <br />
              captar com urgência e
              <br />
              previsibilidade
            </span>

            {/* DESKTOP: sem alterações */}
            <span className="hidden sm:inline">
              Estrutura para{" "}
              <span className="text-red-500 whitespace-nowrap">
                Advogado Criminal
              </span>{" "}
              captar com urgência e previsibilidade
            </span>
          </h1>

          <p className="text-[0.97rem] sm:text-base md:text-lg text-white/85 max-w-[92%]">
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
    </section>
  );
};

export default Hero;
