import { Calendar, TrendingUp, Award, BarChart3 } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: Calendar,
      title: "Agenda previsível",
      description:
        "Consultas qualificadas chegando de forma consistente, sem depender de indicações.",
      chips: ["Leads regulares", "Menos sazonalidade"],
    },
    {
      icon: TrendingUp,
      title: "Crescimento mensurável",
      description:
        "Acompanhe métricas claras: leads, conversas e clientes fechados.",
      chips: ["Funil rastreável", "Decisão por dados"],
    },
    {
      icon: Award,
      title: "Autoridade na área criminal",
      description:
        "Presença profissional nas redes sociais com conteúdo estratégico.",
      chips: ["Posicionamento", "Prova social"],
    },
    {
      icon: BarChart3,
      title: "Escalabilidade controlada",
      description:
        "Ajuste investimento conforme sua capacidade de atendimento.",
      chips: ["Custo sob controle", "Expansão segura"],
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-12 md:py-16 max-w-7xl"
      aria-labelledby="resultados-ttl"
    >
      <div className="space-y-10 md:space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2
            id="resultados-ttl"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
          >
            Resultados esperados
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            O que muda quando sua estrutura digital profissional está rodando
          </p>
        </div>

        <ul
          role="list"
          className="grid md:grid-cols-2 gap-6"
          aria-label="Lista de resultados esperados"
        >
          {results.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                role="listitem"
                key={item.title}
                className="group relative bg-gradient-card border border-border rounded-2xl p-7 md:p-8 overflow-hidden transition-all hover:border-primary/50 hover:shadow-md/20"
              >
                {/* Glow discreto */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />

                {/* Badge numerado */}
                <div className="absolute -top-3 -left-3 h-9 px-3 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center gap-2 shadow/30">
                  <span className="inline-block w-5 h-5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  Resultado
                </div>

                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon aria-hidden className="w-7 h-7 text-primary" />
                    <span className="sr-only">{item.title}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Chips de reforço */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-xs md:text-[13px] rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-foreground/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Área clicável maior no mobile (sem parecer botão) */}
                <a
                  href="#condicao"
                  className="absolute inset-0 md:inset-auto md:pointer-events-none"
                  aria-label={`Ver condições para alcançar: ${item.title}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Results;
