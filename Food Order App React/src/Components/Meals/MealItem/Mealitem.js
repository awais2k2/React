import CartContext from "../../Store/CardContext";
import { useContext } from "react";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cardctx = useContext(CartContext);
  const addtocardhandler = (amount) => {
    cardctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="flex justify-between m-[1rem]      ">
      <div>
        <h3 className="mx-[0] mt-[0.25rem] mr-0 text-bold">{props.name}</h3>
        <div className="font-italic">{props.description}</div>
        <div className="mt-[0.25rem] font-bold text-[#ad5502] text-[1.25rem]">
          {price}
        </div>
      </div>
      <div>
        <MealItemForm item={props} onAddToCart={addtocardhandler} />
      </div>
    </li>
  );
};

export default MealItem;
