import React from "react";

function GuessRow({ row }) {
  return (
    <p className="guess">
      {row.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status ? status : ""}`}>
          {letter ? letter : ""}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
