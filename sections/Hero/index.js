import React from "react";
import Image from "next/image";
import Rectangle2 from "../../assets/Rectangle 2.png";
import Rectangle3 from "../../assets/Rectangle 3.png";
import Rectangle4 from "../../assets/Rectangle 4.png";
import Polygon from '../../assets/Polygon.png';
import Ellipse1 from '../../assets/Ellipse1.png';
import Vector from '../../assets/Vector.png';
import Vector1 from '../../assets/Vector1.png';
import Vector2 from '../../assets/Vector2.png';
import Face1 from "../../assets/face1.png";
import Face2 from "../../assets/face2.png";
import Face3 from "../../assets/face3.png";

function Hero() {
  return (
    <div className='bg-black h-screen grid grid-cols-2 gap-2 items-center'>
      <div>
      <h4 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white ml-10 mt-8">
      A platform to help you curate and showcase the <a style={{color:"linear-gradient(to right, #C333F8 , #1BC5E2)","WebkitTextFillColor":"transparent","WebkitBackgroundClip":"text"}}className="text-black-600 font-bold bg-gradient-to-r from-pink to-blue">links</a> you've been sharing.
      </h4>
     <p className="text-white ml-10 mt-8 text-dark-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mauris neque sit turpis est mi sit in massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mauris neque sit turpis est mi sit in massa. </p>
     <div className="flex items-center">
     <div className="bg-gray flex items-center ml-8 mr-15 w-2/4 p-6 mt-5 rounded-3xl">
      <p className="text-white mr-4 text-sm">bitsy.bio/yourname</p>
      <button className="bg-purple text-sm px-4 py-2 leading-none border rounded text-white border-purple  mt-4 lg:mt-0 mr-7 flex-auto w-32 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink hover:shadow-pink shadow-pink">Get Started</button>
     </div>
     <div className="flex items-center mt-5">
     <button className="bg-purple rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full w-10 p-2 ml-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink">
      <Image src={Polygon}></Image>
       </button>
     <p className="text-white border-y-0 ml-2 underline">Why Bitsy.bio?</p>
     </div>
     </div>
     <div className="flex mt-8 ml-6 items-center">
          <Image src={Face1}></Image>
          <Image src={Face2}></Image>
          <Image src={Face3}></Image>
          <p className="text-dark-gray ml-2">Trusted By over 200K+ creators</p>
        </div>
      </div>
      
  <div className="mx-15 mt-8 px-5 ml-10">
    <div className="flex ">
  <div className="bg-yellow border rounded-full w-15 p-12 absolute top-[calc(100%-28rem)] animate-pulse " style={{transform:"skewY(-15deg)"}}>
    <div className="flex flex-col absolute left-[calc(100%-8rem)] top-0 animate-pulse">
      <Image src={Vector}></Image>
      <Image src={Vector}></Image>
      <Image src={Vector}></Image>
  </div>
  <div className="absolute left-[calc(100%-4rem)] top-[calc(100%-4rem)]">
    <Image src={Vector1}></Image>
    </div>
    <div  className="absolute left-49 top-[calc(100%-3.5rem)] left-[calc(100%-3.3rem)] animate-pulse">
    <Image src={Vector2}></Image>
    </div>
    </div>
    <div className="absolute top-[calc(100%-28rem)] right-[calc(100%-80rem)] ">
      <Image   src={Rectangle2}></Image>
      </div>
      <div className="absolute left-[calc(100%-32rem)] top-[calc(100%-19rem)] animate-bounce" >
     <Image  src={Rectangle3}></Image> 
     </div>
     <div className="absolute top-23 top-[calc(100%-12rem)] right-[calc(100%-79rem)] animate-bounce" >
      <Image  src={Rectangle4}></Image> 
      </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
