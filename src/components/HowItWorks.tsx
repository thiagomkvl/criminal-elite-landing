import { FileText, Target, Zap, Settings, TrendingUp, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Análise do seu nicho e público-alvo",
      description: "Identificamos exatamente quem são seus clientes ideais e onde encontrá-los"
    },
    {
      icon: Target,
      number: "02",
      title: "Ajuste posicionamento digital do escritório",
      description: "Definimos como seu escritório será percebido online para atrair os casos certos"
    },
    {
      icon: Zap,
      number: "03",
      title: "Desenvolvimento Estratégico",
      description: "Criamos sua landing page, campanhas e roteiros personalizados"
    },
    {
      icon: Settings,
      number: "04",
      title: "Configuração completa das campanhas",
      description: "Implementamos tudo pronto: anúncios, pixels, integrações e automações"
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Primeiros Resultados em até 7 dias",
      description: "Sua estrutura estará gerando consultas qualificadas na primeira semana"
    },
    {
      icon: BarChart3,
      number: "06",
      title: "Relatórios e Feedbacks",
      description: "Acompanhe métricas detalhadas e receba insights para otimizar continuamente seus resultados"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Nós fazemos tudo por você — do planejamento aos primeiros resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop - first row */}
          <div className="hidden lg:block absolute top-12 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
          {/* Connection lines for desktop - second row */}
          <div className="hidden lg:block absolute top-[calc(100%-3rem)] left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
          {/* Vertical connection between rows */}
          <div className="hidden lg:block absolute top-12 bottom-12 right-[16.666%] w-0.5 bg-gradient-to-b from-primary/60 via-primary/60 to-primary/60" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center space-y-4"
              >
                {/* Step icon with number */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center shadow-glow">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
