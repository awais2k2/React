import React from "react";

const List = (props) => {
  return (
    <div class="bg-white w-[40%] mx-auto rounded-[10px] p-[15px]">
      {props.items.map((item) => (
        <p class=" bg-white  my-[10px] border-gray-400 border-[1px] p-[5px] font-semibold">
          {item.name} ({item.age} years old)
        </p>
      ))}
    </div>
  );
};

export default List;
