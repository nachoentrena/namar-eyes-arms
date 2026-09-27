CREATE SEQUENCE public.diagnosticos_code_seq;

CREATE TABLE public.diagnosticos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  pais TEXT,
  ciudad TEXT,
  empresa TEXT,
  producto TEXT NOT NULL,
  categoria TEXT,
  etapa TEXT,
  presupuesto TEXT,
  respuestas JSONB NOT NULL DEFAULT '{}'::jsonb,
  puntuacion INTEGER NOT NULL DEFAULT 0,
  clasificacion TEXT NOT NULL DEFAULT 'Exploratorio',
  alerta TEXT,
  banderas JSONB NOT NULL DEFAULT '[]'::jsonb,
  paquete_sugerido TEXT,
  archivos JSONB NOT NULL DEFAULT '[]'::jsonb,
  estado TEXT NOT NULL DEFAULT 'Nuevo',
  notas_internas TEXT
);

GRANT INSERT ON public.diagnosticos TO anon;
GRANT ALL ON public.diagnosticos TO service_role;

ALTER TABLE public.diagnosticos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitantes pueden enviar diagnosticos"
  ON public.diagnosticos
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon puede subir archivos de diagnostico"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'diagnosticos-archivos');