import Input from "../../UI/Input";
import { useRef } from "react";
const MealItemForm = (props) => {
  const amountinputref = useRef();

  const submithandler = (event) => {
    event.preventDefault();

    const enteredamount = amountinputref.current.value;
    const enteredamountnumber = +enteredamount;
    props.onAddToCart(enteredamountnumber);
  };
  return (
    <>
      <form className="text-center" onSubmit={submithandler}>
        <Input
          ref={amountinputref}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <button className="font-inherit cursor-pointer bg-[#8a2b06] border-[1px] border-solid border-[#8a2b06] text-white py-[0.5rem] px-[2rem] font-bold  rounded-[20px]">
          + Add
        </button>
      </form>
    </>
  );
};

export default MealItemForm;
