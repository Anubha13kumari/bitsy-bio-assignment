import React from "react";
import Image from "next/image";
import Ellipse from "../../assets/Ellipse.png";
import IMG1 from "../../assets/Img1.png";
import IMG2 from "../../assets/Img2.png";
import IMG3 from "../../assets/Img3.png";
import IMG4 from "../../assets/Img4.png";
import IMG5 from "../../assets/Img5.png";
import IMG6 from "../../assets/Img6.png";
import IMG7 from "../../assets/Img7.png";
import IMG8 from "../../assets/Img8.png";
import IMG9 from "../../assets/Img9.png";
import IMG10 from "../../assets/Img10.png";

function Body() {
  return (
    <div className="bg-gray-light">
      <div className="bg-gray-light grid grid-rows-6 grid-flow-col gap-3 place-items-center">
        <div>
          <p>Why Uses Bitsy</p>
        </div>
        <div>
          <h1 className="text-black font-bold">100+ Categories of Creators</h1>
        </div>
        <div>
          <p className="text-brown ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            mauris neque sit turpis est mi sit in massa. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="flex ">
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Animals</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-42 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Art & Customisation</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-44 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Beauty & Lifestyle</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Crypto</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Crypto</p>
          </div>
        </div>
        <div className="flex">
          <div className="border-levender bg-levender-light border rounded-full w-42 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Content Creators</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-42 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Art & Customisation</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-44 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Beauty & Lifestyle</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Crypto</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Musician</p>
          </div>
        </div>
        <div className="flex">
          <div className="border-levender border rounded-full bg-levender-light w-44 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Beauty & Lifestyle</p>
          </div>
          <div className="border-levender border rounded-full bg-levender-light w-28 flex  pl-2 mr-4 p-1">
            <Image className="pr-2" src={Ellipse}></Image>
            <p>Others</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div>
          <Image src={IMG1}></Image>
          <Image src={IMG2}></Image>
        </div>
        <div className="pt-10 mr-2">
          <Image src={IMG3}></Image>
          <Image src={IMG4}></Image>
        </div>
        <div className="pt-20 mr-2">
          <Image src={IMG5}></Image>
          <Image src={IMG6}></Image>
        </div>
        <div className="pt-10 mr-2">
          <Image src={IMG7}></Image>
          <Image src={IMG8}></Image>
        </div>
        <div>
          <Image src={IMG9}></Image>
          <Image src={IMG10}></Image>
        </div>
      </div>
    </div>
  );
}

export default Body;
