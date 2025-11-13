import { FileText, Target, Zap, Settings, TrendingUp, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Contato inicial confidencial",
      description: "Você entra em contato pelo WhatsApp ou formulário, explica de forma simples o que está acontecendo. Tudo é sigiloso, sem exposição."
    },
    {
      icon: Target,
      number: "02",
      title: "Análise jurídica do caso",
      description: "Nossos advogados avaliam rapidamente a situação, documentos, prazos, e identificam oportunidades de defesa."
    },
    {
      icon: Zap,
      number: "03",
      title: "Definição da estratégia de defesa",
      description: "Apresentamos, em linguagem clara, quais são os caminhos possíveis (defesa escrita, pedido de liberdade, habeas corpus, recursos etc.)"
    },
    {
      icon: Settings,
      number: "04",
      title: "Formalização e início da atuação",
      description: "Com tudo alinhado, formalizamos o contrato, honorários e procurações."
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Atuação nos processos e diligências",
      description: "Passamos a atuar diretamente no caso: petições, audiências, sustentações orais, e demais medidas necessárias à sua defesa."
    },
    {
      icon: BarChart3,
      number: "06",
      title: "Acompanhamento e atualizações",
      description: "Você é informado sobre cada andamento relevante do processo, com explicações objetivas e acessíveis."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-12">
        {/* Cabeçalho */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Como atuamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Conte com a experiência de quem já atua há mais de 20 anos nos Tribunais do Ceará
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
