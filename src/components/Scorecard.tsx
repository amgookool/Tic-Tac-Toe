import React, { useState } from "react";
import { Player } from "../containers/Game.types";
import { RiEditCircleFill, RiCheckboxCircleFill } from "react-icons/ri";

const Scorecard = (player: Player) => {
  const PlayerColor =
    player.symbol === "X" ? "text-red-500" : "text-orange-500";

  const [name, setName] = useState(player.name);
  const [showInput, setShowInput] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex items-center rounded-full border border-slate-500 bg-slate-900">
      {/* Symbol for the Player */}
      <span className=" opacity-80 px-4 py-2 rounded-full border-slate-500 border">
        <h2 className={`px-1 text-6xl font-semibold ${PlayerColor}`}>
          {player.symbol}
        </h2>
      </span>

      <div className="flex flex-row">
        {/* heck if user want to enter name */}
        {showInput ? (
          <>
            {/* Show the input field for entering name */}
            <input
              className="mx-2 px-1 text-lg"
              placeholder="Enter Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {/* check button for setting the name */}
            <button
              title={showInput ? "Save Name" : "Edit Name"}
              className="self-center"
              onClick={toggleInput}
            >
              <span className="text-white text-4xl text-center hover:text-blue-400">
                <RiCheckboxCircleFill />
              </span>
            </button>
          </>
        ) : (
          <>
            {/* Displaying the user name */}
            <span className="px-10 mx-2  text-white text-4xl">{name}</span>
            {/* Button to edit the user name */}
            <button
              title={showInput ? "Save Name" : "Edit Name"}
              className="self-center mx-2"
              onClick={toggleInput}
            >
              <span className="text-white text-5xl text-center hover:text-blue-400">
                <RiEditCircleFill />
              </span>
            </button>
          </>
        )}
      </div>

      <span
        className={`opacity-80 px-4 py-2 ml-1 rounded-full border-slate-500 border ${PlayerColor}`}
      >
        <h2 className={`px-2 text-6xl font-semibold}`}>{player.score}</h2>
      </span>
    </div>

    // <span className="flex flex-row container items-center shadow-2xl bg-slate-900 opacity-95 rounded-full m-2">
    //     <span className="container px-4 py-2 rounded-2xl border-r-2 border-slate-700 ">
    //       <p className={`text-6xl pb-2 font-bold bg-green-300 ${PlayerColor}`}>
    //         {player.symbol}
    //       </p>
    //     </span>
    //   <div className="w-fit flex flex-row">

    //     <div className="container flex flex-rows w-full rounded-2xl bg-red-500 items-center">
    //       {showInput ? (
    //         <input
    //           className=""
    //           placeholder="Enter Name"
    //           type="text"
    //           value={name}
    //           onChange={handleNameChange}
    //         />
    //       ) : (
    //         <span className="container flex-auto px-8 min-w-fit font-extrabold text-lg text-white content-start bg-green-500">
    //           {name}
    //         </span>
    //       )}
    //       <button
    //         onClick={toggleInput}
    //         className="container flex-auto px-2 font-extrabold text-lg text-white bg-purple-500"
    //       >
    //         CN
    //       </button>
    //     </div>
    //   </div>
    //   <div className=" container px-4 py-2 text-white">
    //     <h2 className="text-xl">{player.score}</h2>
    //   </div>
    // </span>
  );
};

export default Scorecard;
