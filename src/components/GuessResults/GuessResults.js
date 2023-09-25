import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessRow from "../GuessRow/GuessRow";

function GuessResults({ guesses }) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED).map((index) =>
    guesses.length > index ? guesses[index] : range(5).map(() => ({}))
  );
  return (
    <div className="guess-results">
      {guessRows.map((guess, index) => (
        <GuessRow row={guess} key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
