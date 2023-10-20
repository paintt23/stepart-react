import React from "react";

function OrderHistory() {
  return (
    <div className="px-32 mb-6 py-20">
      <h1 className="font-bold text-3xl py-6">ประวัติการสั่งซื้อ</h1>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-bold text-2xl">เลขที่อ้างอิง 0000001</h3>
          <br></br>
          <div className="grid h-20 flex-grow card bg-white  place-items-center py-48 border">
            <figure className="w-[288px] object-cover border rounded-md">
              <img src={"/images/doodleArt.jpg"} alt="" />
            </figure>
          </div>
        </div>
        {/* <div className="divider divider-horizontal"></div> */}
        <div className="flex items-center justify-center flex-col">
          <div>
            <h2 className="font-bold text-2xl ">Doodle Art</h2>
          </div>
          <br></br>
          <div>
            <div className="text-gray-600 py-2">
              วันที่ลงทะเบียน : 2023-10-22 , 10:04 :16
            </div>
            <div className="text-gray-600 py-2">ราคา 1,500 บาท</div>
            <div className="text-gray-600 ">ยอดรวม 1,500 บาท</div>
            <div className="text-gray-600 ">
              สถานะ{" "}
              <span className="text-green-500 text-bold py-2">
                ชำระเงินแล้ว
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
