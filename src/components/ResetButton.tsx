import { MouseEvent } from "react";

type ResetProp = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ResetButton = ({ onClick }: ResetProp) => {
  return (
    <div className="container w-fit h-fit rounded-lg bg-slate-800 hover:bg-green-500 items-center">
      <button
        title={`Reset Button`}
        className="text-3xl w-80 h-12 text-center text-white"
        onClick={onClick}
      >
        <h1>Reset</h1>
      </button>
    </div>
  );
};

export default ResetButton;
