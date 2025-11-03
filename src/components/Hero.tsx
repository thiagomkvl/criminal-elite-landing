import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-[#0b0606]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Criminal Elite"
          className="
            w-full h-full object-cover
            object-center            /* mobile: mantém rosto visível */
            sm:object-[60%_center]   /* puxa levemente à direita */
            md:object-[70%_center]   /* desktop: foco no terço direito */
            lg:object-[72%_center]

            scale-[1.06]             /* mobile dá um leve zoom p/ evitar cortes de topo/rodapé */
            sm:scale-[1.02]
            md:scale-[0.96]
            lg:scale-[0.94]

            opacity-95
            transition-all duration-700 ease-out
          "
          loading="eager"
        />

        {/* Gradiente pro texto (mais largo no mobile) */}
        <div
          className="
            absolute inset-y-0 left-0
            w-[78%] xs:w-[72%] sm:w-[66%] md:w-[60%] lg:w-[58%]
            bg-gradient-to-r from-black via-black/85 to-transparent
          "
        />

        {/* Vinheta vermelha sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_22%_40%,rgba(220,38,38,0.08),transparent)] pointer-events-none" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-0">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-left text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] sm:leading-[1.1] tracking-tight">
            Estrutura profissional no{" "}
            <span className="text-red-500">Criminal</span> para captar com
            urgência e previsibilidade
          </h1>

          <p className="text-[0.95rem] sm:text-base md:text-lg text-white/85 max-w-[92%]">
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
