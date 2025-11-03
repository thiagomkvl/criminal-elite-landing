import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0606] min-h-[88vh] md:min-h-[90vh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Criminal Elite"
          className="
            w-full h-full
            object-cover
            /* MOBILE: foca mais alto, dá um zoom sutil para evitar corte ruim */
            object-[50%_22%] scale-[1.12]
            /* SM+: começa a recentralizar e reduzir o zoom */
            sm:object-[58%_28%] sm:scale-[1.06]
            md:object-[70%_center] md:scale-[0.96]
            lg:object-[72%_center] lg:scale-[0.94]
            opacity-95 transition-all duration-700 ease-out
          "
          loading="eager"
        />

        {/* Overlay lateral p/ texto (mais largo no mobile) */}
        <div
          className="
            absolute inset-y-0 left-0
            w-[88%] xs:w-[80%] sm:w-[68%] md:w-[60%] lg:w-[58%]
            bg-gradient-to-r from-black via-black/85 to-transparent
          "
        />

        {/* Overlay inferior no mobile (evita poluição por trás das CTAs) */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-[34%]
            bg-gradient-to-t from-black/85 via-black/50 to-transparent
            md:hidden
          "
        />

        {/* Vinheta vermelha sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-0 pb-10 md:pb-0 h-full">
        <div className="max-w-[680px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-left text-white flex flex-col justify-center h-full">
          <h1
            className="
              text-[1.85rem] leading-[1.12]
              sm:text-[2.2rem] sm:leading-[1.12]
              md:text-5xl md:leading-[1.1]
              lg:text-6xl
              font-extrabold tracking-tight
            "
          >
            Estrutura profissional no{" "}
            <span className="text-red-500">Criminal</span> para captar com
            urgência e previsibilidade
          </h1>

          <p className="mt-4 text-[0.97rem] sm:text-base md:text-lg text-white/85 max-w-[92%]">
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </p>

          <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
