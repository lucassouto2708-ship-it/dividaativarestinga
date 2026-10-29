-- Rode no Supabase: SQL Editor > New query > colar tudo > Run
create table if not exists processos (
  id uuid primary key default gen_random_uuid(),
  municipio text not null,
  data_inicio date not null,
  observacao text,
  criado_por text default (auth.jwt() ->> 'email'),
  created_at timestamptz not null default now()
);

create table if not exists marcacoes (
  id bigint generated always as identity primary key,
  processo_id uuid not null references processos(id) on delete cascade,
  etapa int not null check (etapa between 1 and 14), -- 14 = processo concluído
  data date not null,                                 -- dia em que a etapa começou
  observacao text,
  usuario text default (auth.jwt() ->> 'email'),
  registrado_em timestamptz not null default now()    -- quando a marcação foi feita
);
create index if not exists marcacoes_processo_idx on marcacoes(processo_id);

alter table processos enable row level security;
alter table marcacoes enable row level security;

-- Apenas usuários logados leem e gravam (operador e gestor)
create policy "ler processos"   on processos for select to authenticated using (true);
create policy "criar processos" on processos for insert to authenticated with check (true);
create policy "editar processos" on processos for update to authenticated using (true);
create policy "apagar processos" on processos for delete to authenticated using (true);
create policy "ler marcacoes"   on marcacoes for select to authenticated using (true);
create policy "criar marcacoes" on marcacoes for insert to authenticated with check (true);
create policy "apagar marcacoes" on marcacoes for delete to authenticated using (true);
