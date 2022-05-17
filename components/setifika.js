import React from "react";

function setifika() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
          SERTİFİKA - İZİN BELGELERİMİZ
        </h1>
        <div className="flex gap-5  overflow-x-auto overflow-y-hidden">
          <Card
            img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652748549/aspar%20izin%20belgeler/ISO_9001_lexuem.jpg"
            text1="ISO 9001:2015"
            text2="Kalite Yönetim Sistemi"
          />
          <Card
            img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652748554/aspar%20izin%20belgeler/HELAL_SERTIFIKA_iatkux.jpg"
            text1="Halal Sertifikası"
            text2=""
          />
          <Card
            img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652748547/aspar%20izin%20belgeler/ISO_22000_zvatah.jpg"
            text1="ISO 22000:2018"
            text2="Gıda Güvenliği Yönetim Sistemi"
          />
          <Card
            img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652748549/aspar%20izin%20belgeler/ISO_22716_gepcyn.jpg"
            text1="İSO 22716:2013"
            text2="GMP"
          />
          <Card
            img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652748544/aspar%20izin%20belgeler/TR_34-K_eiynf8.jpg"
            text1="TR34"
            text2=""
          />
        </div>
      </div>
    </>
  );
}

export default setifika;

const Card = (props) => {
  return (
    <>
      <div className="relative shadow-lg hover:shadow-2xl hover:bg-slate-100 transition-all ease-out duration-500 p-3 rounded-md bg-slate-50">
        <img
          src={props.img}
          alt=""
          className="min-w-[250px] max-w-[300px] rounded-3xl"
        />
        <div className="flex flex-col items-center py-5 ">
          <h1 className="text-xl font-bold">{props.text1}</h1>
          <h2 className="text-lg font-semibold">{props.text2}</h2>
        </div>
      </div>
    </>
  );
};
