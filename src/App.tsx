import React from 'react';
import Board from "./components/Board"
import Pie from "./components/Pie"
import './App.css';

function App() {
  return (
    <div className="App">
     <Board/>
     <Pie/>
     <Pie/>
    </div>
  );
}

export default App;
