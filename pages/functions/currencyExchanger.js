import { useEffect } from "react";

export default function CurrencyExchanger(valueInUsd) {
  useEffect(() => {
    converter(valueInUsd);
  });
}

export async function getStaticProps() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
  );
  const data = await res.json();

  return { props: { exchangeRate: data.usd } };
}

function converter(valueInUsd, exchangeRate) {
  const valueInSek = valueInUsd * exchangeRate;
  console.log(valueInSek);
  return valueInSek;
}
