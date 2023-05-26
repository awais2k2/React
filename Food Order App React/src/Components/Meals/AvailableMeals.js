import Card from "../UI/Card";
import MealItem from "./MealItem/Mealitem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <>
      <MealItem
        id={meal.id}
        key={meal.key}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
      <hr className="bg-[#ccc]"></hr>
    </>
  ));

  return (
    <section className="max-w-[60rem] w-[90%] my-[60px] mx-auto animate-[mealsappear]  ">
      <Card>
        <ul className="list-none m-0 p-0 ">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
