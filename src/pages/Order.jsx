import React from "react";

function Order() {
  return (
    <div className="px-32 mb-6">
      <div className="card lg:card-side bg-base-100 shadow-xl my-32 px-32 py-12 flex justify-center flex-col col-span-1">
        <figure className="w-[288px]">
          <img src={"/images/doodleArt.jpg"} alt="" />
        </figure>

        <div className="card-body ">
          <h2 className="card-title">รายการสั่งซื้อ</h2>
          <div>
            <div className="text-orange-500">WorkShop</div>
            <div className="text-gray-600">Doodle Art รุ่นที่1</div>
            <div className="text-gray-600">Sat,23 Oct 2023,14:00 -17.00</div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="card w-96 bg-base-100 h-60  shadow-xl ">
              <div className="  ">
                <div className="bg-cyan-300 h-10 flex items-center justify-center rounded-t-2xl">
                  <h2 className="card-title text-[#5D5FEF] grid  items-center justify-center ">
                    สรุปการสั่งซื้อ
                  </h2>
                </div>
                <br></br>
                <div className=" px-4">
                  <div className="flex justify-between">
                    <div>ราคาสินค้า</div>
                    <div>1,500 บาท</div>
                  </div>
                  <div className="py-6">
                    <div className="flex justify-between">
                      <div> จำนวน</div>
                      <div>1 คน</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-bold">สรุปยอดชำระ</div>
                      <div className="font-bold">1,500 บาท</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="bg-amber-300  px-6 py-1.5 rounded-xl ">
                      ชำระเงิน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5D5FEF]  text-white h-10 w-48 rounded-md font-medium flex items-center  justify-center cursor-pointer">
        วิธีชำระเงิน
      </div>
      <div className=" card lg:card-side bg-base-100  my-12  px-24 border-solid border-2 border-indigo-600">
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
