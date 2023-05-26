const Card = (props) => {
  return (
    <>
      <div className="p-[1rem] shadow-md rounded-[14px] bg-white">
        {props.children}
      </div>
    </>
  );
};

export default Card;
