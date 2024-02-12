import { useState } from "react";

import TicTacToeStyledComponents from "./styled";
import Square, { ValueType } from "./components/Square/Square";

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

  const data: { id: number | "o" | "x" }[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  const playerChange = (value:boolean) => {
    setCounter(value);
  };

  return (
    <Container>
      <Title>Tic!Tac!Toe!</Title>
      <div>
        <SubInfo>
          <h2>Player: {counter ? players[0].player : players[1].player}</h2>
          {winner && <p>Winner:</p>}
        </SubInfo>
        <Board>
          {data.map((item, i) => {
            return (
              <Square
                value={item.id}
                key={i}
                counter={counter}
                playerChange={playerChange}
                players={counter ? players[0].sign : players[1].sign}
              />
            );
          })}
        </Board>
      </div>
    </Container>
  );
};

export default TicTacToe;
