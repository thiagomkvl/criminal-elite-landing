import { Scale, Shield, Clock, Users, TrendingUp, FileText } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: Scale,
      title: "Habeas corpus e medidas urgentes",
      description:
        "Análise de ilegalidades, fundamentos e possibilidade de medidas emergenciais voltadas à proteção da liberdade."
    },
    {
      icon: Shield,
      title: "Flagrante & custódia",
      description:
        "Acompanhamento em delegacias, orientações aos familiares e atuação para garantia dos direitos do custodiado."
    },
    {
      icon: Users,
      title: "Violência doméstica",
      description:
        "Atuação técnica e responsável em situações sensíveis, com tratamento sigiloso e respeito às particularidades de cada caso."
    },
    {
      icon: TrendingUp,
      title: "Tráfico & drogas",
      description:
        "Avaliação da abordagem, cadeia de custódia e elementos probatórios, com condução jurídica adequada ao caso concreto."
    },
    {
      icon: FileText,
      title: "Execução penal & progressão",
      description:
        "Pedidos de progressão, remição, benefícios legais e acompanhamento completo do processo de execução penal."
    },
    {
      icon: Clock,
      title: "Outros casos criminais",
      description:
        "Atuação em investigações, denúncias, audiências, recursos e procedimentos penais em geral."
    }
  ];

  return (
    <section id="casos" className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-8">

        {/* TÍTULO + SUBTÍTULO */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Áreas de atuação no Direito Criminal
          </h2>

          <p className="text-lg text-white/70">
            Atuação técnico-jurídica em diferentes frentes do Direito Penal e Processual Penal.
            Cada caso é tratado com sigilo, responsabilidade e estratégia.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group bg-gradient-card border border-white/10 rounded-xl p-6
                  transition-all hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.12)]
                "
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="
                      shrink-0 w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30
                      flex items-center justify-center transition-colors
                      group-hover:bg-red-500/20
                    "
                  >
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
