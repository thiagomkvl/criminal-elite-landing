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
      {/* Gradiente lateral (mantém teu desktop) */}
      <div className="absolute inset-y-0 left-0 w-[85%] xs:w-[78%] sm:w-[66%] md:w-[60%] lg:w-[58%] bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      {/* Radial discreto (mantido) */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
      {/* MOBILE: gradiente vertical forte para leitura (não afeta desktop) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent md:hidden pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full h-full grid">
        <div
          className={`
            /* MOBILE: centralizado no estilo V4 */
            self-center md:self-center
            w-full max-w-[780px]
            px-5 sm:px-6
            md:pl-[6vw] lg:pl-[8vw] xl:pl-[10vw] md:pr-0
            space-y-5
            /* mobile centralizado; desktop segue à esquerda */
            text-center md:text-left
            mx-auto md:mx-0
            /* leve respiro no mobile */
            pb-8 sm:pb-10 md:pb-0
            text-white
          `}
        >
          {/* TÍTULO */}
          <h1
            className={`
              text-[2rem] leading-[1.14]
              sm:text-[2.2rem] sm:leading-[1.12]
              md:text-5xl md:leading-[1.1]
              lg:text-6xl
              font-extrabold tracking-tight
              /* no mobile, deixa respirar e centraliza largura */
              max-w-[26rem] sm:max-w-[38rem] md:max-w-none
              mx-auto md:mx-0
            `}
          >
            {/* MOBILE: quebras controladas e centralizadas */}
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

            {/* DESKTOP: inalterado */}
            <span className="hidden sm:inline">
              Estrutura para{" "}
              <span className="text-red-500 whitespace-nowrap">
                Advogado Criminal
              </span>{" "}
              captar com urgência e previsibilidade
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-[1rem] sm:text-base md:text-lg text-white/85 max-w-[30rem] sm:max-w-[36rem] md:max-w-[92%] mx-auto md:mx-0">
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </p>

          {/* BOTÕES */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[28rem] sm:max-w-none mx-auto md:mx-0 w-full">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto py-4 text-[0.95rem]"
              asChild
            >
              <a href="#condicao">Quero essa estrutura</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 py-4 text-[0.95rem]"
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
