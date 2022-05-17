import React from "react";
import Sertifika from "./setifika";
import Uretimmakinalar from "./uretimmakinalar";
import Uretimbilgiler from "./uretimbilgileri";
import Urettigimizurunler from "./urettigimizurunler";
import Laboratuvar from "./laboratuvar";
import Quins from "./quins";
import Videocard from "./videocard";
import { quinsdata } from "../data/images";
const mainfeed = () => {
  return (
    <>
      <section id="mainstart" className="">
        {/* hakkimizda */}
        <div className="shadow-lg mt-5">
          <h1 className="text-[#3056D3] font-bold text-lg mx-5 mb-5 md:mx-14">
            HAKKIMIZDA
          </h1>
          <div className="lg:grid grid-cols-2 bg-[url('https://img.freepik.com/free-vector/white-seamless-weave-pattern-background-vector_53876-111595.jpg?t=st=1652707119~exp=1652707719~hmac=bd9962eafea707d3865bb72a6d2f3d54c91f6eed890393e329f710d67ecf44f2&w=1060')] bg-no-repeat bg-cover">
            <img
              src="/asparbina.jpg"
              alt=""
              className="w-full h-full rounded-r-full"
            />
            <div className="lg: text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-5">
              <p className="mb-20 italic ">
                İstanbul Beylikdüzünde 5600 m2 alana kurulmuş olan ve yüksek
                teknolojiyle donatılmış kompleksimizde tüm süreçler elektronik
                sistemlerle takip edilmektedir.
              </p>
              <p className="text-lg font-semibold">
                Aspar İlaç 10 yılı aşkın bir süredir ulusal ve uluslararası
                pazarda doktor ve eczanelerin güven ve beğenisini kazanmıştır.
                Kazanmakla beraber başlayan bu serüven yıllar itibariyle üretim
                ve değişen sağlık sektörüyle beraber kalite teknolojisindeki
                gelişmeleri takip ederek bugünkü modern şekline ulaşmıştır.{" "}
                <br /> <br /> 2021 yılından itibaren İstanbul Beysan Sanayi
                sitesinde yeni tesisimizde ilaç, kozmetik ve gıda takviye
                alanlarındaki satış ve pazarlama organizasyonu Aspar İlaç
                Kozmetik kurularak yeniden oluşturulmuştur. Aspar İlaç Dünya
                genelinde 10,000’den fazla eczaneye genç ve yenilikçi satış
                kadroları ile hizmet sunmaktadır. Güçlü vizyonu, dinamik yapısı
                ve yenilikçi bakış açısı ile Aspar İlaç Türkiye’nin önde gelen
                firmalarındandır.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <Videocard
            headertext="OFİS | SATIŞ VE PAZARLAMA BÖLÜMÜ"
            span="ASPAR İLAÇ bünyesinde "
            paragraf="faaliyet gösteren firmamızınız stüdyo ve tasarım odası ile sizlere iyi hizmet sunmak için çalışmaktayız. Ekibimizin tüm üyeleri çözüm odaklı, yenilikçi, öğrenmeye ve gelişime açık gençlerden oluşmaktadır. Yaptığımız işlerde “en iyi” olmaya çalışıyor ve tasarladığımız ürünlerde kaliteye odaklanıyoruz. Stüdyo ve tasarım odasında ürün tasarımı, ürün ve katalog çekimleri, reklam çekimleri yapılmakta ve sosyal medya paylaşım içerikleri oluşturulmaktadır. Kendimize ve ekibimize güvenerek çıktığımız bu yolda başarılarımızın devamlı olması için çalışıyor ve bundan gurur duyuyoruz!"
            span2=""
            videosrc="/ofìs bolumu_1.mp4"
          />
        </div>
        <br />
        <br />
        {/* sertifika izin belgeleri */}
        <Sertifika />
        <br />
        <br />
        {/* Makinalar */}
        <Uretimmakinalar />
        <br />
        <br />
        {/* laboratuvar */}
        <Laboratuvar />
        <br />
        <br />
        {/* uretim bilgileri */}
        <Uretimbilgiler />
        <br />
        <br />
        {/* urettigimiz urunler */}
        <Urettigimizurunler />
        <br />
        <br />
        {/* quins */}
        <h1 className="text-[#3056D3] font-bold text-2xl mx-5 mb-5 md:mx-14 mt-20 text-center">
          QUİNS DERM SOLUTİONS®
        </h1>
        <div className="relative flex overflow-auto gap-5 ">
          {quinsdata.map((data, key) => {
            return (
              <Quins
                key={key}
                title={data.title}
                img={data.img}
                paragraf={data.paragraf}
                span1={data.span1}
                link={data.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default mainfeed;
