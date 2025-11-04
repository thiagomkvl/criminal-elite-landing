import { CheckCircle2, ArrowUpRight } from "lucide-react";

type Persona = { label: string; hint?: string };

const personas: Persona[] = [
  { label: "Advogados(as) iniciantes no criminal" },
  { label: "Criminalistas buscando previsibilidade de agenda" },
  { label: "Escritórios que querem medir leads, conversas e fechamentos" },
  { label: "Profissionais que precisam de presença e autoridade digital" },
  { label: "Quem quer escalar investimento com controle de demanda" },
];

export default function WhoBenefits() {
  return (
    <section className="container mx-auto px-4 py-14 md:py-20 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT — vídeo ou imagem */}
        <figure className="relative">
          <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-2xl border border-border bg-card">
            {/* Substitua o src abaixo pela tua thumbnail ou <video /> */}
            <img
              src="/assets/background-lp-criminal.png"
              alt="Prévia rápida da estrutura em ação"
              className="h-full w-full object-cover"
            />

            {/* Overlay suave + “play” opcional */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-background/10 to-transparent" />
            <button
              className="group absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur transition hover:bg-black/50"
              aria-label="Assistir vídeo de 60s"
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
              Vídeo de 60s
            </button>

            {/* Botão central (somente se for abrir modal) */}
            {/* <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white grid place-content-center hover:bg-white/15 transition">
              ▶
            </button> */}
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Um panorama do fluxo: anúncio → LP → WhatsApp → fechamento.
          </figcaption>
        </figure>

        {/* RIGHT — título, bullets e CTA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Quem vai se{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                beneficiar
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary/60" />
            </span>{" "}
            desta estrutura
          </h2>

          <ul className="mt-6 space-y-3">
            {personas.map((p) => (
              <li
                key={p.label}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-3 hover:border-primary/40 transition"
              >
                <span className="mt-1 inline-grid h-5 w-5 place-content-center rounded-full bg-primary/10 ring-4 ring-primary/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                </span>
                <div className="text-sm leading-relaxed">
                  <p className="text-foreground">{p.label}</p>
                  {p.hint && (
                    <p className="text-xs text-muted-foreground">{p.hint}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* CTA em pílula */}
          <div className="mt-8">
            <a
              href="#condicao"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary to-primary/70 px-6 py-4 text-base font-extrabold text-primary-foreground shadow-[0_0_60px_-20px] shadow-primary/50 hover:from-primary/90 hover:to-primary/70 md:w-auto"
            >
              Quero me inscrever
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Sem mensalidades. Entrega personalizada em até 7 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
