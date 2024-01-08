import { useState } from "react";
import SquareStyledComponents from "./styled";

const { StyledSquare } = SquareStyledComponents;

export type ValueType = number | "O" | "X" | null;

const Square = ({ value }: { value: ValueType }) => {
  const [squareValue, setSquareValue] = useState<ValueType>(value);

  //여기서 부터

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
