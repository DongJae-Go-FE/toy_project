import { useState } from "react";

import TicTacToeStyledComponents from "./styled";
import Square from "./components/Square/Square";

const { Container, Title, SubInfo, Board } = TicTacToeStyledComponents;

const TicTacToe = () => {
  const [counter, setCounter] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);
  const [players, setPlayers] = useState<
    {
      player: "사람" | "인간";
      sign: "x" | "o";
    }[]
  >([
    {
      player: "사람",
      sign: "x",
    },
    {
      player: "인간",
      sign: "o",
    },
  ]);

  const changeValue = (value) => {};

  return (
    <Container>
      <Title>Tic!Tac!Toe!</Title>
      <div>
        <SubInfo>
          <h2>Player: {counter ? players[0].player : players[1].player}</h2>
          {winner && <p>Winner:</p>}
        </SubInfo>
        <Board>
          {[...Array(9)].map((_, i) => {
            return <Square changeValue={changeValue(value)} value={i + 1} key={i} />;
          })}
        </Board>
      </div>
    </Container>
  );
};

export default TicTacToe;
