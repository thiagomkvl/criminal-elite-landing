import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const guarantees = [
    "Garantia incondicional 7 dias",
    "Entrega em até 7 dias (itens personalizados)",
    "Suporte via WhatsApp",
    "Atualizações incluídas"
  ];

  return (
    <section id="condicao" className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Pricing Card */}
        <div className="bg-gradient-to-br from-card-elevated to-card border border-primary/30 rounded-2xl p-8 md:p-10 shadow-glow space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-primary">
              Condição de lançamento
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black tracking-tight">R$ 297</span>
              <span className="text-muted-foreground">a partir de</span>
            </div>
          </div>

          <p className="text-lg text-foreground/90">
            Acesso imediato aos arquivos + suporte por WhatsApp
          </p>

          <ul className="space-y-3">
            {guarantees.map((guarantee, index) => (
              <li key={index} className="flex gap-3 items-center">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="text-foreground">{guarantee}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 space-y-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              asChild
            >
              <a href="https://checkout.seulink.com/criminal" target="_blank" rel="noopener noreferrer">
                Garantir minha estrutura
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              asChild
            >
              <a href="https://wa.me/48999379752?text=Preciso+de+ajuda" target="_blank" rel="noopener noreferrer">
                Preciso de ajuda
              </a>
            </Button>
          </div>
        </div>

        {/* Right - Additional Info */}
        <div className="space-y-8 lg:pt-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Por que investir agora?
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Implantação rápida",
                  desc: "Estrutura pronta para começar em dias, não meses"
                },
                {
                  title: "Baseado em cases reais",
                  desc: "Estratégias validadas por advogados criminalistas"
                },
                {
                  title: "Suporte incluído",
                  desc: "Tire dúvidas durante a implementação"
                },
                {
                  title: "Sem mensalidades",
                  desc: "Pagamento único para acesso vitalício"
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-success/10 border border-success/30 rounded-xl p-6">
            <p className="text-sm font-bold text-success mb-2">
              ✓ Garantia Incondicional de 7 Dias
            </p>
            <p className="text-sm text-foreground/80">
              Se a estrutura não atender suas expectativas, devolvemos 100% do seu investimento. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
