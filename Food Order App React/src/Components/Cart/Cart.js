import Modal from "./Model";
import "./Cart.css";
import CartContext from "../Store/CardContext";
import { useContext } from "react";

const Cart = (props) => {
  const decreaseamounthandler = () => {};
  const cartctx = useContext(CartContext);
  const increaseamounthandler = () => {};
  const cartItems = (
    <ul className="cart-items">
      {cartctx.item.map((item) => {
        return (
          <>
            <li className="flex justify-between">
              <div className="flex flex-col">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
              <div>{item.amount}x</div>
              <div>
                <button onClick={increaseamounthandler}>+</button>
                <button onClick={decreaseamounthandler}>-</button>
              </div>
            </li>
            <hr></hr>
          </>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{cartctx.totalamount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
