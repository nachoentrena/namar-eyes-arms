export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <a
        href="#contacto"
        className="flex-1 bg-navy px-4 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-navy-foreground"
      >
        Cuéntanos tu proyecto
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-navy"
      >
        WhatsApp
      </a>
    </div>
  );
}
