import { Calendar, TrendingUp, Award, BarChart3 } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: Calendar,
      title: "Agenda previsível",
      description: "Consultas qualificadas chegando de forma consistente, sem depender de indicações"
    },
    {
      icon: TrendingUp,
      title: "Crescimento mensurável",
      description: "Acompanhe métricas claras: leads, conversas e clientes fechados"
    },
    {
      icon: Award,
      title: "Autoridade na área criminal",
      description: "Presença profissional nas redes sociais com conteúdo estratégico"
    },
    {
      icon: BarChart3,
      title: "Escalabilidade controlada",
      description: "Aumente ou reduza investimento conforme sua capacidade de atendimento"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Resultados esperados
          </h2>
          <p className="text-lg text-muted-foreground">
            O que muda quando você tem uma estrutura digital profissional rodando
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-card border border-border rounded-xl p-8 overflow-hidden transition-all hover:border-primary/50 hover:shadow-md"
              >
                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {result.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Results;
