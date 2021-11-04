export default function Title() {
  let randomNumber = Math.floor(Math.random() * 5);
  let wordOne;
  let wordTwo;

  switch (randomNumber) {
    case 0:
      wordOne = "Currency";
    case 1:
      wordOne = "Castle";
    case 2:
      wordOne = "Cat";
    case 3:
      wordOne = "Curry";
    case 4:
      wordOne = "Centaur";
  }

  switch (randomNumber) {
    case 0:
      wordTwo = "Information";
    case 1:
      wordTwo = "Island";
    case 2:
      wordTwo = "Icecream";
    case 3:
      wordTwo = "Iguana";
    case 4:
      wordTwo = "Insecurities";
  }

  return wordOne;
}
