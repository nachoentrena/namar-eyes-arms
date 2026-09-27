CREATE OR REPLACE FUNCTION public.diagnostico_codigo()
RETURNS TEXT
LANGUAGE sql
AS $$
  SELECT 'NAM-' || to_char(now(), 'YYYY') || '-' || lpad(nextval('public.diagnosticos_code_seq')::text, 4, '0');
$$;

ALTER TABLE public.diagnosticos
  ALTER COLUMN codigo SET DEFAULT public.diagnostico_codigo();