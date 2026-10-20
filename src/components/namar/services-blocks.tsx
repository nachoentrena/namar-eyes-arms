import { Check } from "lucide-react";

export type ServiceGroup = {
  title: string;
  items: Array<{ title: string; text: string }>;
};

/* Fases del manual de marca: azul / gris azulado / dorado */
const phaseStyles = [
  {
    block: "bg-navy text-navy-foreground",
    chip: "bg-gold text-gold-foreground",
    check: "text-gold",
    body: "text-on-navy-muted",
  },
  {
    block: "bg-slate-deep text-navy-foreground",
    chip: "bg-gold text-gold-foreground",
    check: "text-gold",
    body: "text-on-navy-muted",
  },
  {
    block: "bg-gold text-navy",
    chip: "bg-navy text-navy-foreground",
    check: "text-navy",
    body: "text-navy/75",
  },
] as const;

export function ServicesBlocks({ groups }: { groups: ServiceGroup[] }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 lg:gap-6">
      {groups.map((group, gi) => {
        const style = phaseStyles[gi % phaseStyles.length];
        return (
          <article
            key={group.title}
            className={`flex h-full flex-col rounded-[24px] p-5 sm:p-7 ${style.block}`}
          >
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${style.chip}`}
              >
                {gi + 1}
              </span>
              <h3 className="font-serif text-[19px] sm:text-[21px]">{group.title}</h3>
            </div>
            <ul className="space-y-5">
              {group.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Check className={`mt-1 size-4 shrink-0 ${style.check}`} strokeWidth={3} />
                  <div>
                    <p className="text-sm font-bold sm:text-base">{item.title}</p>
                    <p className={`mt-1 text-sm leading-[1.65] ${style.body}`}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
