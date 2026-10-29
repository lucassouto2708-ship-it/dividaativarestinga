# Acompanhamento — Dívida Ativa

Painel estático (GitHub Pages) + Supabase (banco e login).

## Arquivos
- `index.html` — a plataforma
- `config.js` — chaves do Supabase e prazos de cada etapa (edite aqui para mudar dias)
- `schema.sql` — cria as tabelas no Supabase
- `FLUXOGRAMA_DIAS_DA_estimado.xlsx` — planilha com as etapas 10–13 estimadas

## Como publicar
1. **Supabase**: crie um projeto → SQL Editor → cole o `schema.sql` → Run.
2. **Usuários**: Authentication → Users → *Add user* (você e o gestor).
   Em Authentication → Providers → Email, desligue *Allow new users to sign up*.
3. **Chaves**: Project Settings → API → copie *Project URL* e *anon public key* para o `config.js`.
4. **GitHub**: crie um repositório, suba os arquivos, Settings → Pages → Branch `main` / root.
   O link fica `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Sem preencher o `config.js`, roda em modo demonstração (dados só no navegador).

## Como funciona
- Cada município é um **processo** com data de início (etapa 1 começa nela).
- “Marcar etapa em andamento” registra a etapa, o dia em que ela começou e quem/quando registrou.
- **Status** da etapa atual: *No prazo*, *Atenção* (faltam ≤ 2 dias) ou *Atrasado* (passou do prazo da etapa).
- **Desvio**: diferença entre o término previsto (com o ritmo real) e o término planejado.
- Cada etapa concluída mostra dias reais x previstos. Marcação errada → “desfazer”.
