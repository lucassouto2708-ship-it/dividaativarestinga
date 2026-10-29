// Preencha com os dados do seu projeto Supabase (Project Settings > API).
// Deixe vazio para rodar em MODO DEMONSTRAÇÃO (dados salvos só no seu navegador).
window.CONFIG = {
  SUPABASE_URL: "https://xswfyxoixlymjjbjrars.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzd2Z5eG9peGx5bWpqYmpyYXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNzM0NjUsImV4cCI6MjEwODg0OTQ2NX0.ll7zA1I_NzG7ddvuy09E4db-b55Pw901D1qzAWEAZi0",

  // Considerar prazos em dias úteis (seg–sex) em vez de dias corridos
  DIAS_UTEIS: false,
  // Quantos dias antes do prazo a etapa fica "Atenção"
  DIAS_ALERTA: 2,

  // Fluxo da Dívida Ativa — dias por etapa (10 a 13 são estimativas)
  ETAPAS: [
    { n: 1,  fase: "Fase Interna", dias: 20, nome: "Contato inicial, análise do CTM, decreto regulamentador e parametrização do software" },
    { n: 2,  fase: "1ª Etapa",     dias: 10, nome: "Apuração/atualização da dívida, relatórios e Termo de Confissão e Parcelamento" },
    { n: 3,  fase: "1ª Etapa",     dias: 20, nome: "Saneamento dos cadastros e cancelamento de processos em atraso" },
    { n: 4,  fase: "2ª Etapa",     dias: 1,  nome: "Gerar a totalidade das CDAs por exercício" },
    { n: 5,  fase: "2ª Etapa",     dias: 1,  nome: "Filtrar maiores x menores devedores" },
    { n: 6,  fase: "2ª Etapa",     dias: 3,  nome: "Geração de processos, textos e artes da carta de cobrança" },
    { n: 7,  fase: "Fase Externa", dias: 10, nome: "Montagem da campanha publicitária (rádio, Instagram...)" },
    { n: 8,  fase: "Fase Externa", dias: 3,  nome: "Impressão das cartas com código de barras pela gráfica" },
    { n: 9,  fase: "Fase Externa", dias: 30, nome: "Entrega das cartas pelo fiscal tributário (in loco)" },
    { n: 10, fase: "Fase Externa", dias: 30, nome: "Contato direto e diário com o contribuinte (chatbot)", estimado: true },
    { n: 11, fase: "Fase Externa", dias: 3,  nome: "Orientar responsável do setor sobre negociação via WhatsApp", estimado: true },
    { n: 12, fase: "Fase Externa", dias: 30, nome: "Relatórios diários de processos pagos e parcelados", estimado: true },
    { n: 13, fase: "Fase Externa", dias: 5,  nome: "Entrega do serviço com valores arrecadados e cadastros higienizados", estimado: true },
  ],
};
