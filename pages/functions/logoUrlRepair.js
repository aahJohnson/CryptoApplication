export default function logoUrlRepair(cryptoName, cryptoSymbol, cryptoId) {
  let fixSollution;
  let name = cryptoName;
  const symbol = cryptoSymbol;

  if (cryptoId == 45219) {
    fixSollution = "new-";
  } else if (cryptoId == 48537) {
    fixSollution = "luna-";
  } else {
    fixSollution = "";
  }

  const newUrl =
    "https://cryptologos.cc/logos/" +
    name.split(" ").join("-").toLowerCase() +
    "-" +
    fixSollution +
    symbol.toLowerCase() +
    "-logo.png?v=014";

  return newUrl;
}
