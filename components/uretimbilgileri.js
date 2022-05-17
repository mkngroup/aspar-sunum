import React from "react";


function uretimbilgileri() {
  return (
    <>
      <div className="shadow-lg mt-20">
        <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
          ÜRETİM BİLGİLERİ
        </h1>
        <div className="lg:grid grid-cols-2 bg-[url('https://img.freepik.com/free-vector/white-seamless-weave-pattern-background-vector_53876-111595.jpg?t=st=1652707119~exp=1652707719~hmac=bd9962eafea707d3865bb72a6d2f3d54c91f6eed890393e329f710d67ecf44f2&w=1060')] bg-no-repeat bg-cover">
          <img src="/r4.jpg" alt="" className="w-full h-full rounded-r-full" />
          <div className="p-5 flex flex-col justify-center">
            <p className="my-5 text-lg font-semibold">
              Aspar İlaç - Gıda Takviyesi, Kozmetik & Dermokozmetik ve Kişisel
              Bakım ürünleri üreticisi firmadır. En son mevzuatlar doğrultusunda
              bildirim çalışmalarını sizin adınıza tamamlıyoruz. İsterseniz
              markanızla fason üretim hizmetimizden faydalanabilirsiniz.
              İsterseniz de size en başından bir marka oluşturabiliriz.
            </p>
            <div className="text-center">
              <h2 className="my-5 text-xl font-bold text-red-600">
                ÜRETİM BÖLÜMLERİ :
              </h2>
              <ul className="flex gap-5 flex-wrap">
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Gıda Takviyesi
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Kozmetik & Dermokozmetik
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Cilt Bakımı
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Vücut Bakımı
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Saç Bakımı
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Vitaminler
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Multivitaminler
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Mineraller
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Bitkiler
                </li>
                <li className="border border-black p-2 hover:bg-[#3056D3] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  Kolajen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default uretimbilgileri;
