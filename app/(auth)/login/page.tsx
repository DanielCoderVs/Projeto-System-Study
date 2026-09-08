"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

function StudyFlowMark() {
  return (
    <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V9m5 10V5m5 14v-7m5 7V3" />
        <path d="m3 14 5-4 5 3 7-8" />
      </svg>
    </span>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setError("E-mail ou senha incorretos. Tente novamente.");
        return;
      }
      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError("Não foi possível entrar agora. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 text-slate-900 sm:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,.22)] lg:grid-cols-[1.08fr_.92fr]">
        <section className="relative hidden overflow-hidden bg-blue-700 p-12 text-white lg:flex lg:flex-col">
          <div className="absolute -right-24 -top-28 size-80 rounded-full border-[48px] border-white/10" />
          <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-blue-500/40 blur-2xl" />
          <div className="relative flex items-center gap-3"><StudyFlowMark /><span className="text-xl font-bold tracking-tight">StudyFlow</span></div>
          <div className="relative my-auto max-w-md">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.18em] text-blue-200">Seu foco, seu ritmo</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight">Estude com clareza.<br />Evolua todos os dias.</h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">Organize sua rotina, acompanhe seu progresso e transforme constância em aprovação.</p>
          </div>
          <div className="relative flex items-center gap-3 text-sm text-blue-100"><span className="size-2 rounded-full bg-blue-200" /> Feito para quem leva seus estudos a sério</div>
        </section>

        <section className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16">
          <div className="mb-10 flex items-center gap-3 lg:hidden"><StudyFlowMark /><span className="text-xl font-bold tracking-tight">StudyFlow</span></div>
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-blue-700">Bem-vindo de volta</p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Entre na sua conta</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">Continue de onde parou e mantenha seu ritmo.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">E-mail</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@email.com" autoComplete="email" required className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Senha</span>
                <span className="relative block">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Sua senha" autoComplete="current-password" required className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-14 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
                  <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-blue-700 hover:text-blue-900">{showPassword ? "Ocultar" : "Mostrar"}</button>
                </span>
              </label>
              <div className="flex justify-end"><button type="button" className="text-sm font-semibold text-blue-700 hover:text-blue-900">Esqueci minha senha</button></div>
              {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
              <button type="submit" disabled={loading} className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-70">{loading ? "Entrando..." : "Entrar"}</button>
            </form>
            <p className="mt-8 text-center text-sm text-slate-600">Ainda não tem uma conta? <Link href="/cadastro" className="font-semibold text-blue-700 hover:text-blue-900">Criar conta grátis</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}
