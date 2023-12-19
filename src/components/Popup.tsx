import { useEffect } from "react";
import { checkWin } from "../utils/helpers";

interface Props {
  correctLetters: string[];
  wrongLetters: string[];
  selectedWord: string;
  setPlayable: (value: boolean) => void;
  playAgain: () => void;
}

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}: Props) => {
  let finalMessage: string = "";
  let finalMessageRevealWord: string = "";
  let playable: boolean = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😎🤟🎉";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost!😫☹️";
    finalMessageRevealWord = `...the word was: ${selectedWord} `;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
