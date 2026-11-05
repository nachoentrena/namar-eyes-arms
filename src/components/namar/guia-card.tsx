import { Link } from "@tanstack/react-router";
import type { Guia } from "@/lib/guias";

export function GuiaCard({ guia }: { guia: Guia }) {
  return (
    <Link to="/guias/$slug" params={{ slug: guia.slug }} className="group flex h-full flex-col text-foreground">
      <img src={guia.image} alt={guia.imageAlt} loading="lazy" width={1366} height={768} className="aspect-video w-full rounded-lg object-contain" />
      <h3 className="mt-5 font-sans text-lg font-semibold leading-snug text-navy group-hover:text-gold-deep">{guia.title}</h3>
      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">{guia.summary}</p>
      <span className="mt-4 font-semibold text-gold-deep group-hover:underline">Leer más »</span>
    </Link>
  );
}
