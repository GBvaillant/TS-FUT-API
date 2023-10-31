export enum TeamResults {
  V = 'Vitória',
  D = 'Derrota',
  E = 'Empate',
}

export interface Igames {
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variação_posição: number;
  ultimos_jogos: TeamResults[];
}
export interface Ifut {
  posicao: number;
  pontos: number;
  time: Iteam;
}

export interface Iteam {
  time_id: string;
  nome_popular: string;
  sigla: string;
  excudo: string;
}
