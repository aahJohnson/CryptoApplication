import { createContext, useState } from "react";

export const CartContext = createContext();

const CartSize = ({ children }) => {
  const [size, setSize] = useState(0);
  console.log("Size: ", size, setSize);

  return (
    <CartContext.Provider value={{ size, setSize }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartSize;
