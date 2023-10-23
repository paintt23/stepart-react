import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function DetailsWorkshop() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({});
  const url = "http://localhost:5000/images/";
  ///readcoursewithid/:id
  const readData = async (id) => {
    const res = await axios.get(`http://localhost:5000/readcoursewithid/${id}`);
    setCourseData(res.data);
  };

  useEffect(() => {
    readData(id);
  }, []);

  return (
    <div className="px-32 mb-6">
      <div className="card lg:card-side bg-base-100 shadow-xl my-32 px-32 py-4">
        <figure className="w-[288px]">
          <img
            src={`${url}${courseData?.photo}`}
            alt="drawing"
            className="h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseData.courseName}</h2>
          <div>{courseData.price}</div>
          <div>
            <div>สถานที่ อาคารวรณสรณ์ </div>
          </div>

          <div className="card-actions justify-end mt-16">
            <Link
              to={`/order/${courseData.id}`}
              className="btn btn-primary  bg-green-500 text-white"
            >
              สมัครเรียนที่นี่เลย
            </Link>
          </div>
        </div>
      </div>
      <div className="  text-3xl  h-10 w-48  font-bold flex items-center  justify-center ">
        รายละเอียด
      </div>

      <div className=" card lg:card-side bg-base-100  my-12  px-24 border-solid border-2 border-indigo-600">
        <div className="card-body">
          <h2 className="card-title">{courseData.shortDescription}</h2>
          <p>{courseData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsWorkshop;
