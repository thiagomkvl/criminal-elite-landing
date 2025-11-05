import React, { useEffect, useState, useCallback } from "react";

type BaseItem = {
  tag?: string;
  title?: string;
  subtitle?: string;
  href?: string;
};

type ImageItem = BaseItem & {
  type: "image";
  src: string;
};

type VideoItem = BaseItem & {
  type: "video";
  src: string;
  poster?: string;
};

export type PortfolioCarouselItem = ImageItem | VideoItem;

type Props = {
  items: PortfolioCarouselItem[];
  heightClass?: string;
  className?: string;
  autoPlayMs?: number | null;
};

const PortfolioCarousel: React.FC<Props> = ({
  items,
  heightClass = "h-[420px] md:h-[500px]",
  className = "",
  autoPlayMs = null,
}) => {
  const [index, setIndex] = useState(0);
  const total = items?.length ?? 0;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const go = useCallback(
    (dir: number) => {
      if (!total) return;
      setIndex((i) => (i + dir + total) % total);
    },
    [total]
  );

  // autoplay opcional
  useEffect(() => {
    if (!autoPlayMs || !total) return;
    const id = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs, go, total]);

  if (!items || total === 0) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-[#111]/40 ring-1 ring-white/5 ${heightClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-[#111]/40 ring-1 ring-white/5 ${heightClass} ${className}`}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchMove={(e) => {
        if (touchStartX === null) return;
        const delta = e.touches[0].clientX - touchStartX;
        if (Math.abs(delta) > 40) {
          delta > 0 ? go(-1) : go(1);
          setTouchStartX(null);
        }
      }}
      onTouchEnd={() => setTouchStartX(null)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {items.map((item, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title ?? `Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  controls
                />
              )}

              {/* OVERLAY: sombreado + conteúdo */}
              {(item.tag || item.title || item.subtitle) && (
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  {/* Gradiente escuro no rodapé */}
                  <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl pointer-events-none"></div>

                  {/* Conteúdo textual sobre o gradiente */}
                  <div className="relative z-10">
                    {item.tag && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-600 text-white shadow">
                        {item.tag}
                      </span>
                    )}

                    {(item.title || item.subtitle) && (
                      <div className="mt-2 sm:mt-3">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white text-lg sm:text-xl font-bold leading-tight hover:underline"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
                            {item.title}
                          </h3>
                        )}
                        {item.subtitle && (
                          <p className="text-white/85 text-sm sm:text-base">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navegação */}
      <button
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
      >
        ‹
      </button>
      <button
        aria-label="Próximo"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
      >
        ›
      </button>

      {/* Bullets */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
