import React from "react";

function Advert() {
  return (
    <div className="bg-[#1D1EB8] px-32 py-8 ">
      <div className=" text-[#5D5FEF] grid justify-items-center my-16">
        <h1 className="font-bold text-4xl py-6 text-white">
          เรียนกับ STEP ART ดียังไง
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 ">
        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 h-60  shadow-xl ">
            <div className="card-body ">
              <h2 className="card-title text-pink-600 grid justify-items-center ">
                เนื้อหาครบถ้วน
              </h2>
              <p>ไม่จําเป็นต้องมีพื้นฐานมาก่อน ก็สามารถวาดรูปได้</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 h-60 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title  text-pink-600 grid justify-items-center">
                จ่ายแค่หลักพัน ก็เริ่มเรียนได้เลย
              </h2>
              <p>
                เราอยากให้คนไทยได้เข้าถึงการเรียนรู้ที่นำไปสู่อาชีพที่มีคุณภาพโดยไม่ต้องจ่ายเงินแพงๆ
                ระหว่างที่่ยังไม่มีรายได้
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 h-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  text-pink-600 grid justify-items-center">
                คอร์สที่ออกแบบโดยผู้มีประสบการณ์
              </h2>
              <p>
                ผู้เรียนจะมีโอกาสได้สอบถามปรึกษาทั้งเรื่องเนื้อหาการเรียนและเส้นทางอาชีพจากอาจารย์โดยตรงเหมือนมีโค้ชคอยดูแลอย่างใกล้ชิด
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 h-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  text-pink-600 grid justify-items-center">
                ฝึกทักษะ design
              </h2>
              <p>ไม่จําเป็นต้องมีพื้นฐานมาก่อน ก็สามารถวาดรูปได้</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advert;
