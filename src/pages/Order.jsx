import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function Order() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({});
  const url = "http://localhost:5000/images/";
  const [file, setFile] = useState(null);
  ///readcoursewithid/:id
  const readData = async (id) => {
    //"http://localhost:5000/readalladmin"
    const res = await axios.get(`http://localhost:5000/readcoursewithid/${id}`);
    setCourseData(res.data);
  };

  useEffect(() => {
    readData(id);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    formData.append("id", id);
  };

  console.log("1 object:", courseData);
  return (
    <div className="px-32 mb-6">
      <div className="card lg:card-side bg-base-100 shadow-xl my-32 px-32 py-12 flex justify-center flex-col col-span-1">
        <figure className="w-[288px]">
          <img
            src={`${url}${courseData?.photo}`}
            alt="drawing"
            className="h-full object-cover py-2"
          />
        </figure>
        <form onSubmit={handleOnSubmit}>
          <div className="card-body ">
            <h2 className="card-title">รายการสั่งซื้อ</h2>
            <div>
              <div className="text-orange-500">WorkShop</div>
              <div className="text-gray-600">
                {courseData.courseName} รุ่นที่1
              </div>
              <div className="text-gray-600">{courseData.dateOpenCours}</div>
            </div>
            <div className="py-10">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="file-input file-input-bordered file-input-warning w-full max-w-xs "
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <div className="card w-96 bg-base-100 h-60  shadow-xl ">
                <div className="  ">
                  <div className="bg-[#BECDFF;] h-10 flex items-center justify-center rounded-t-2xl">
                    <h2 className="card-title text-[#5D5FEF] grid  items-center justify-center ">
                      สรุปการสั่งซื้อ
                    </h2>
                  </div>
                  <br></br>
                  <div className=" px-4">
                    <div className="flex justify-between">
                      <div>ราคาสินค้า</div>
                      <div>{courseData.price} บาท</div>
                    </div>
                    <div className="py-6">
                      <div className="flex justify-between">
                        <div> จำนวน</div>
                        <div>1 คน</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="font-bold">สรุปยอดชำระ</div>
                        <div className="font-bold">{courseData.price} บาท</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-amber-400  px-12 py-1.5 rounded-xl "
                      >
                        ชำระเงินxxxx
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className=" h-10 w-48 text-3xl font-medium flex items-center  justify-center cursor-pointer">
        วิธีชำระเงิน
      </div>
      <div className=" text-lg card lg:card-side bg-base-100  my-12  px-24 border-solid border-2 border-indigo-600">
        <div className="card-body">
          <h2 className="card-title t">ชำระด้วยการโอนเงิน</h2>

          <div>1. คลิกชำระเงินเพื่อเริ่มเรียน</div>
          <div>
            2.ชำระเงินตามยอดหน้าจอบัญชีสำหรับโอนเงิน ชื่อบัญชี : บริษัท มานีมีนะ
            คอร์ปอเรชั่น จำกัด เลขที่บัญชี : 424-0290XX-1 พร้อมเพย์ : 0971456536
          </div>

          <div>3. คลิก Choose File เลือกภาพสลิปการโอน 4. รอการอนุมัต</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
