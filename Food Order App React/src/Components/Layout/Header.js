import { Fragment, useContext } from "react";
import Mealsimage from "../../Assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className=" fixed top-0 left-0 w-[100%]  h-[5rem] bg-[#8a2b06] text-[white] flex justify-between items-center py-[0] px-[10%] shadow-md z-10">
        <h1 className="text-[40px] font-semibold tracking-wide">ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className="w-[100%] h-[25rem] z-0 overflow-hidden">
        <img
          style={{
            transform: " rotateZ(-4.5deg) translateY(-4rem) translateX(-1rem)",
          }}
          className="w-[110%] h-[100%] object-cover"
          src={Mealsimage}
          alt="A Table Full of delecious meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
