import { createContext, React } from "react";

const CartContext = createContext({
  item: [],
  totalamount: 0,
  addItem: () => {},
  removeItem: () => {},
});
export default CartContext;
