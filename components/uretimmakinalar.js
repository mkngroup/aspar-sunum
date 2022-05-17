import React from "react";

import { fabrikagorseller, makinevideolar } from "../data/images";
import Images from "./imagecard";
import Videocard from "./videocard";

function uretimmakinalar() {
  return (
    <>
      <div className="shadow-lg mt-20">
        <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
          ÜRETİM MAKİNELERİMİZ
        </h1>
        <div className="lg:grid grid-cols-2 bg-[url('https://img.freepik.com/free-vector/white-seamless-weave-pattern-background-vector_53876-111595.jpg?t=st=1652707119~exp=1652707719~hmac=bd9962eafea707d3865bb72a6d2f3d54c91f6eed890393e329f710d67ecf44f2&w=1060')] bg-no-repeat bg-cover">
          <img
            src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749410/aspar%20sunum%20galeri%20resimleri/IMG_20220516_172057_csg6hu.jpg"
            alt=""
            className="w-full h-full rounded-r-full"
          />
          <div className="p-5 flex flex-col justify-center">
            <p className="my-5 text-lg font-semibold">
              Üretimde kullandığımız makinalar tamamıyla paslanmaz çelikten
              oluşur bundan dolayı yüksek derecede hijyenik bir üretim ve
              paketleme sağlamaktadır. Makinalarımız tam otomatik bir düzenekten
              oluşur, üretim ve paketleme çok hızlı gerçekleşmektedir.
            </p>
            
            <div className="text-center">
              <h2 className="my-5 text-xl font-bold text-red-600">
                MAKİNELERİMİZ :
              </h2>
              <ul className="flex gap-5 flex-wrap">
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Kapsül Dolum Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Granül ve Toz Karıştırıcı
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Yarı Otomatik Shrink Paketleme Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Granül Paketleme Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Çok Zımbalı Tablet Pres Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Kapsül Parlatma Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Kapsül Sayma Makinası
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Krem ve Sıvı Karıştırma Kazanı
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br /><br />
        <div>
          <h1 className="text-center text-2xl font-bold mt-10 text-[#3056D3]">
            FABRİKAMIZDAN GÖRSELLER
          </h1>
          <div className="flex gap-5 p-3 overflow-auto">
            {fabrikagorseller.map((data, key) => {
              return <Images key={key} imgg={data.img} />;
            })}
          </div>
        </div>
        <br /><br />
        <div className="relative flex overflow-auto gap-5 ">
          {makinevideolar.map((data, key) => {
            return(
            <Videocard
            key={key}
            headertext = {data.headertext}
            span1 = {data.span1}
            span2 = {data.span2}
            paragraf = {data.paragraf}
            videosrc = {data.videosrc}
            />
            
            );
          })}
        </div>
      </div>
    </>
  );
}

export default uretimmakinalar;
