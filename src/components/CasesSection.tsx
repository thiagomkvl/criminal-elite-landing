import { Button } from "@/components/ui/button";
import { Scale, Shield, Clock, Users, TrendingUp, FileText } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: Scale,
      title: "HC e medidas de urgência",
      description: "Campanhas 24/7 de emergência que geram contatos qualificados em poucas horas."
    },
    {
      icon: Shield,
      title: "Flagrante & Custódia",
      description: "Geolocalização + criativos de pronto atendimento para atender picos noturnos de demanda com casos de continuidade."
    },
    {
      icon: Users,
      title: "Violência doméstica",
      description: "Abordagem acolhedora + precedentes de atuação que geram procura constante com ética e acolhimento."
    },
    {
      icon: TrendingUp,
      title: "Tráfico & drogas",
      description: "Campanhas de urgência segmentadas que atraem familiares e réus em busca de apoio imediato."
    },
    {
      icon: FileText,
      title: "Execução penal & progressão",
      description: "Conteúdo educativo sobre direitos na execução penal que organiza sua agenda ao longo do mês."
    },
    {
      icon: Clock,
      title: "Outros casos criminais",
      description: "Estratégias personalizadas para cada área que aumentam consistentemente suas consultas qualificadas."
    }
  ];

  return (
    <section id="casos" className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
          Principais áreas de atuação
        </h2>
        <p className="text-lg text-muted-foreground">
          Experiência comprovada no Direito Criminal
        </p>
      </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card border border-border rounded-xl p-6 transition-all hover:border-primary/50 hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseItem.description}
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
