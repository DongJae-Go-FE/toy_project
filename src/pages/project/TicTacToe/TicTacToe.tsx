import TicTacToeStyledComponents from "./styled";

import Square from "./components/Square/Square";

const { Container, Title, SubInfo, Board } = TicTacToeStyledComponents;

const TicTacToe = () => {
  return (
    <Container>
      <Title>Tic!Tac!Toe!</Title>
      <div>
        <SubInfo>
          <h2>Player: </h2>
          <p>Winner:</p>
        </SubInfo>
        <Board>
          {[...Array(9)].map((_, i) => {
            return <Square value={i + 1} key={i} />;
          })}
        </Board>
      </div>
    </Container>
  );
};

export default TicTacToe;
