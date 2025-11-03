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
      title: "Ajuste posicionamento digital",
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
        {/* Cabeçalho */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Nós fazemos tudo por você — do planejamento aos primeiros resultados
          </p>
        </div>

        {/* Etapas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* 🔥 Linhas removidas */}
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Ícone e número */}
                <div className="relative">
                  <div className="
                    w-24 h-24 rounded-2xl 
                    bg-gradient-to-br from-primary/20 to-primary/5 
                    border-2 border-primary/30 
                    flex items-center justify-center 
                    shadow-[0_0_10px_rgba(255,0,0,0.15)]
                    transition-all duration-500 
                    hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                    hover:scale-105
                  ">
                    <Icon className="w-10 h-10 text-primary transition-colors duration-300 hover:text-red-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Conteúdo */}
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
