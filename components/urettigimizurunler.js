import React from "react";
import {urettigimizurunlerimgs} from '../data/images'
 
function urettigimizurunler() {
  return (
    <div className="shadow-lg mt-20">
      <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
        ÜRETTİĞİMİZ ÜRÜNLER
      </h1>

      <div className="flex overflow-auto py-10 px-5  gap-5 ">
        {urettigimizurunlerimgs.map((data, key)=>{
            return(
                <Imagecard
                key={key}
                img = {data.img}
                />
            )
        })}
      </div>
    </div>
  );
}

export default urettigimizurunler;

const Imagecard = (props) => {
  return (
    <>
      <div>
        <img
          src={props.img}
          alt=""
          className="w-full h-full min-w-[500px] max-w-[500px] max-h-[700px] object-cover rounded-[23px] hover:scale-105 transition-all ease-in-out duration-300"
        />
      </div>
    </>
  );
};
