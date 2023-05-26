import React, { useState } from "react";
import Body from "./Components/Body/Body.js";
import Header from "./Components/Header/Header";
import Categories from "./Components/BrowseCategaries/Categories.js";
import Selling from "./Components/TopSelling/Selling.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  const DuumyMeal = [
    {
      id: "f1",
      name: "Krunch Burger",
      img: " ../../../assets/airburger.jpg",
      description:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: " 250",
    },
    {
      id: "f2",
      name: "Midnigth Deal 3",
      img: " ../../../assets/burger4.jpg",
      description:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: "650",
    },
    {
      id: "f3",
      name: "Krunch With Fries N Drink",
      img: " ../../../assets/burger3.jpg",
      description:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: "470",
    },
    {
      id: "f4",
      name: "Xtreme Duo Box",
      img: " ../../../assets/pizza1.jpg",
      description:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: "1370",
    },
  ];
  const [cart, setCart] = useState([]);
  const addItemToCart = (item) => {
    setCart(() => {
      return [{ ...item, amount: 1 }];
    });
  };

  return (
    <div>
      <Header item={cart} />
      <Body />
      <Categories />
      <Selling addtocart={addItemToCart} items={DuumyMeal} />
      <Footer />
    </div>
  );
}

export default App;
