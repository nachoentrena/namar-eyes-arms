import { Link } from "@tanstack/react-router";

import { formatGuiaDate, type Guia } from "@/lib/guias";

export function GuiaCard({ guia }: { guia: Guia }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
      <img
        src={guia.image}
        alt={guia.imageAlt}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={guia.date} className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-deep">
          {formatGuiaDate(guia.date)}
        </time>
        <h3 className="mt-2 font-serif text-xl leading-snug text-navy">{guia.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{guia.summary}</p>
        <Link
          to="/guias/$slug"
          params={{ slug: guia.slug }}
          className="mt-5 inline-flex font-semibold text-navy underline decoration-gold underline-offset-[6px] hover:text-gold-deep"
        >
          Leer guía →
        </Link>
      </div>
    </article>
  );
}
