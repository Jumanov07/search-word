interface Props {
  wrongLetters: string[];
}

const WrongLetters = ({ wrongLetters }: Props) => {
  const wrongs = wrongLetters
    .map((letter, i) => <span key={i}>{letter}</span>)
    .reduce((acc: (JSX.Element | string)[], curr, index, array) => {
      acc.push(curr);

      if (index < array.length - 1) {
        acc.push(", ");
      }

      return acc;
    }, [] as (JSX.Element | string)[]);

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongs}
      </div>
    </div>
  );
};

export default WrongLetters;
