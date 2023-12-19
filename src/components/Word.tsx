interface Props {
  selectedWord: string;
  correctLetters: string[];
}

const Word = ({ selectedWord, correctLetters }: Props) => {
  return (
    <div className="word" id="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
