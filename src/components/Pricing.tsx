import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const guarantees = [
    "Consulta Imediata com Especialista: A primeira orientação é crucial.",
    "Sigilo Absoluto e Total Discrição em todas as etapas da defesa.",
    "Estratégia de Defesa Montada em Horas após o primeiro contato.",
    "Suporte Direto via Telefone/WhatsApp para momentos de crise."
  ];

  return (
    <section id="condicao" className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Pricing Card */}
        <div className="bg-gradient-to-br from-card-elevated to-card border border-primary/30 rounded-2xl p-8 md:p-10 shadow-glow space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-primary">
             
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black tracking-tight">Atendimento 24h</span>
              <span className="text-muted-foreground"></span>
            </div>
          </div>

          <p className="text-lg text-foreground/90">
            Não espere. Sua defesa começa com um contato.
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
              <a href="https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia" target="_blank" rel="noopener noreferrer">
                Atendimento com Urgência
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              asChild
            >
              <a href="https://wa.me/85988004853?text=Estou+precisando+de+orientacao+juridica+criminal+com+urgencia" target="_blank" rel="noopener noreferrer">
                Preciso de ajuda
              </a>
            </Button>
          </div>
        </div>

        {/* Right - Additional Info */}
        <div className="space-y-8 lg:pt-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Ação Imediata",
                  desc: "Iniciamos a análise e a Defesa do Caso nas Primeiras Horas para proteger seus direitos desde o início."
                },
                {
                  title: "Resultados Reais",
                  desc: "Sua defesa será conduzida por uma equipe com sucesso comprovado em casos complexos e delicados."
                },
                {
                  title: "Suporte 24/7",
                  desc: "Você terá um canal direto para acompanhar cada passo da sua defesa e ter paz de espírito."
                },
                {
                  title: "Transparência Total",
                  desc: "Honorários claros, justos e alinhados com o seu caso."
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
              ✓ Sua Liberdade e Seus Direitos Exigem Urgência.
            </p>
            <p className="text-sm text-foreground/80">
              Não tome nenhuma decisão antes de falar com nossa equipe especializada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
