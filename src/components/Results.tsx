import PortfolioCarousel from "@/components/PortfolioCarousel";
import { CheckCircle2 } from "lucide-react";

// mesmo padrão do Hero
import carrosselPlantao from "@/assets/carrosel-plantao.png";
import carrosselHC from "@/assets/carrosel-hc.png";

const portfolioItems = [
  {
    type: "image",
    src: carrosselHC,
    tag: "LP",
    title: "Landing Page – HC & Medidas de Urgência",
    subtitle:
      "Estrutura de conversão com gatilhos de urgência e prova social.",
    href: "https://criminal-elite-landing.vercel.app/",
  },
  {
    type: "image",
    src: carrosselPlantao,
    tag: "Criativo",
    title: "Criativo – Flagrante & Custódia",
    subtitle: "Anúncio com geolocalização e copy direta para plantões.",
  },
  {
    type: "image",
    src: carrosselPlantao,
    tag: "WhatsApp",
    title: "Roteiro de WhatsApp",
    subtitle:
      "Sequência de mensagens para agendar consulta em minutos.",
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
            Quem vai se{" "}
            <span className="text-primary underline decoration-primary/60 underline-offset-4">
              beneficiar
            </span>{" "}
            desta estrutura
          </h2>

          <div className="space-y-4">
            {[
              "Advogados(as) iniciantes no criminal",
              "Criminalistas buscando previsibilidade de agenda",
              "Escritórios que querem medir leads, conversas e fechamentos",
              "Profissionais que precisam de presença e autoridade digital",
              "Quem quer escalar investimento com controle de demanda",
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
