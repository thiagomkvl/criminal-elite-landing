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
      <div
        className="
          absolute inset-y-0 left-0
          w-[85%] xs:w-[78%] sm:w-[66%] md:w-[60%] lg:w-[58%]
          bg-gradient-to-r
          from-black/60 via-black/40 to-transparent
          md:from-black md:via-black/85 md:to-transparent
          pointer-events-none
        "
      />

      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 md:hidden pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full h-full grid">
        <div
          className="
            self-center
            w-full max-w-[780px]
            px-5 sm:px-6
            md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
            text-center sm:text-left text-white space-y-5
            mt-[50vh] sm:mt-0
          "
        >
          {/* TÍTULO */}
          <h1
            className="
              text-[1.9rem] leading-[1.15]
              sm:text-[2.3rem] sm:leading-[1.15]
              md:text-[2.9rem] md:leading-[1.12]
              lg:text-[3.6rem] lg:leading-[1.1]
              font-extrabold tracking-tight
              max-w-[26rem] sm:max-w-none mx-auto sm:mx-0
            "
          >
            {/* MOBILE */}
            <span className="sm:hidden">
              Atendimento jurídico em{" "}
              <span className="text-red-500 whitespace-nowrap">
                situações de urgência
              </span>
            </span>

            {/* DESKTOP — FORÇAR QUEBRA */}
            <span className="hidden sm:block">
              Atendimento jurídico em <br />
              <span className="text-red-500">situações de</span> <br />
              <span className="text-red-500">urgência</span>
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-[0.97rem] sm:text-base md:text-lg text-white/85 max-w-[92%] mx-auto sm:mx-0">
            Atuação imediata em casos criminais, com discrição, técnica e prioridade.
            Quando ocorre uma prisão, condução ou investigação, cada minuto importa.
          </p>

          {/* CTAS */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia">Atendimento urgente</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* MICROTEXTO */}
          <p className="text-[0.75rem] text-white/60">
            Atendimento confidencial. Todas as informações são tratadas com absoluto sigilo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
