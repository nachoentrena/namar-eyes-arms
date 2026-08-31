import { useCallback, useEffect, useRef, useState } from "react";

export type ServiceItem = {
  n: string;
  title: string;
  text: string;
};

function usePerView() {
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(2);
      else if (w < 1024) setPerView(3);
      else setPerView(4);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return perView;
}

export function ServicesCarousel({ items }: { items: ServiceItem[] }) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const pages = Math.max(1, items.length - perView + 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, pages - 1));
  }, [pages]);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % pages) + pages) % pages);
      setTick((t) => t + 1);
    },
    [pages],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % pages);
    }, 1000);
    return () => window.clearInterval(id);
  }, [paused, pages, tick]);

  return (
    <div
      className="relative mx-auto max-w-7xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden px-1 py-2">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {items.map((service) => (
            <div
              key={service.n}
              className="shrink-0 px-2"
              style={{ width: `${100 / perView}%` }}
            >
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-elevated">
                <span className="mb-5 block text-sm font-bold text-gold">{service.n}</span>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{service.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Servicio anterior"
        onClick={() => go(index - 1)}
        className="absolute -left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-navy shadow-panel transition-colors hover:bg-navy hover:text-navy-foreground lg:-left-6"
      >
        &#8249;
      </button>
      <button
        type="button"
        aria-label="Servicio siguiente"
        onClick={() => go(index + 1)}
        className="absolute -right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-navy shadow-panel transition-colors hover:bg-navy hover:text-navy-foreground lg:-right-6"
      >
        &#8250;
      </button>

      <div className="mt-10 flex items-center justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a la vista ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-slate"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
