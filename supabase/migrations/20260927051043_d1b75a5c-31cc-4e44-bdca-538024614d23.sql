CREATE OR REPLACE FUNCTION public.diagnostico_codigo()
RETURNS TEXT
LANGUAGE sql
SET search_path = public
AS $$
  SELECT 'NAM-' || to_char(now(), 'YYYY') || '-' || lpad(nextval('public.diagnosticos_code_seq')::text, 4, '0');
$$;