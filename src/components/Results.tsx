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
    href: "https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia",
  },
  {
    type: "image",
    src: carrosselPlantao,
    tag: "Atuação com Estratégia",
    title: "Defesa Construída com Base em Experiência",
    subtitle: "Analisamos cada detalhe do processo para traçar a linha de defesa mais sólida, com resultados comprovados em casos complexos.",
    href: "https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia",
  },
  {
    type: "image",
    src: carrosselwhatsapp,
    tag: "Comunicação Direta",
    title: "Acompanhamento Personalizado e Discreto",
    subtitle:
      "Você terá um canal de comunicação exclusivo com o advogado, recebendo atualizações constantes com total discrição e sigilo.",
    href: "https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia",
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
              href="https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold text-base md:text-lg hover:bg-primary/90 transition"
            >
              Quero atendimento 
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Sigilo Absoluto Garantido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios; 
