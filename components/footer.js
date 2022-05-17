import React from "react";
import {FaInstagram, FaFacebook,FaPhoneAlt} from 'react-icons/fa'
import {GiWorld} from 'react-icons/gi'
import {GrMail} from 'react-icons/gr'

function footer() {
  return (
    <div id="footer" className="bg-[#000F18]  h-full w-full transition-all ease-in-out duration-1000">
      <div className="h-[80px] flex justify-center md:justify-around items-center">
        <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749648/logolar/quinslogo_o7l1sc.png" alt="" className="h-1/2 hidden md:block" />
        <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749649/logolar/Beyaz_u3i9m2.png" alt="" className="h-1/2" />
        <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749649/logolar/B-1_ljgmht.png" alt="" className="h-1/2 hidden md:block" />
      </div>
      <div className="bg-[#000F18] text-white h-full flex flex-wrap gap-3 justify-center md:justify-around items-center py-20">
        <p className="flex items-center"><span className="text-2xl mr-2"><FaInstagram/></span><a rel="noopener" href="https://www.instagram.com/quins.solutions/" target='_blank'>@quins.solutions</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><FaFacebook/></span><a rel="noopener" href="https://www.facebook.com/quins.solutions" target='_blank'>@quins.solutions</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><FaFacebook/></span><a rel="noopener" href="https://www.facebook.com/asparilackozmetik" target='_blank'>@asparilackozmetik</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><GiWorld/></span><a rel="noopener" href="https://asparilac.com/" target='_blank'>www.asparilac.com</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><GiWorld/></span><a rel="noopener" href="https://www.quins-solutions.com/" target='_blank'>www.quins-solutions.com</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><FaPhoneAlt/></span><a rel="noopener" href="tel:+905314942594" target='_blank'>+905314942594</a></p>
        <p className="flex items-center"><span className="text-2xl mr-2"><GrMail/></span><a rel="noopener" href="mailto:aspar.ilac@gmail.com" target='_blank'>aspar.ilac@gmail.com</a></p>
      </div>
    </div>
  );
}

export default footer;
