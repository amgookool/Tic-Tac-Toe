import { Player } from "../containers/Game.types";

const Scorecard = (player: Player) => {
  return (
    <span className="flex flex-row container items-center">
      <div className="w-fit flex ">
        <span className="container flex-row px-4 py-2 rounded-md bg-red-600">
          <h2 className="text-xl">{player.symbol}</h2>
        </span>
        <span className="container flex-row px-4 py-2 rounded-md self-center bg-blue-600">
          <h2 className=" text-xl">{player.name}</h2>
        </span>
      </div>
      <div className=" container px-4 py-2 bg-green-600">
        <h2 className="text-xl">{player.score}</h2>
      </div>
    </span>
  );
};

export default Scorecard;
