-- 1. Infraestructura de roles para que solo los administradores lean los diagnósticos
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- 2. Solo los administradores pueden leer diagnósticos
create policy "Administradores pueden leer diagnosticos"
on public.diagnosticos
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- 3. Inserción anónima con validación: obligatorios, formato de email,
--    longitudes, país permitido y columnas internas fijadas por el sistema
drop policy "Visitantes pueden enviar diagnosticos" on public.diagnosticos;
create policy "Visitantes pueden enviar diagnosticos"
on public.diagnosticos
for insert
to anon
with check (
  length(btrim(nombre)) between 1 and 200
  and length(email) <= 200
  and email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  and pais in ('España', 'Colombia', 'Otro país de la UE', 'Otro país de Latinoamérica', 'Otro')
  and length(btrim(producto)) between 1 and 200
  and (whatsapp is null or length(whatsapp) <= 200)
  and (ciudad is null or length(ciudad) <= 200)
  and (empresa is null or length(empresa) <= 200)
  and (categoria is null or length(categoria) <= 200)
  and estado = 'Nuevo'
  and puntuacion = 0
  and clasificacion = 'Exploratorio'
  and alerta is null
  and banderas = '[]'::jsonb
  and archivos = '[]'::jsonb
  and paquete_sugerido is null
  and notas_internas is null
);

-- 4. Función para validar que la carpeta de subida corresponde a un diagnóstico real
create or replace function public.diagnostico_codigo_existe(_codigo text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.diagnosticos where codigo = _codigo)
$$;

-- 5. Subidas anónimas: solo dentro de la carpeta de su diagnóstico,
--    solo PDF/JPG/PNG/XLSX/DOCX, sin sobrescribir (no hay políticas UPDATE/DELETE)
drop policy "Anon puede subir archivos de diagnostico" on storage.objects;
create policy "Anon puede subir archivos de diagnostico"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'diagnosticos-archivos'
  and public.diagnostico_codigo_existe((storage.foldername(name))[1])
  and lower(name) ~ '\.(pdf|jpe?g|png|xlsx|docx)$'
);

-- 6. Solo los administradores pueden ver/descargar los archivos
create policy "Administradores pueden ver archivos de diagnostico"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'diagnosticos-archivos'
  and public.has_role(auth.uid(), 'admin')
);