import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background-lp-criminal.png";

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[85vh] overflow-hidden bg-[#0b0606]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Criminal Elite"
          className="
            w-full h-full object-cover md:object-contain
            object-right md:object-[85%_center]
            scale-[1.05] md:scale-[0.9]
            opacity-90
          "
        />
        {/* GRADIENT LEFT OVERLAY */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black via-black/80 to-transparent" />
        {/* Red vignette accent */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_25%_40%,rgba(220,38,38,0.07),transparent)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl text-left text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Estrutura profissional no{" "}
            <span className="text-red-500">Criminal</span> para captar com
            urgência e previsibilidade
          </h1>

          <p className="text-base md:text-lg text-white/85 max-w-[90%]">
            Receba uma estrutura completa de marketing jurídico pronta para gerar
            novos clientes em até 7 dias
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
