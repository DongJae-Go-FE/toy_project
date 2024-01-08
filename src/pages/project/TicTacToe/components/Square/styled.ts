import styled from "@emotion/styled";

const SquareStyledComponents = {
  StyledSquare: styled.li`
    width: calc(33% - 8px);
    height: calc(33% - 8px);

    button {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 1px solid #000;
      font-size: 5vw;
      cursor: pointer;
    }
  `,
};

export default SquareStyledComponents;
