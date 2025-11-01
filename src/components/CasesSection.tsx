import { Button } from "@/components/ui/button";
import { Scale, Shield, Clock, Users, TrendingUp, FileText } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: Scale,
      title: "HC e medidas de urgência",
      strategy: "Campanhas 24/7 de emergência",
      expectation: "Contatos qualificados em poucas horas"
    },
    {
      icon: Shield,
      title: "Flagrante & Custódia",
      strategy: "Geolocalização + criativos de pronto atendimento",
      expectation: "Picos noturnos de demanda; casos com continuidade"
    },
    {
      icon: Users,
      title: "Violência doméstica",
      strategy: "Abordagem acolhedora + precedentes de atuação",
      expectation: "Procura constante com abordagem ética e acolhedora"
    },
    {
      icon: TrendingUp,
      title: "Tráfico & drogas",
      strategy: "Campanhas de urgência segmentadas",
      expectation: "Contato de familiares e réus em busca de apoio imediato"
    },
    {
      icon: FileText,
      title: "Execução penal & progressão",
      strategy: "Conteúdo educativo sobre direitos na execução penal",
      expectation: "Agenda organizada ao longo do mês"
    },
    {
      icon: Clock,
      title: "Outros casos criminais",
      strategy: "Estratégias personalizadas para cada área",
      expectation: "Aumento consistente de consultas qualificadas"
    }
  ];

  return (
    <section id="casos" className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Casos com mais demanda
          </h2>
          <p className="text-lg text-muted-foreground">
            Estratégias validadas para as áreas criminais mais buscadas
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
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground font-medium mb-1">Estratégia:</p>
                    <p className="text-foreground/90">{caseItem.strategy}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium mb-1">O que esperar:</p>
                    <p className="text-foreground/90">{caseItem.expectation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#condicao">Quero essa estrutura</a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://wa.me/48999379752?text=Quero+avancar+com+a+estrutura+digital" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
