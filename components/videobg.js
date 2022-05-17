import React from "react";
import Link from "next/link";

function videobg() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden" id="videodiv">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="h-full w-full">
          <video
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dnfmvs2ci/video/upload/v1652747146/videos/Comp_1_1_p3a5cd.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-5xl ">ASPAR İLAÇ KOZMETİK GIDA SANAYİ A.Ş</h1>
            <p className="font-light text-2xl mt-5">HOŞ GELDİNİZ</p>
            <div className=" flex mx-10 flex-col md:flex-row justify-center gap-5 mt-10">
              <button className="border px-14 py-3 border-white rounded-md">
                <Link href="#footer">
                  <a>İLETİŞİM</a>
                </Link>
              </button>
              <button className="border px-14 py-3 bg-black border-black rounded-md bg-opacity-75">
                <Link href="#mainstart">
                  <a>KEŞFE BAŞLA</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default videobg;
