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
          <img src="/quinslogo.png" alt="" className="h-1/2 hidden md:block" />
          <img src="/Beyaz.png" alt="" className="h-1/2" />
          <img src="/B-1.png" alt="" className="h-1/2 hidden md:block" />
        </div>
      </header>
    </>
  );
}

export default navbarmain;
