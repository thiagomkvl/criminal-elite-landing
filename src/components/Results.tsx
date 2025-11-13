import PortfolioCarousel from "@/components/PortfolioCarousel";
import { CheckCircle2 } from "lucide-react";

// mesmo padrão do Hero
import carrosselPlantao from "@/assets/carrosel-plantao.png";
import carrosselHC from "@/assets/slide-hc.png";
import carrosselwhatsapp from "@/assets/slide-whatsapp.png";

const portfolioItems = [
  {
    type: "image",
    src: carrosselHC,
    tag: "Bônus",
    title: "Apareça para futuros clientes em momentos de urgência",
    subtitle:
      "Estratégia de presença digital construída para gerar autoridade e resposta imediata.",
    href: "https://criminal-elite-landing.vercel.app/",
  },
  {
    type: "image",
    src: carrosselPlantao,
    tag: "Bônus",
    title: "Anúncios que falam com quem precisa de você agora",
    subtitle: "Geolocalização direta para plantões.",
  },
  {
    type: "image",
    src: carrosselwhatsapp,
    tag: "Bônus",
    title: "Transforme seu WhatsApp em uma agenda previsível",
    subtitle:
      "Acompanhamento semanal para manter um volume constante de clientes no escritório",
  },
];

const Beneficios = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* ESQUERDA: CARROSSEL */}
        <div className="w-full">
          <PortfolioCarousel
            items={portfolioItems}
            heightClass="h-[420px] md:h-[500px]"
            // autoPlayMs={6000} // opcional
          />
          <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">
            Um panorama do fluxo: anúncio → landing page → WhatsApp → fechamento.
          </p>
        </div>

        {/* DIREITA: BENEFÍCIOS */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Quem precisa de um Advogado{" "}
            <span className="text-primary underline decoration-primary/60 underline-offset-4">
              Criminalista?
            </span>{" "}
            
          </h2>

          <div className="space-y-4">
            {[
              "Pessoas investigadas ou intimadas",
              "Familiares de alguém preso",
              "Indiciados que precisam de defesa",
              "Réus em processos criminais",
              "Vítimas que necessitam representação",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-border/40 rounded-xl px-4 py-3 hover:border-primary/40 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold text-base md:text-lg hover:bg-primary/90 transition"
            >
              Quero me inscrever →
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Sem mensalidades. Entrega personalizada em até 7 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios; 
