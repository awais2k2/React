import React from "react";

const Header = (props) => {
  return (
    <>
      <header className="bg-gray-900">
        <div className=" px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-center gap-[15px]">
              <img
                src="./Assets/Logo.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-full bg-cover"
              />
              <h1 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-600">
                My Tailor and Fabrics
              </h1>
            </div>

            <nav className="hidden md:flex ">
              <a
                href="#"
                className="text-white font-medium mr-6 hover:text-[red] no-underline"
                onClick={props.showaddlabour}>
                Add Labour
              </a>
              <a
                href="#"
                className="text-white font-medium mr-6 hover:text-[red] no-underline"
                onClick={props.showlabourexpense}>
                Add Labour Expense
              </a>
              <a
                href="#"
                className="text-white font-medium mr-6 hover:text-[red] no-underline"
                onClick={props.showcustomer}>
                Customers
              </a>
              <a
                href="#"
                className="text-white font-medium mr-6 hover:text-[red] no-underline">
                Shopping Expenses
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
