import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BaseItem = {
  tag?: string;           // ex: "LP", "Criativo"
  title?: string;         // título curto
  subtitle?: string;      // frase curta
  href?: string;          // link opcional (abre em nova guia)
};

type ItemImage = BaseItem & { type: "image"; src: string; alt?: string };
type ItemVideo = BaseItem & { type: "video"; src: string; poster?: string };

type Item = ItemImage | ItemVideo;

type Props = {
  items: Item[];
  className?: string;
  heightClass?: string;   // ex: "h-[420px] md:h-[480px]"
  autoplayMs?: number;    // ex: 4500
};

export default function PortfolioCarousel({
  items,
  className = "",
  heightClass = "h-[420px] md:h-[480px]",
  autoplayMs = 4500,
}: Props) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);
  const isHovering = useRef(false);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const go = (to: number) => {
    const len = safeItems.length;
    const i = ((to % len) + len) % len;
    setIndex(i);
    trackRef.current?.scrollTo({
      left: i * (trackRef.current?.clientWidth ?? 0),
      behavior: "smooth",
    });
  };

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // autoplay
  useEffect(() => {
    if (autoplayMs <= 0 || safeItems.length <= 1) return;
    const start = () => {
      stop();
      timer.current = window.setInterval(() => {
        if (!isHovering.current) next();
      }, autoplayMs) as unknown as number;
    };
    const stop = () => {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoplayMs, safeItems.length]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // resize → mantém alinhado
  useEffect(() => {
    const onResize = () => go(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  if (safeItems.length === 0) return null;

  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-[0_0_60px_-15px_rgba(255,0,0,0.08)]",
        heightClass,
        className,
      ].join(" ")}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      {/* trilho */}
      <div
        ref={trackRef}
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {safeItems.map((item, i) => {
          const media = item.type === "image" ? (
            <img
              src={item.src}
              alt={("alt" in item && item.alt) || item.title || `Item ${i + 1}`}
              className="h-full w-full object-cover select-none pointer-events-none"
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ) : (
            <video
              src={item.src}
              poster={item.poster}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          );

          const Wrapper = item.href ? "a" : "div";
          const wrapperProps = item.href
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <div key={i} className="min-w-full h-full snap-center relative">
              <Wrapper className="block h-full w-full" {...(wrapperProps as any)}>
                {media}

                {/* overlay gradiente sutil p/ legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

                {/* tag + legenda */}
                {(item.tag || item.title || item.subtitle) && (
                  <div className="absolute left-4 right-4 bottom-4 space-y-1">
                    {item.tag && (
                      <span className="inline-block px-2 py-1 rounded-md text-[11px] font-bold tracking-wide bg-primary/90 text-primary-foreground">
                        {item.tag}
                      </span>
                    )}
                    {item.title && (
                      <h4 className="text-white text-lg md:text-xl font-semibold leading-tight drop-shadow">
                        {item.title}
                      </h4>
                    )}
                    {item.subtitle && (
                      <p className="text-white/85 text-sm md:text-base leading-snug">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </Wrapper>
            </div>
          );
        })}
      </div>

      {/* setas */}
      {safeItems.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-white/10 bg-black/40 backdrop-blur px-2.5 py-2 hover:bg-black/60 transition"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-white/10 bg-black/40 backdrop-blur px-2.5 py-2 hover:bg-black/60 transition"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </>
      )}

      {/* dots */}
      {safeItems.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {safeItems.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => go(i)}
              className={[
                "h-2.5 rounded-full transition-all",
                i === index ? "w-6 bg-primary" : "w-2.5 bg-white/30 hover:bg-white/60",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
