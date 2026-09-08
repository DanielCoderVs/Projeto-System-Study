"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const navigation = [
  ["Painel", "/dashboard", "⌂"],
  ["Rotina / Cronograma", "/rotinas", "▤"],
  ["Caderno de erros", "/caderno-de-erros", "▱"],
  ["Calendário", "/calendario", "□"],
  ["Conquistas", "/conquistas", "✦"],
];

function Logo() {
  return <span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white"><svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round"><path d="M5 18V9m5 9V5m5 13v-7m5 7V3" /></svg></span>;
}

export default function DashboardClient({ name, email }: { name: string; email: string }) {
  const router = useRouter();
  async function signOut() {
    await createClient().auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 h-16 border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-7">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between">
          <div className="flex items-center gap-2.5"><Logo /><span className="text-lg font-bold tracking-tight">StudyFlow</span></div>
          <div className="flex items-center gap-3"><button aria-label="Notificações" className="grid size-9 place-items-center rounded-full text-slate-500 hover:bg-slate-100">♧</button><button onClick={signOut} className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 sm:block">Sair</button><span className="grid size-9 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{name.slice(0, 1).toUpperCase()}</span></div>
        </div>
      </header>
      <div className="mx-auto flex max-w-[1440px]">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white px-4 py-7 lg:block">
          <nav className="space-y-1">{navigation.map(([label, href, icon]) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${href === "/dashboard" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}><span className="w-4 text-center">{icon}</span>{label}</Link>)}</nav>
          <div className="mt-8 border-t border-slate-200 pt-5"><Link href="/configuracoes" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"><span>⚙</span>Configurações</Link></div>
        </aside>
        <section className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="mb-1 text-sm font-medium text-blue-700">SEU PAINEL</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Olá, {name}! <span aria-hidden="true">👋</span></h1><p className="mt-2 text-sm text-slate-500">Pronto para mais uma sessão produtiva?</p></div>
            <Link href="/rotinas" className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">+ Iniciar sessão</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Metric label="Horas estudadas" value="0h 00m" detail="Comece sua primeira sessão" accent="blue" />
            <Metric label="Sequência atual" value="0 dias" detail="Mantenha o ritmo" accent="orange" />
            <Metric label="Revisões pendentes" value="0" detail="Nenhuma revisão para hoje" accent="violet" />
            <Metric label="Meta semanal" value="0%" detail="0h de 10h planejadas" accent="emerald" />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_.85fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between"><div><h2 className="font-semibold">Evolução semanal</h2><p className="mt-1 text-sm text-slate-500">Seu tempo de estudo nos últimos 7 dias</p></div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Esta semana</span></div><div className="mt-8 flex h-44 items-end justify-between gap-3 border-b border-slate-100 px-2">{[22, 36, 18, 48, 30, 58, 12].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div style={{ height: `${height}%` }} className="w-full max-w-8 rounded-t-md bg-blue-100 transition hover:bg-blue-600" /><span className="text-xs text-slate-400">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][index]}</span></div>)}</div></div>
            <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-600/20"><p className="text-sm font-semibold text-blue-100">PRÓXIMO PASSO</p><h2 className="mt-3 text-xl font-bold">Crie sua primeira rotina de estudos</h2><p className="mt-2 text-sm leading-6 text-blue-100">Organize matérias, blocos e pausas para estudar com mais constância.</p><Link href="/rotinas" className="mt-6 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50">Criar rotina</Link></div>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="font-semibold">Plano de hoje</h2><p className="mt-1 text-sm text-slate-500">Sua rotina diária aparecerá aqui.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Sem atividades</span></div><div className="mt-5 grid place-items-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-9 text-center"><span className="mb-3 text-2xl">◷</span><p className="font-medium text-slate-700">Você ainda não possui blocos para hoje.</p><p className="mt-1 text-sm text-slate-500">Monte uma rotina e dê o primeiro passo.</p></div></div>
          <p className="mt-6 text-xs text-slate-400">Conectado como {email}</p>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value, detail, accent }: { label: string; value: string; detail: string; accent: "blue" | "orange" | "violet" | "emerald" }) {
  const colors = { blue: "bg-blue-100 text-blue-700", orange: "bg-orange-100 text-orange-700", violet: "bg-violet-100 text-violet-700", emerald: "bg-emerald-100 text-emerald-700" };
  return <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">{label}</p><span className={`grid size-8 place-items-center rounded-lg text-sm ${colors[accent]}`}>●</span></div><p className="mt-4 text-2xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></article>;
}
