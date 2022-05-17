import Link from "next/link";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

function navbarmain() {
  const [Heigt, SetHeight] = useState(0);
  const [Navbar, SerNavbar] = useState(false);

  useEffect(() => {
    SetHeight(document.getElementById("videodiv").offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      SerNavbar(window.scrollY > Heigt);
    });
  }, []);

  return (
    <>
      <header className={Navbar ? "navbaronscroll" : "navbar"}>
        <div className="h-full flex justify-center md:justify-around items-center">
          <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749648/logolar/quinslogo_o7l1sc.png" alt="" className="h-1/2 hidden md:block" />
          <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749649/logolar/Beyaz_u3i9m2.png" alt="" className="h-1/2" />
          <img src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652749649/logolar/B-1_ljgmht.png" alt="" className="h-1/2 hidden md:block" />
        </div>
      </header>
    </>
  );
}

export default navbarmain;
