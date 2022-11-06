import React from "react";

const Boxes = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className=" bg-white grid place-items-center text-5xl font-semibold text-[#ff9a9e]"
      >
        {props.value}
      </div>
    </>
  );
};

export default Boxes;
