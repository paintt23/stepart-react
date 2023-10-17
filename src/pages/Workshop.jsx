import React from "react";
import Card from "../components/Card";

const Workshop = () => {
  return (
    <>
      <div className=" px-24 grid grid-cols-1 place-items-center">
        <div className=" text-[#5D5FEF] grid justify-items-center my-16">
          <h1 className="font-bold text-4xl py-6">คอร์สเรียนสอนวาดรูป</h1>
          <p className="text-xl">โปรแกรม Workshopสอนวาดรูป</p>
        </div>
        <div className=" w-[1240px] p-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center ">
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/doodleArt.jpg"}
            alt=""
            name={"Doodle Art"}
            shotDetails={"สอนวาดรูปลายเส้นการ์ตูนลายเส้น doodle"}
            price={"1500 ฿"}
          />
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/procreate.jpg"}
            alt=""
            name={"Procreate"}
            shotDetails={"Basic > Pro"}
            price={"4500 ฿"}
          />
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/drawing.jpg"}
            alt=""
            name={"Drowing guid"}
            shotDetails={"Basic"}
            price={"2500 ฿"}
          />
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/Illustrator.jpg"}
            name={"Illustrator"}
            shotDetails={"วาดการ์ตูนด้วยเมาส์ปากกา   "}
            price={"4000 ฿"}
          />
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/stickerline.jpg"}
            alt=""
            name={"Sticker line"}
            shotDetails={"สอนวาดสติ๊กเกอร์ไลน์ด้วย  Illustrator"}
            price={"4500 ฿"}
          />
          <Card
            class="rounded-t-lg"
            imageUrl={"/images/color.jpg"}
            alt=""
            name={"Color"}
            shotDetails={"สอนลงสีในProcreate"}
            price={"2500 ฿"}
          />
        </div>
      </div>
    </>
  );
};

export default Workshop;
