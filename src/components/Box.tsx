import { MouseEvent } from "react";

type BoxProps = {
  value: string | null;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Box = ({ value, onClick }: BoxProps) => {
  const playerColorStyle = value === "X" ? "text-red-500" : "text-orange-500";
  return (
    <button
      className={`container w-24 h-24 m-3 rounded-xl border-collapse shadow-2xl bg-slate-900 ${playerColorStyle}`}
      title={`Box-${value}`}
      onClick={onClick}
    >
      <span className="h-full w-full text-7xl justify-self-center">
        {value}
      </span>
    </button>
  );
};

export default Box;
