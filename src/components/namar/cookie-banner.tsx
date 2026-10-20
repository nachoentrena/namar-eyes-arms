import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "namar-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // Sin acceso a localStorage: no mostramos el banner.
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignorar errores de almacenamiento.
    }
    setVisible(false);
    // Si se rechaza después de haber cargado el chat de terceros, recargamos para retirarlo.
    if (value === "rejected" && typeof window !== "undefined" && "chatbase" in window) {
      window.location.reload();
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-20 z-[60] border border-border bg-background p-4 shadow-panel sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-5"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Utilizamos almacenamiento técnico necesario y, con su consentimiento, un chat de asistencia
        de terceros. Puede aceptar o rechazar. Más información en nuestra{" "}
        <Link to="/politica-cookies" className="font-semibold text-navy underline">
          política de cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-navy transition-colors hover:bg-sand"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
