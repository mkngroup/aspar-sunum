import React from "react";

function quins(props) {
  return (
    <div className="shadow-lg mt-5 min-w-full">
      <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
        {props.title}
      </h1>
      <div className="lg:grid grid-cols-2 mb-10">
        <img
          src={props.img}
          alt=""
          className="w-full h-full max-h-[570px] object-cover rounded-r-[23px]"
        />
        <div className="lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center p-5 relative">
          <p className="text-lg font-semibold p-2 lg:p-0 ">
            <span className="font-bold text-xl">{props.span1}</span> <br />
            <br /> {props.paragraf}
          </p>
          <button className="mt-5 border border-black px-14 py-3 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
            <a rel="noreferrer" href={props.link} target="_blank">
              KEŞFET
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default quins;
