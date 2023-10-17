import React from "react";

function Header() {
  return (
    <div className="flex h-12  bg-[#F8DB46] justify-between px-24 ">
      <div className="font-bold flex items-center ">STEP ART</div>
      <div className="flex space-x-6 items-center">
        <p>คอร์สเรียน WorkShop</p>
        <p>บทความ</p>
        <p>ติดต่อเรา</p>
      </div>
      <div className="flex space-x-5 items-center">
        <div className="bg-[#5D5FEF] text-white rounded-full cursor-pointer px-2 py-1 ">
          เข้าสู่ระบบ
        </div>
        <div className="bg-[#5D5FEF] text-white rounded-full px-2 py-1 ">
          สมัครสมาชิก
        </div>
      </div>
    </div>
  );
}

export default Header;
