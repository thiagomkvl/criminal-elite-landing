import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Landing Page Profissional",
      description: "Página de captura otimizada para conversão de clientes criminais"
    },
    {
      title: "Campanhas de Tráfego",
      description: "Templates validados de anúncios no Meta Ads prontos para uso"
    },
    {
      title: "Roteiros de WhatsApp",
      description: "Scripts de atendimento que convertem consultas em clientes"
    },
    {
      title: "Implementação Completa",
      description: "Estrutura 100% configurada e pronta para gerar resultados"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Você recebe
          </h2>
          <p className="text-lg text-muted-foreground">
            Estrutura completa para atrair clientes criminais qualificados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
