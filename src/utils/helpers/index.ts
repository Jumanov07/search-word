const showNotification = (setter: (value: boolean) => void) => {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
};

const checkWin = (correct: string[], wrong: string[], word: string): string => {
  let status = "win";
  word.split("").forEach((letter: string) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  if (wrong.length === 6) status = "lose";

  return status;
};

export { showNotification, checkWin };
