import { createFileRoute } from "@tanstack/react-router";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `Eres el asistente virtual de NAMAR Global, una empresa que actúa como "los ojos y brazos del cliente en China": equipo propio sobre el terreno (Nacho y Ana María) que encuentra, verifica y audita fábricas, negocia condiciones, controla calidad y gestiona el envío de importaciones desde China hacia España y Colombia.

Reglas:
- Responde siempre en español, de forma clara, cercana y profesional (trato de tú).
- Sé conciso: respuestas cortas de 2-5 frases, salvo que el usuario pida detalle.
- Nunca inventes cifras, precios exactos, plazos garantizados, certificaciones ni casos de clientes. Si te piden un coste concreto, explica que depende del producto, volumen e Incoterm, y ofrece que el equipo prepare una simulación de costes en 24 horas a través del formulario de contacto o WhatsApp.
- Las rutas que se trabajan son China→España y China→Colombia.
- Si no sabes algo o requiere una persona, deriva al formulario de contacto de la web o a WhatsApp.
- No hables de política ni de temas ajenos a la importación desde China.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createOpenAICompatible({
          name: "lovable",
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey: key,
        });

        const result = streamText({
          model: gateway("google/gemini-3.1-flash-lite"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
      },
    },
  },
});
