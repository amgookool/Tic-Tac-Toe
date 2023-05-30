// The type of the board state is an array of strings or nulls
type BoardState = (string | null)[];

// The type of the scoreboard state is an object with three properties
type Player = {
  symbol: string;
  name: string;
  score: number;
};
type ScoreboardState = {
  xPlayer: Player;
  oPlayer: Player;
  tieScore: number;
};

export type { BoardState, ScoreboardState, Player };
