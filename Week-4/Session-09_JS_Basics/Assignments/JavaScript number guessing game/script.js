function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess;

  while (guessCount < totalGuesses) {
    guess = prompt(
      guessCount === 0
        ? "Enter a number between 1 and 100."
        : guess < numToGuess
        ? `${guess} is too small. Guess a larger number.`
        : `${guess} is too large. Guess a smaller number.`
    );

    if (guess === null) {
      return 0;
    }

    if (isNaN(Number(guess)) || guess.trim() === "") {
      alert("Please enter a number.");
      continue;
    }

    guess = Number(guess);
    guessCount++;

    if (guess === numToGuess) {
      return guessCount;
    }
  }

  return 0;
}
