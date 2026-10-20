import { Check } from "lucide-react";

export type ServiceGroup = {
  title: string;
  items: Array<{ title: string; text: string }>;
};

export function ServicesBlocks({ groups }: { groups: ServiceGroup[] }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 lg:gap-6">
      {groups.map((group, gi) => (
        <article
          key={group.title}
          className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-panel sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="grid size-8 shrink-0 place-items-center bg-navy text-xs font-bold text-navy-foreground">
              {gi + 1}
            </span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy sm:text-base">
              {group.title}
            </h3>
          </div>
          <ul className="space-y-5">
            {group.items.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <Check className="mt-1 size-4 shrink-0 text-gold" strokeWidth={3} />
                <div>
                  <p className="text-sm font-bold text-foreground sm:text-base">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
