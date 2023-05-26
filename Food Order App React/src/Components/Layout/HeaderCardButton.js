import CardIcon from "../Cart/CardIcon";
import { useContext } from "react";
import CartContext from "../Store/CardContext";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.item);
  const NumberOfCardItems = cartCtx.item.reduce((curnum, item) => {
    return curnum + item.amount;
  }, 0);

  return (
    <>
      <button
        onClick={props.onClick}
        className="cursor-pointer font-inherit border-none bg-[#4d1601] text-[white] py-[0.75rem] px-[3rem] flex justify-around items-center font-bold rounded-[25px] hover:#2c0d00 active:#2c0d00 ">
        <span className="w-[1.35rem] h-[1.35rem] mr-[0.5rem]">
          <CardIcon />
        </span>
        <span>Your Card</span>
        <span className="badge bg-[#b94517] py-[0.25rem] px-[1rem] ml-[1rem] font-bold rounded-[25px]">
          {NumberOfCardItems}
        </span>
      </button>
    </>
  );
};

export default HeaderCardButton;
