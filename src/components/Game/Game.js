import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import RestartButton from "../RestartButton/RestartButton";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("");
  }

  function handleSubmitGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const nextGuesses = [...guesses, checkedGuess];
    if (guess === answer) {
      setGameStatus("win");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
    setGuesses(nextGuesses);
  }

  let banner;
  if (gameStatus === "win") {
    banner = <HappyBanner numGuesses={guesses.length} />;
  } else if (gameStatus === "lose") {
    banner = <SadBanner answer={answer} />;
  }

  return (
    <>
      {banner}
      <GuessResults guesses={guesses} />
      {<RestartButton resetGame={resetGame} />}
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
