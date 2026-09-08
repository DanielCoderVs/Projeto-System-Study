"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const links = [["Painel","/dashboard"],["Rotinas","/rotinas"],["Caderno de erros","/caderno-de-erros"],["Calendário","/calendario"],["Conquistas","/conquistas"]];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const router = useRouter();
  async function logout() { await createClient().auth.signOut(); router.replace("/login"); router.refresh(); }
  return <main className="min-h-screen bg-slate-50 text-slate-900"><header className="sticky top-0 z-20 h-16 border-b border-slate-200 bg-white/95 px-5 backdrop-blur"><div className="mx-auto flex h-full max-w-7xl items-center justify-between"><Link href="/dashboard" className="flex items-center gap-2 font-bold"><span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white">↗</span>StudyFlow</Link><nav className="hidden items-center gap-1 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className={`rounded-lg px-3 py-2 text-sm font-semibold ${pathname === href ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"}`}>{label}</Link>)}</nav><button onClick={logout} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">Sair</button></div></header><div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">{children}</div><nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-slate-200 bg-white px-2 py-2 md:hidden">{links.slice(0,4).map(([label,href])=><Link key={href} href={href} className={`rounded-lg px-2 py-1 text-xs font-semibold ${pathname===href?"text-blue-700":"text-slate-500"}`}>{label}</Link>)}</nav></main>;
}
