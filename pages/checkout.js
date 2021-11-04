import Head from "next/head";
import { useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import logoUrlRepair from "./functions/logoUrlRepair";
import { CartContext } from "./components/context/CartSize";

const shoppingList = [];
let totalPrice = 0;

export default function Checkout() {
  const cartSize = useContext(CartContext);
  return (
    <>
      <Head>
        <title>Checkout</title>
        {(totalPrice = 0)}
      </Head>
      <Navbar />
      <div id="checkoutDiv">
        {shoppingList.map((currency) => {
          return (
            <div id="checkoutItems" key={currency.id}>
              <h1>{currency.name}</h1>
              <h3>{currency.symbol}</h3>
              <p>Price: ${betterNumber(currency.price_usd)}</p>
              <img
                src={logoUrlRepair(currency.name, currency.symbol, currency.id)}
              />
              {setTotalPrice(currency.price_usd)}
            </div>
          );
        })}
        <div id="buyNowDiv">
          <p>Total Price: ${betterNumber(getTotalPrice())}</p>
          <button
            onClick={() => {
              cartSize.setSize((prevSize) => prevSize * 0),
                (shoppingList.length = 0);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export function addToCart(item) {
  shoppingList.push(item);
}

export function getCartSize() {
  return shoppingList.length;
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coinlore.net/api/tickers/?start=0&limit=20"
  );
  const data = await res.json();

  return { props: { crypto: data.data } };
}

function betterNumber(badNumber) {
  return badNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setTotalPrice(price) {
  totalPrice = totalPrice + parseFloat(price);
}

function getTotalPrice() {
  return totalPrice;
}
