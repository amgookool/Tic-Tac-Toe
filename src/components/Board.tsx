import { Box } from ".";

type BoardProps = {
  board: (string | null)[];
  onClick: (index: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 ">
      {board.map((value, index) => {
        return (
          <Box
            key={index}
            value={value}
            onClick={() => {
              value === null && onClick(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Board;
