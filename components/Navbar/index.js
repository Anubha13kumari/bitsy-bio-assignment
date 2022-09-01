import React, { useState } from "react";
import Logo from "../../assets/Bitsy_bio.png";
import Image from "next/image";

function Navbar() {
  const [section, setSelection] = useState("#home");
  return (
    <div className="bg-black sticky top-0 z-[100000000]">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-9">
          <Image src={Logo}></Image>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex justify-center">
            <a
              href="#home"
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200  ${
                section === "#home" ? "text-purple" : "text-white"
              } mr-6 hover:text-3xl`}
              onClick={() => setSelection("#home")}
            >
              Explore
            </a>
            <a
              href="#whyBitsy"
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-6 hover:text-3xl ${
                section === "#whyBitsy" ? "text-purple" : "text-white"
              }`}
              onClick={() => setSelection("#whyBitsy")}
            >
              Why Bitsy.bio?
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-6 hover:text-3xl"
            >
              About Us
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-3xl"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-purple  mt-4 lg:mt-0 mr-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink"
            >
              Login
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-purple  mt-4 lg:mt-0 bg-purple mr-7 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
