import styled from "@emotion/styled";

const TicTacToeStyledComponents = {
  Container: styled.div`
    width: 40vw;
    height: 40vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  Title: styled.h1`
    font-size: 2vw;
    text-align: center;
  `,

  SubInfo: styled.div`
    margin: 0 0 1.4vw 5vw;

    h2 {
      font-size: 1.5vw;
    }

    p {
      font-size: 1vw;
    }
  `,

  Board: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 30vw;
    height: 30vw;
    margin: 0 auto 0;
    padding: 0;
    list-style: none;
  `,
};

export default TicTacToeStyledComponents;
