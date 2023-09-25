import React from "react";

function RestartButton({ resetGame }) {
  return (
    <button type="button" className="restart-button" onClick={resetGame}>
      Restart Game
    </button>
  );
}

export default RestartButton;
