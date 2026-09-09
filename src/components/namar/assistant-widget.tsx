import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot, SendHorizonal, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

const GREETING =
  "¡Hola! Soy el asistente virtual de Namar Global. ¿En qué te puedo ayudar hoy con tus importaciones desde China?";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    id: "namar-assistant",
    transport,
    messages: [
      {
        id: "greeting",
        role: "assistant",
        parts: [{ type: "text", text: GREETING }],
      },
    ],
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    void sendMessage({ text });
  };

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed bottom-[8.5rem] right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-navy/15 bg-card shadow-elevated transition-all duration-300 sm:bottom-24 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        role="dialog"
        aria-label="Asistente Virtual NAMAR"
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-navy px-4 py-3 text-navy-foreground">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-gold text-gold-foreground">
            <Bot className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Asistente Virtual NAMAR</p>
            <p className="flex items-center gap-1.5 text-xs text-navy-foreground/70">
              <span className="inline-block size-1.5 rounded-full bg-gold" />
              IA en vivo
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar asistente"
            className="rounded-full p-1.5 transition-colors hover:bg-navy-foreground/10"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto bg-sand px-4 py-4 sm:h-96">
          {messages.map((m) => {
            const text = m.parts
              .map((p) => (p.type === "text" ? p.text : ""))
              .join("");
            if (!text && m.role === "assistant") return null;
            const isUser = m.role === "user";
            return (
              <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    isUser
                      ? "rounded-br-sm bg-navy text-navy-foreground"
                      : "rounded-bl-sm text-foreground"
                  }`}
                >
                  {isUser ? (
                    text
                  ) : (
                    <div className="prose prose-sm prose-neutral max-w-none [&_p]:my-1 [&_ul]:my-1">
                      <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {busy && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm px-3.5 py-3">
                <span className="size-1.5 animate-bounce rounded-full bg-slate [animation-delay:0ms]" />
                <span className="size-1.5 animate-bounce rounded-full bg-slate [animation-delay:150ms]" />
                <span className="size-1.5 animate-bounce rounded-full bg-slate [animation-delay:300ms]" />
              </div>
            </div>
          )}
          {error && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
              Ocurrió un error al enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.
            </p>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border bg-card px-3 py-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta…"
            aria-label="Escribe tu pregunta"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Enviar mensaje"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground transition-opacity disabled:opacity-40"
          >
            <SendHorizonal className="size-4" />
          </button>
        </form>
      </div>

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente virtual" : "Abrir asistente virtual"}
        className="fixed bottom-[4.5rem] right-4 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-navy-foreground shadow-lg shadow-navy/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gold/40 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="size-5" /> : <Bot className="size-5" />}
        <span className="rounded-full bg-gold px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold-foreground">
          IA
        </span>
      </button>
    </>
  );
}
