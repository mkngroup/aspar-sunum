import React from "react";

function imagecard(props) {
  return (
    <>
      <div className="mt-5">
        <img
          src={props.imgg}
          alt=""
          className="max-h-[305px] min-w-[450px] max-w-[500px]  rounded-[23px] object-cover hover:scale-105 transition-all ease-out duration-300"
        />
      </div>
    </>
  );
}

export default imagecard;
