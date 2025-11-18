import { Scale, Shield, Clock, Users, TrendingUp, FileText } from "lucide-react";

const CasesSection = () => {
  const cases = [
    // ... (dados inalterados) ...
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
        "Pedidos de progressão, remição, benefícios legais e acompanhamento completo da execução penal."
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
      className="
        relative /* Adicionado para garantir que overlays funcionem bem se necessário */
        overflow-x-hidden /* MUDANÇA CRÍTICA: Esconde qualquer estouro horizontal */
        w-full /* Garante que a seção ocupe 100% da largura disponível */
        max-w-7xl /* MUDANÇA: Max-width aplicado aqui, fora do container */
        mx-auto /* Centraliza a seção */
        px-4 sm:px-6 md:px-8 lg:px-12 /* MUDANÇA: Paddings responsivos controlados manualmente */
        py-16 md:py-24
      "
    >
      <div className="space-y-14">

        {/* HEADER CENTRALIZADO */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Áreas de Atuação no Direito Criminal
          </h2>
          {/* ... (restante do header) ... */}
          <p className="text-lg text-white/70 leading-relaxed">
            Atuação técnico-jurídica com foco na defesa de direitos, no respeito ao
            devido processo legal e na condução responsável de casos de alta complexidade.
          </p>

          <div className="w-20 h-[3px] bg-[#C6A667] mx-auto rounded-full" />
        </div>

        {/* GRID - LEFT ALIGNED PREMIUM */}
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
                  hover:border-[#C6A667]
                  hover:bg-[#161616]
                "
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="
                      w-12 h-12 rounded-lg
                      bg-[#151515]
                      border border-[#3a3a3a]
                      flex items-center justify-center
                      transition-all
                      group-hover:border-[#C6A667]
                      group-hover:bg-[#1b1b1b]
                    "
                  >
                    <Icon className="w-6 h-6 text-[#C6A667]" />
                  </div>

                  <h3 className="font-semibold text-lg text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

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
