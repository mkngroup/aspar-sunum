import React from "react";

function videocard(props) {
  return (
    <div className="shadow-lg mt-5 min-w-full">
      <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
        {props.headertext}
      </h1>
      <div className="lg:grid grid-cols-2 mb-10">
        <video
          className="w-full h-full max-h-[570px] min-h-[570px] lg:rounded-r-[23px]"
          src={props.videosrc}
          autoPlay
          loop
          muted
        />
        <div className="lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center p-5">
          <p className="text-lg font-semibold p-2 lg:p-0 ">
            <span className="italic text-[#3056D3]">{props.span1}</span>
            {props.paragraf}
            <span className="italic">{props.span2}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default videocard;
