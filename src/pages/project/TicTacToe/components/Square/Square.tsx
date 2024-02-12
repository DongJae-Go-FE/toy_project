import { useState } from "react";
import SquareStyledComponents from "./styled";

const { StyledSquare } = SquareStyledComponents;

export type ValueType = number | "o" | "x" | null;

const Square = ({
  value,
  players,
  counter,
  playerChange,
}: {
  value: ValueType;
  players: "x" | "o";
  counter: boolean;
  playerChange: (value: boolean) => void;
}) => {
  const [valueChange, setValueChange] = useState(value);
  const chagePlayer = (play: boolean) => {
    playerChange(play);
  };

  return (
    <StyledSquare>
      <button
        type="button"
        onClick={() => {
          setValueChange(players);
          chagePlayer(!counter);
        }}
      >
        {valueChange}
      </button>
    </StyledSquare>
  );
};

export default Square;
