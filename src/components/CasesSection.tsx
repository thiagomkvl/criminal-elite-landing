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
    <section
      id="casos"
      className="container mx-auto px-4 py-16 md:py-24 max-w-7xl"
    >
      <div className="space-y-10">

        {/* TÍTULO + SUBTÍTULO */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Áreas de atuação no Direito Criminal
          </h2>

          <p className="text-lg text-white/70 leading-relaxed">
            Atuação técnico-jurídica em diferentes frentes do Direito Penal e
            Processual Penal, sempre com sigilo, responsabilidade e clareza.
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
                  group
                  bg-[#111]
                  border border-[#2a2a2a]
                  rounded-xl p-6
                  transition-all
                  hover:border-[#3a3a3a]
                  hover:bg-[#141414]
                "
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="
                      shrink-0 w-12 h-12 rounded-lg
                      bg-[#1a1a1a]
                      border border-[#2e2e2e]
                      flex items-center justify-center
                      transition-colors
                      group-hover:bg-[#202020]
                    "
                  >
                    <Icon className="w-6 h-6 text-gray-300" />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
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
