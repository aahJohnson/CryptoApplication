import Navbar from "./components/Navbar";
import logoUrlRepair from "./functions/logoUrlRepair";

export default function Post({ currency }) {
  return (
    <>
      <head>
        <title>{currency.id}</title>
      </head>
      <Navbar />
      <div id="idDiv">
        <h1>{currency.name}</h1>
        <h3>{currency.symbol}</h3>
        <ul>
          <li>Price: {currency.price_usd}</li>
          <li>Market Cap: {currency.market_cap_usd}</li>
          <li>Percent move last 24h: {currency.percent_change_24h}%</li>
        </ul>
        <img src={logoUrlRepair(currency.name, currency.symbol, currency.id)} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.coinlore.net/api/tickers/?start=0&limit=20"
  );
  const data = await res.json();

  const paths = data.data.map((currency) => ({ params: { id: currency.id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.coinlore.net/api/ticker/?id=${params.id}`
  );
  const data = await res.json();

  return { props: { currency: data[0] } };
}
