import { createFileRoute, redirect } from "@tanstack/react-router";

// La política de privacidad vive en /politica-privacidad; se mantiene esta URL antigua como redirección permanente.
export const Route = createFileRoute("/privacidad")({
  beforeLoad: () => {
    throw redirect({ to: "/politica-privacidad", replace: true });
  },
});
