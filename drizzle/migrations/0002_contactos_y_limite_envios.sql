CREATE TABLE public.contactos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  nombre text NOT NULL,
  email text NOT NULL,
  empresa text,
  whatsapp text,
  pais_destino text,
  producto text,
  cantidad_aproximada text,
  mensaje text,
  pagina text,
  datos jsonb NOT NULL DEFAULT '{}'::jsonb
);
GRANT SELECT ON public.contactos TO authenticated;
GRANT ALL ON public.contactos TO service_role;
ALTER TABLE public.contactos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Administradores pueden leer contactos" ON public.contactos FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.envios_formulario (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  ip text NOT NULL,
  formulario text NOT NULL
);
GRANT ALL ON public.envios_formulario TO service_role;
ALTER TABLE public.envios_formulario ENABLE ROW LEVEL SECURITY;
CREATE INDEX envios_formulario_ip_idx ON public.envios_formulario (ip, created_at);