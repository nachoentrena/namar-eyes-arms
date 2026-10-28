import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/archivo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const p = url.searchParams.get("p") ?? "";
        const e = url.searchParams.get("e") ?? "";
        const s = url.searchParams.get("s") ?? "";
        const { verificarEnlace } = await import("@/lib/archivo-link.server");
        if (!(await verificarEnlace(p, e, s))) return new Response("Enlace no válido o caducado", { status: 403 });
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("diagnosticos-archivos").download(p);
        if (error || !data) return new Response("Archivo no encontrado", { status: 404 });
        const nombre = (p.split("/").pop() ?? "archivo").replace(/^\d+-/, "");
        return new Response(data, {
          headers: {
            "Content-Type": data.type || "application/octet-stream",
            "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(nombre)}`,
            "Cache-Control": "private, no-store",
          },
        });
      },
    },
  },
});
