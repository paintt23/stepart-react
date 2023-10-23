import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function Workshop() {
  const [courseData, setCourseData] = useState([]);
  const url = "http://localhost:5000/images/";

  const readCourse = async () => {
    const res = await axios.get("http://localhost:5000/readallcourse");
    setCourseData(res.data);
  };

  useEffect(() => {
    readCourse();
  }, []);

  return (
    <>
      <div className=" px-24 grid grid-cols-1 place-items-center">
        <div className=" text-[#5D5FEF] grid justify-items-center my-16">
          <h1 className="font-bold text-4xl py-6">คอร์สเรียนสอนวาดรูป</h1>
          <p className="text-xl">โปรแกรม Workshopสอนวาดรูป</p>
        </div>
        <div className=" w-[1240px] p-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center ">
          {courseData.map((item, index) => (
            <Card
              key={index}
              class="rounded-t-lg"
              courseId={item?.id} //มาจากcourseData
              imageUrl={item.photo}
              alt=""
              name={item?.courseData}
              shotDetails={item?.shotDetails}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Workshop;
