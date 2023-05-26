import { useReducer } from "react";
import CartContext from "./CardContext";

const CardProvider = (props) => {
  const defaultcardState = {
    item: [],
    totalamount: 0,
  };

  const Cardreducer = (state, action) => {
    if (action.type === "ADD") {
      const updateditems = state.item.concat(action.item);
      const updatetotalamount =
        state.totalamount + action.item.price * action.item.amount;

      return {
        item: updateditems,
        totalamount: updatetotalamount,
      };
    }
    return defaultcardState;
  };

  const [cardstate, dispatchcardaction] = useReducer(
    Cardreducer,
    defaultcardState
  );
  const addItemToCardHandler = (item) => {
    dispatchcardaction({ type: "ADD", item: item });
  };

  const removeItemToCardHandler = (id) => {
    dispatchcardaction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cardstate.item,
    totalamount: cardstate.totalamount,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
