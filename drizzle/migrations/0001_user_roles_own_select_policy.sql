-- Cada usuario autenticado solo puede ver sus propios roles
create policy "Usuarios ven sus propios roles"
on public.user_roles
for select
to authenticated
using (user_id = auth.uid());