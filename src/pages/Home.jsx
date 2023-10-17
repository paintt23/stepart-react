import React from "react";
import Header from "../layout/Layout";
import homePic from "../../images/homepage/Homepic.png";
import Workshop from "./Workshop";
import Advert from "./Advert";

const Home = () => {
  return (
    <>
      <div className="font-bold text-[#5D5FEF]   grid grid-cols-3 px-24">
        <div className="flex justify-center flex-col col-span-1">
          <h1 className="text-9xl">BOOST</h1>
          <h3 className="text-4xl">YOUR DESIGN SKILLS</h3>
          <p>คอร์สเรียน Workshop วาดรูป </p>
          <p>สามารถเลือกเรียนได้ทุกอุปกรณ์</p>
        </div>
        <div className="col-span-2  flex justify-end">
          <div className=" flex justify-end">
            <img src={homePic} className="flex justify-center mt-8" />
          </div>
        </div>
      </div>
      <Workshop />
      <Advert />
    </>
  );
};

export default Home;
