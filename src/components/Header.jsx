import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const menus = [
    {
      title: "workshop",
      url: "/workshop",
    },
    {
      title: "orderHistory",
      url: "/orderHistory",
    },
  ];
  return (
    <div className="flex h-12  bg-[#F8DB46] justify-between px-24 ">
      <div className="font-bold flex items-center ">
        <Link to={"/"}> STEP ART </Link>
      </div>
      <div className="flex space-x-6 items-center ">
        <nav>
          <ul>
            {menus.map((item, index) => (
              <li key={`MENU_${index}`}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/*         <p>คอร์สเรียน WorkShop</p>
        <p>บทความ</p>
        <p>ติดต่อเรา</p> */}
      </div>
      <div className="flex space-x-5 items-center">
        <div className="bg-[#5D5FEF] text-white rounded-full cursor-pointer px-2 py-1 ">
          <Link to="login"> เข้าสู่ระบบ</Link>
        </div>
        <div className="bg-[#5D5FEF] text-white rounded-full px-2 py-1 ">
          <Link to="register"> สมัครสมาชิก </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
