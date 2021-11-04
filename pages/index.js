import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import logoUrlRepair from "./functions/logoUrlRepair";
import { motion } from "framer-motion";
import { addToCart } from "./checkout";
import { useContext } from "react";
import { CartContext } from "./components/context/CartSize";

export default function Home({ crypto }) {
  const cartSize = useContext(CartContext);
  var rank = 1;
  return (
    <>
      <Head>
        <title>Crypto App</title>
      </Head>
      <Navbar />
      <div id="mainDiv">
        {crypto.map((currency) => (
          <div id="cryptoData" key={currency.id}>
            <Link key={currency.id} href={`${currency.id}`}>
              <h1>{currency.name}</h1>
            </Link>
            <h3>{currency.symbol}</h3>
            <img
              src={`${logoUrlRepair(
                currency.name,
                currency.symbol,
                currency.id
              )}`}
              alt={`${logoUrlRepair(
                currency.name,
                currency.symbol,
                currency.id
              )}`}
              id="currencyLogo"
            />
            <p>Rank: {rank++}</p>
            <p>Price: ${betterNumber(currency.price_usd)}</p>
            <motion.img
              src={
                "https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png"
              }
              alt={"Add to cart"}
              id="addToCartIcon"
              onClick={() => {
                cartSize.setSize((prevSize) => prevSize + 1),
                  addToCart(currency);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        ))}
      </div>
    </>
  );
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
