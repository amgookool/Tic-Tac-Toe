import Scorecard from "./Scorecard";
import { Player } from "../containers/Game.types";

type scores = {
  xPlayer: Player;
  oPlayer: Player;
  tieScore: number;
};

const Scoreboard = (scoreboard: scores) => {
  return (
    <div className="flex items-center">
      <div className="flex-col items-center content-center justify-center">
        <Scorecard
          name={scoreboard.xPlayer.name}
          symbol={scoreboard.xPlayer.symbol}
          score={scoreboard.xPlayer.score}
        />
        {/* <Scorecard
          name={scoreboard.oPlayer.name}
          symbol={scoreboard.oPlayer.symbol}
          score={scoreboard.oPlayer.score}
        /> */}
      </div>
      {/* <span className="container bg-purple-700 h-full w-full text-center p-2">
        {scoreboard.tieScore}
      </span> */}
    </div>
  );
};

export default Scoreboard;
