create extension if not exists pgcrypto;

create table if not exists public.routines (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 2 and 80),
  goal text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.study_blocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  routine_id uuid not null references public.routines(id) on delete cascade,
  subject text not null check (char_length(subject) between 2 and 80),
  topic text,
  theory_minutes integer not null default 30 check (theory_minutes between 1 and 480),
  question_minutes integer not null default 15 check (question_minutes between 0 and 480),
  break_minutes integer not null default 5 check (break_minutes between 0 and 120),
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  block_id uuid references public.study_blocks(id) on delete set null,
  subject text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  duration_minutes integer not null default 0 check (duration_minutes >= 0),
  status text not null default 'in_progress' check (status in ('in_progress','completed','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.error_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null check (char_length(subject) between 2 and 80),
  topic text,
  question text not null,
  explanation text not null,
  difficulty text not null default 'medium' check (difficulty in ('easy','medium','hard')),
  resolved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  study_session_id uuid not null references public.study_sessions(id) on delete cascade,
  subject text not null,
  due_at timestamptz not null,
  interval_days integer not null check (interval_days in (1,7,30)),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique(study_session_id, interval_days)
);

create table if not exists public.achievements (
  id text primary key,
  title text not null,
  description text not null,
  icon text not null,
  requirement_type text not null,
  requirement_value integer not null check (requirement_value > 0)
);

create table if not exists public.user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null references public.achievements(id) on delete cascade,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

insert into public.achievements (id, title, description, icon, requirement_type, requirement_value) values
  ('first_session','Primeiro passo','Conclua sua primeira sessão de estudo.','🚀','sessions',1),
  ('focus_10','Foco total','Conclua 10 sessões de estudo.','🎯','sessions',10),
  ('error_hunter','Caçador de erros','Registre 10 erros no caderno.','🔎','errors',10),
  ('consistency','Constância','Estude em 7 dias diferentes.','🔥','days',7)
on conflict (id) do update set title = excluded.title, description = excluded.description, icon = excluded.icon;

create or replace function public.create_session_reviews()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.status = 'completed' and (tg_op = 'INSERT' or old.status is distinct from 'completed') then
    insert into public.reviews (user_id, study_session_id, subject, due_at, interval_days)
    values
      (new.user_id, new.id, new.subject, new.completed_at + interval '1 day', 1),
      (new.user_id, new.id, new.subject, new.completed_at + interval '7 days', 7),
      (new.user_id, new.id, new.subject, new.completed_at + interval '30 days', 30)
    on conflict (study_session_id, interval_days) do nothing;
  end if;
  return new;
end; $$;

drop trigger if exists study_session_reviews on public.study_sessions;
create trigger study_session_reviews after insert or update of status on public.study_sessions
for each row execute function public.create_session_reviews();

create or replace function public.touch_error_note()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists touch_error_note on public.error_notes;
create trigger touch_error_note before update on public.error_notes for each row execute function public.touch_error_note();

create index if not exists study_blocks_routine_position_idx on public.study_blocks(routine_id, position);
create index if not exists study_sessions_user_started_idx on public.study_sessions(user_id, started_at desc);
create index if not exists error_notes_user_created_idx on public.error_notes(user_id, created_at desc);
create index if not exists reviews_user_due_idx on public.reviews(user_id, due_at) where completed_at is null;

alter table public.routines enable row level security;
alter table public.study_blocks enable row level security;
alter table public.study_sessions enable row level security;
alter table public.error_notes enable row level security;
alter table public.reviews enable row level security;
alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;

create policy "routines own data" on public.routines for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "blocks own data" on public.study_blocks for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "sessions own data" on public.study_sessions for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "errors own data" on public.error_notes for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "reviews own data" on public.reviews for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "read achievements" on public.achievements for select to authenticated using (true);
create policy "user achievements own data" on public.user_achievements for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.routines, public.study_blocks, public.study_sessions, public.error_notes, public.reviews, public.user_achievements to authenticated;
grant select on public.achievements to authenticated;
