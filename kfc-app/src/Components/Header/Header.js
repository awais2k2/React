import React, { useState, useEffect } from "react";
import HeaderCardButton from "./HeaderCardButton";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

export default function Header(props) {
  let grandtotal = 0;

  const [cartitem, setCartitem] = useState([]);
  const [Totalprice, setTotalprice] = useState();
  const [showcart, setShowcart] = useState(false);
  const [showcartbutton, setshowcartbutton] = useState(false);
  useEffect(() => {
    if (cartitem.length === 0) {
      setshowcartbutton(false);
    }
    if (cartitem.length !== 0) {
      setshowcartbutton(true);
    }
  }, [cartitem]);
  useEffect(() => {
    if (cartitem.length >= 0) {
      setCartitem((pre) => {
        if (cartitem.length === 0) {
          return [...props.item];
        } else {
          const meal = pre;
          meal.push(...props.item);
          let uniqueMeals = meal.filter(
            (meal, index, self) =>
              index === self.findIndex((m) => m.id === meal.id)
          );
          return [...uniqueMeals];
        }
      });
    }
  }, [props.item]);

  useEffect(() => {
    cartitem.forEach((item) => {
      for (let i = 0; i < item.amount; i++) {
        grandtotal = grandtotal + Number(item.price);
      }
    });
    setTotalprice(grandtotal);
  });

  const showcarthandler = () => {
    setShowcart(true);
  };

  const hide2carthandler = () => {
    setShowcart(false);
  };

  return (
    <div>
      <div className="  flex justify-between w-[70%] bg-black mx-auto  italic items-center ">
        <div className="flex items-center gap-[20px]">
          <div className="text-white tracking-[1.5px] text-[25px] font-black mt-[10px] ">
            <button>
              <img src="../../../assets/logo.PNG" />
            </button>
          </div>
          <div className="flex gap-[10px] bg-gray-800 rounded-[10px] ">
            <button className="text-white hover:bg-gray-600  p-[10px] hover:rounded-[10px]">
              DELIVERY
            </button>
            <button className="text-white hover:bg-gray-600  p-[10px] hover:rounded-[10px]">
              PICKUP
            </button>
          </div>
        </div>
        <div>
          <HeaderCardButton
            cartlength={cartitem.length}
            onClick={showcarthandler}
          />
        </div>
      </div>
      <div
        className={
          `duration-300 fixed z-10 inset-0 bg-black w-[80%] h-screen ` +
          (showcart
            ? ""
            : "duration-300 fixed left-[-100%] bg-black w-full h-screen")
        }></div>
      <div
        className={
          `duration-300 fixed top-0 right-0 z-10 bg-gray-500 h-screen w-[450px] text-white flex flex-col  text-center gap-[40px]` +
          (showcart
            ? ""
            : "duration-300 fixed top-0 right-[-100%] z-10 h-screen w-[450px] text-white")
        }>
        <div className="flex gap-[15px] items-center mt-[20px]">
          <AiOutlineShoppingCart className="ml-[20px]" size={40} />
          <span className="text-[20px] font-bold">Your Bucket</span>
          <div className="ml-[100px] flex gap-[10px] items-center">
            <div className="text-[25px] font-bold">
              <span className="text-[25px] font-semibold">Rs</span> {Totalprice}
            </div>
            <AiOutlineClose
              onClick={hide2carthandler}
              size={25}
              className="cursor-pointer "
            />
          </div>
        </div>
        {showcartbutton ? (
          <div className="flex flex-col gap-[20px]">
            {cartitem.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative flex items-center bg-black/80 rounded-[20px] gap-[20px] py-[15px] w-[410px] mx-auto">
                  <div>
                    <img
                      className="w-[70px] h-[70px] rounded-[20px] ml-[20px]"
                      src={item.img}
                    />
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div className="flex gap-[10px]">
                      <button
                        onClick={() => {
                          setCartitem((pre) => {
                            if (pre.length > 0) {
                              const updateted = pre;
                              const index = pre.findIndex(
                                (items) => items.id === item.id
                              );
                              if (updateted.length > 0) {
                                if (updateted[index].amount >= 1) {
                                  updateted[index].amount -= 1;
                                }
                                if (updateted[index].amount <= 0) {
                                  updateted.splice(index, 1);
                                }
                              }
                              if (updateted.length === 0) {
                                return [];
                              }

                              return [...updateted];
                            }
                          });
                        }}
                        className="cursor-pointer">
                        -
                      </button>
                      <div>{item.amount}</div>
                      <button
                        onClick={() => {
                          setCartitem((pre) => {
                            const updateted = pre;
                            const index = pre.findIndex(
                              (items) => items.id === item.id
                            );
                            updateted[index].amount += 1;

                            return [...updateted];
                          });
                        }}
                        className="cursor-pointer">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="font-bold absolute right-[15px] top-[25px]">
                    {item.price}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-[25px] font-bold items-center ">
            Bucket is empty
          </div>
        )}

        {showcartbutton ? (
          <div>
            <button className="absolute bottom-0 left-[22px] bg-black/80  hover:bg-black text-[20px] py-[12px] w-[90%] rounded-[20px] mb-[20px]">
              View Bucket
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
