import React from "react";
import "./App.css";

import TicTacToe from "./pages/project/TicTacToe/TicTacToe";
import PromiseAsyncAwait from "./pages/study/Promise_AsyncAwait";

function App() {
  return (
    <div className="App">
      <TicTacToe />
      <PromiseAsyncAwait />
    </div>
  );
}

export default App;
