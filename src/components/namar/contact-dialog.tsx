import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Check, Copy, ExternalLink, Mail, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const EMAIL = "info@namar-global.com";
const MAILTO_HREF = "mailto:info@namar-global.com?subject=Consulta%20desde%20la%20web%20NAMAR%20Global";
const GMAIL_HREF =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@namar-global.com&su=Consulta%20desde%20la%20web%20NAMAR%20Global";

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path below
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

export function ContactDialog({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const handleCopy = async () => {
    const ok = await copyToClipboard(EMAIL);
    if (!ok) return;
    setCopied(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DialogPrimitive.Root>
      {children}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-navy/60 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none" />
        <DialogPrimitive.Content className="fixed inset-x-0 bottom-0 z-[61] max-h-[90dvh] overflow-y-auto rounded-t-[24px] border border-border bg-background p-6 text-navy shadow-panel data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 motion-reduce:animate-none sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[480px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[24px] sm:p-8 sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=open]:fade-in-0">
          <DialogPrimitive.Close asChild>
            <Button variant="ghost" size="icon" aria-label="Cerrar contacto" className="absolute right-3 top-3 rounded-full"><X /></Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Title className="pr-8 font-serif text-2xl">Hablemos</DialogPrimitive.Title>
          <DialogPrimitive.Description className="mt-3 text-base leading-relaxed text-slate-deep">
            Escríbenos por el canal que prefieras. Te respondemos en 24h laborables.
          </DialogPrimitive.Description>
          <div className="mt-6 grid gap-3">
            <a href="https://wa.me/34609643134?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20NAMAR%20Global%20sobre%20una%20importaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[16px] border border-input p-5 transition-colors hover:bg-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-7 shrink-0"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7c1.7 1 3.7 1.5 5.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4ZM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4a9.8 9.8 0 0 1-1.5-5.3C2 6.4 6.5 2 12 2s10 4.4 10 9.9-4.5 9.9-10 9.9Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.7.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z" /></svg>
              <span className="min-w-0"><span className="block font-semibold">WhatsApp</span><span className="block text-sm">+34 609 64 31 34</span></span>
            </a>
            <div className="rounded-[16px] border border-input p-5 transition-colors hover:bg-secondary">
              <a href={MAILTO_HREF} className="flex items-center gap-4">
                <Mail className="size-7 shrink-0" aria-hidden="true" />
                <span className="min-w-0"><span className="block font-semibold">Email</span><span className="block break-all text-sm">info@namar-global.com</span></span>
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 pl-11 text-sm">
                <button type="button" onClick={handleCopy} className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline">
                  {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
                  Copiar
                </button>
                <span aria-live="polite" className={copied ? "text-slate-deep" : "sr-only"}>
                  {copied ? "Email copiado" : ""}
                </span>
                <a href={GMAIL_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline">
                  Abrir en Gmail
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            ¿No se abre tu correo? Copia nuestro email o escríbenos por WhatsApp.
          </p>
          <DialogPrimitive.Close asChild>
            <a href="/diagnostico" className="mt-6 block text-sm leading-relaxed underline-offset-4 hover:underline">¿Prefieres una valoración completa? Haz el diagnóstico gratuito →</a>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
