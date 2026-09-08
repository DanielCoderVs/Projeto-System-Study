<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StudyFlow — README</title>
<style>
  :root {
    --primary: #2563EB;
    --bg: #F8FAFC;
    --surface: #FFFFFF;
    --text: #0F172A;
    --accent: #3B82F6;
    --border: #E2E8F0;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
  }
  .wrap {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px 96px;
  }
  h1 {
    font-size: 2.1rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 4px;
  }
  h2 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-top: 44px;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
    color: var(--text);
  }
  h3 { font-size: 1.05rem; font-weight: 700; margin-top: 20px; }
  p { margin: 10px 0; }
  ul, ol { padding-left: 22px; }
  li { margin: 6px 0; }
  a { color: var(--primary); text-decoration: none; }
  a:hover { text-decoration: underline; }
  code {
    background: #EEF2FF;
    color: #1E3A8A;
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 0.88em;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  }
  pre {
    background: #0F172A;
    color: #E2E8F0;
    padding: 18px 20px;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.85rem;
    line-height: 1.5;
  }
  pre code {
    background: none;
    color: inherit;
    padding: 0;
  }
  blockquote {
    margin: 16px 0;
    padding: 12px 18px;
    background: #EFF6FF;
    border-left: 4px solid var(--accent);
    border-radius: 6px;
    color: #1E3A8A;
    font-weight: 600;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
  }
  th, td {
    text-align: left;
    padding: 8px 12px;
    border: 1px solid var(--border);
  }
  th { background: #EEF2FF; }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 36px 40px;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  }
  hr { border: none; border-top: 1px solid var(--border); margin: 32px 0; }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0F172A;
      --surface: #1E293B;
      --text: #E2E8F0;
      --border: #334155;
    }
    body { background: var(--bg); color: var(--text); }
    code { background: #1E3A8A33; color: #93C5FD; }
    blockquote { background: #1E3A8A22; color: #93C5FD; }
    th { background: #1E3A8A33; }
  }
</style>
</head>
<body>
<div class="wrap">
  <div class="card">
<h1>StudyFlow</h1>
<blockquote>
<p>🚧 <strong>Status: projeto em prototipagem.</strong> Escopo técnico e telas ainda em definição — este README acompanha a evolução do produto.</p>
</blockquote>
<p>Sistema web de organização de estudos para concurseiros e estudantes autodidatas. Centraliza rotina de estudos, cronômetro inteligente, controle de questões, revisão espaçada, metas e estatísticas em um único lugar — pensado para reduzir fricção e manter o foco na rotina diária.</p>
<h2>🎯 Visão do produto</h2>
<p>O StudyFlow não é só um app de cronograma. A proposta é ser um <strong>sistema de evolução do estudante</strong>: um ciclo contínuo que conecta planejamento, execução, correção e análise de desempenho — mostrando ao aluno não só <em>quanto</em> ele estudou, mas <em>se está evoluindo</em> e <em>onde deve concentrar esforço</em>.</p>
<pre><code>🗓️ PLANEJE → 📚 ESTUDE → ✅ RESOLVA → ❌ CORRIJA
   → 📊 ANALISE → 📈 EVOLUA → 🤖 RECOMENDAÇÕES → 🗓️ REPLANEJE
</code></pre>
<p>Esse ciclo é o produto — as funcionalidades abaixo são as peças que o fazem funcionar. O caderno de erros, por exemplo, não é só um bloco de anotações: é a base para o sistema identificar os pontos fracos do aluno (ex: "Matemática é sua matéria com menor desempenho, com 14 erros em porcentagem").</p>
<p><strong>Persona inicial:</strong> concurseiro. O produto pode expandir depois para ENEM/vestibular e universitários, mas o foco inicial evita virar "mais um app de estudos genérico".</p>
<h2>✨ Funcionalidades</h2>
<ul>
<li><strong>Rotinas personalizadas</strong> — blocos por matéria, dias da semana, horários, ordem por drag-and-drop, duplicação e edição</li>
<li><strong>Tipos de dia</strong> — dia normal (teoria + questões), dia de simulado e dia de revisão, dentro da mesma rotina</li>
<li><strong>Cronômetro inteligente</strong> — divide automaticamente teoria/questões, inicia pausa e avança para o próximo bloco sozinho, com aviso sonoro e mensagens motivacionais</li>
<li><strong>Modo Foco</strong> — interface minimalista sem distrações durante o estudo</li>
<li><strong>Registro de questões</strong> — acertos, erros, % de aproveitamento, dificuldade e observações, alimentando os gráficos automaticamente</li>
<li><strong>Caderno de erros</strong> — matéria, assunto, comentário, questão relacionada e dificuldade; base para o sistema apontar as matérias/assuntos de menor desempenho</li>
<li><strong>Comparativo de evolução</strong> — compara esta semana × semana passada e este mês × mês anterior (horas, questões, % de acerto), mostrando ganho ou queda de desempenho em pontos percentuais</li>
<li><strong>Revisão espaçada automática</strong> — cria revisões em 24h, 7 dias e 30 dias, com lembretes</li>
<li><strong>Metas</strong> — horas e questões por dia/semana/mês, com barra de progresso em tempo real</li>
<li><strong>Calendário de estudos</strong> — código de cores (verde/amarelo/vermelho) por dia</li>
<li><strong>Dashboard</strong> — horas estudadas, aproveitamento, sequência de estudos, evolução semanal/mensal, matéria mais/menos estudada</li>
<li><strong>Ciclo de estudos</strong> — sequência fixa de matérias que avança automaticamente, independente do dia da semana</li>
<li><strong>Gamificação</strong> — XP, níveis, medalhas e conquistas por marcos (horas estudadas, questões resolvidas, dias consecutivos)</li>
<li><strong>Notificações</strong> — push e e-mail para lembretes de revisão, início de bloco e metas batidas</li>
</ul>
<h2>🧱 Stack</h2>
<ul>
<li><strong>Frontend:</strong> Next.js 14 (App Router) + Tailwind CSS</li>
<li><strong>Backend / Banco de dados / Auth:</strong> Supabase (PostgreSQL + Row Level Security)</li>
<li><strong>Deploy:</strong> EasyPanel (VPS)</li>
</ul>
<h2>🗂️ Estrutura de pastas</h2>
<pre><code>/app
  /(auth)/login
  /(auth)/cadastro
  /dashboard
  /rotinas
  /rotinas/[id]/editar
  /estudo/[blocoId]        # cronômetro / execução do bloco
  /modo-foco/[blocoId]
  /caderno-de-erros
  /calendario
  /metas
  /conquistas
  /configuracoes
/components                # Cronometro, BarraProgresso, CardBloco, etc.
/lib
  supabase.ts               # cliente Supabase
  notificacoes.ts           # lógica de push e e-mail
/types                      # tipos gerados a partir do schema Supabase
</code></pre>
<h2>🗄️ Banco de dados</h2>
<p>Principais tabelas (Supabase / PostgreSQL): <code>profiles</code>, <code>rotinas</code>, <code>rotina_dias</code>, <code>blocos</code>, <code>sessoes_estudo</code>, <code>registros_questoes</code>, <code>caderno_erros</code>, <code>revisoes</code>, <code>metas</code>, <code>ciclos_estudo</code>, <code>ciclo_materias</code>, <code>conquistas</code>, <code>usuario_conquistas</code>, <code>notificacoes</code>.</p>
<p>Todas as tabelas com <code>user_id</code> possuem <strong>Row Level Security</strong> habilitado — cada usuário só acessa seus próprios dados (<code>user_id = auth.uid()</code>). O schema completo em SQL está em <a href="./documentacao-sistema-estudos.md"><code>documentacao-sistema-estudos.md</code></a>.</p>
<h2>🎨 Design</h2>
<ul>
<li>Paleta azul e branco, moderna e limpa (compatível com shadcn/ui)</li>
<li>Primária <code>#2563EB</code> · Fundo <code>#F8FAFC</code> · Superfície <code>#FFFFFF</code> · Texto <code>#0F172A</code> · Destaque <code>#3B82F6</code></li>
<li>Tipografia sans-serif (Inter), cantos arredondados, sombras suaves, espaçamento generoso</li>
<li>Suporte total a modo claro e escuro</li>
<li>Totalmente responsivo (desktop, tablet, celular)</li>
</ul>
<h2>🚀 Rodando o projeto</h2>
<pre><code class="language-bash"># instalar dependências
npm install

# configurar variáveis de ambiente
cp .env.example .env.local
# preencher NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY

# rodar em desenvolvimento
npm run dev
</code></pre>
<h2>👥 Usuários</h2>
<p>Sistema multiusuário desde o início — cada conta tem seus dados isolados via autenticação Supabase (e-mail/senha) e RLS. Hoje de uso pessoal, com arquitetura já preparada para evoluir para um SaaS aberto a outros estudantes.</p>
<h2>📄 Documentação completa</h2>
<p>Requisitos funcionais detalhados, schema SQL completo, prompt de kickoff para Claude Code e prompt de design para o Google Stitch estão em <a href="./documentacao-sistema-estudos.md"><code>documentacao-sistema-estudos.md</code></a>.</p>
<h2>🗺️ Roadmap futuro</h2>
<p><strong>Curto prazo (evolução do MVP atual):</strong>
- Tela "Sua evolução" — comparativo visual semana x semana e mês x mês, com desempenho por matéria em código de cores
- Diagnóstico automático a partir do caderno de erros (ex: identificar a matéria/assunto com mais erros recorrentes)</p>
<p><strong>Médio prazo:</strong>
- Recomendações inteligentes com IA em cima dos dados reais do aluno (ex: "priorize Matemática e revise porcentagem antes de avançar") — não notificações genéricas, e sim análise do histórico de sessões, questões e erros
- API pública para integração externa (ex: quando o Google liberar API pública do NotebookLM/Gemini Notebook)</p>
<p><strong>Longo prazo:</strong>
- Abertura do sistema para múltiplos usuários externos (modelo SaaS)
- Modelo de negócio freemium: plano gratuito (rotina, cronograma limitado, calendário, evolução básica) + plano premium (caderno de erros ilimitado, estatísticas avançadas, comparativos, recomendações por IA, gamificação completa), com opção de plano anual</p>
<p><strong>Princípio para todas as fases:</strong> começar pequeno e executar muito bem o núcleo (planejamento + execução + erros + evolução) antes de expandir. Gamificação deve reforçar comportamentos úteis (estudar, revisar, corrigir erros) — não virar um jogo à parte do aprendizado.</p>
  </div>
</div>
</body>
</html>
