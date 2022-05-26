import React, { useState } from "react";
import "./Board.css";

export default function Board({ boardValue, addCard }) {
  const [boardInput, setBoardInput] = useState(0);
  return (
    <div className="board-container">
      <div className="board-value">{boardValue}</div>
      <input
        className="board-input board-box"
        type="number"
        value={boardInput}
        onChange={(e) => setBoardInput(e.target.value)}
      />
      <button
        className="board-add board-box"
        onClick={() => {
          addCard(boardInput);
          setBoardInput(0);
        }}
      >
        ADD
      </button>
    </div>
  );
}
