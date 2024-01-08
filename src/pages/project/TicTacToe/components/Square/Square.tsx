import { useState } from "react";
import SquareStyledComponents from "./styled";

const { StyledSquare } = SquareStyledComponents;

export type ValueType = number | "O" | "X" | null;

const Square = ({ value }: { value: ValueType }) => {
  const [squareValue, setSquareValue] = useState<ValueType>(value);
  return (
    <StyledSquare>
      <button
        type="button"
        onClick={() => {
          console.log(value);
        }}
      >
        {squareValue}
      </button>
    </StyledSquare>
  );
};

export default Square;
