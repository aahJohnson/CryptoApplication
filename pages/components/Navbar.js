import Link from "next/link";
import { CartContext } from "../components/context/CartSize";
import { useContext } from "react";

export default function Navbar() {
  const cartSize = useContext(CartContext);
  console.log(cartSize);
  return (
    <div id="nav">
      <h1>Crypto {Title()}</h1>
      <div id="navLinks">
        <Link href="/">Home</Link>
        <Link href="../checkout">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/263/263142.png"}
            id="checkoutImage"
          />
        </Link>
        <p id="cartSize">{cartSize.size}</p>
      </div>
    </div>
  );
}

function Title() {
  let randomNumber;
  let wordOne;
  let wordTwo;
  let wordThree;

  randomNumber = Math.floor(Math.random() * 7);

  switch (randomNumber) {
    case 0:
      wordOne = "And";
      break;
    case 1:
      wordOne = "Arguing";
      break;
    case 2:
      wordOne = "Achieving";
      break;
    case 3:
      wordOne = "Abiding";
      break;
    case 4:
      wordOne = "Admiring";
      break;
    case 5:
      wordOne = "Awoken";
      break;
    case 6:
      wordOne = "Azure";
      break;
  }

  randomNumber = Math.floor(Math.random() * 7);

  switch (randomNumber) {
    case 0:
      wordTwo = "Parrot";
      break;
    case 1:
      wordTwo = "Purple";
      break;
    case 2:
      wordTwo = "Pony";
      break;
    case 3:
      wordTwo = "Pancake";
      break;
    case 4:
      wordTwo = "Pearl";
      break;
    case 5:
      wordTwo = "Pineapple";
      break;
    case 6:
      wordTwo = "Party";
      break;
  }

  randomNumber = Math.floor(Math.random() * 7);

  switch (randomNumber) {
    case 0:
      wordThree = "Pizza";
      break;
    case 1:
      wordThree = "Person";
      break;
    case 2:
      wordThree = "Pump";
      break;
    case 3:
      wordThree = "Pumpkin";
      break;
    case 4:
      wordThree = "Pasta";
      break;
    case 5:
      wordThree = "Preacher";
      break;
    case 6:
      wordThree = "Panini";
      break;
  }

  return wordOne + " " + wordTwo + " " + wordThree;
}

export async function getStaticProps() {
  const res = await fetch("https://random-words-api.vercel.app/word");
  const data = await res.json();

  return { props: { randomWord: data.data } };
}
