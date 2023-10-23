import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useParams } from "react-router-dom";

import axios from "axios";

import Swal from "sweetalert2";

function Login() {
  //"/loginuser"
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (data) => {
    axios
      .post(`http://localhost:5000/loginuser`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === 1) {
          window.localStorage.setItem("userid", response.data.user.id);
          window.localStorage.setItem("useremail", response.data.user.email);
          window.localStorage.setItem(
            "userfullname",
            response.data.user.firstName + " " + response.data.user.lastName
          );
          if (response.data.user.email !== null) {
            navigate("/");
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div className=" flex justify-center items-center pb-10  h-screen ">
        <div className="bg-[#F3F3F3;]  w-[500px] h-[500px] mb-4 p-20 border flex flex-col space-y-2 rounded-md">
          <div className="flex  text-gray-900 mb-4 text-4xl justify-center">
            <h1>เข้าสู่ระบบ</h1>
          </div>

          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
              {errors.email && (
                <div className="my-3 text-normal text-red-500 text-xs italic">
                  Enter Email
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
              {errors.password && (
                <div className="my-3 text-normal text-red-500 text-xs italic">
                  Enter Password
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2 ">
              <button
                type="submit"
                className=" bg-green-600 text-white h-10  font-medium flex items-center justify-center cursor-pointer "
              >
                เข้าสู่ระบบ
              </button>
              {/*             <div className="bg-red-500  text-white h-10  font-medium flex items-center justify-center cursor-pointer">
                เข้าสู่ระบบด้วย Google{" "}
              </div> */}
              {/*             <div className="bg-orange-400  text-white h-10  font-medium flex items-center justify-center cursor-pointer">
                สมัครสมาชิก
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
