import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xisNext, setXisNext] = useState(true);
  const [squares, Setsquares] = useState(Array(9).fill("_"));

  function handleClick(i) {
    if (squares[i] == "X" || squares[i] == "O") return;

    const newSquares = squares.slice();
    if (xisNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    Setsquares(newSquares);
    setXisNext(!xisNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] != "_") return squares[a];
      }
    }

    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisNext ? "X" : "O");
  }

  return (
    <>
      <div className="outer">
        <h3>
          <u>Tic-Tac-Toe</u>
          <br /> {status}
        </h3>
        <div className="TodoCenter">
          <div className="board-row">
            <Square
              value={squares[0]}
              onSquareClick={() => {
                handleClick(0);
              }}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => {
                handleClick(1);
              }}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => {
                handleClick(2);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[3]}
              onSquareClick={() => {
                handleClick(3);
              }}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => {
                handleClick(4);
              }}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => {
                handleClick(5);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[6]}
              onSquareClick={() => {
                handleClick(6);
              }}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => {
                handleClick(7);
              }}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
