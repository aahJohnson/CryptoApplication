import "../styles/globals.css";
import CartSize from "./components/context/CartSize";

function MyApp({ Component, pageProps }) {
  return (
    <CartSize>
      <Component {...pageProps} />;
    </CartSize>
  );
}

export default MyApp;
