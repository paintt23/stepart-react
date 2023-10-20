import React from "react";

function Login() {
  return (
    <>
      <div className=" flex justify-center items-center pb-10  h-screen ">
        <div className="bg-[#F3F3F3;]  w-[500px] h-[500px] mb-4 p-20 border flex flex-col space-y-2 rounded-md">
          <div className="flex  text-gray-900 mb-4 text-4xl justify-center">
            <h1>เข้าสู่ระบบ</h1>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex flex-col space-y-2 ">
            <div className=" bg-green-600 text-white h-10  font-medium flex items-center justify-center cursor-pointer ">
              เข้าสู่ระบบ
            </div>
            <div className="bg-red-500  text-white h-10  font-medium flex items-center justify-center cursor-pointer">
              เข้าสู่ระบบด้วย Google{" "}
            </div>
            <div className="bg-orange-400  text-white h-10  font-medium flex items-center justify-center cursor-pointer">
              สมัครสมาชิก
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
