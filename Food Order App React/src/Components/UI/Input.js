import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
      <label htmlFor="{props.input.id}" className="font-bold mr-[1rem]">
        {props.label}
      </label>
      <input
        {...props.input}
        ref={ref}
        className="w-[3rem] rounded-[5px] border-[1px] border-solid border-[#ccc] pl-[0.5rem]"
      />
    </div>
  );
});

export default Input;
