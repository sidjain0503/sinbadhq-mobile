"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { createkyclink } from "../../lib/mutations";
import { getallpackage } from "../../lib/queries";
import { useParams } from "next/navigation";

const CreateKyc = ({ id }) => {
  const [show, setshow] = useState(false);
  const [text, settext] = useState("Proceed");
  const [data, setdata] = useState({
    country: "indonesia",
    gender: "male",
  });
  const [error, seterror] = useState(false);
  const [product, setproduct] = useState({ link: "" });
  //   const [pid, setpid] = useState("")

  const mutation = useMutation(createkyclink);



  const onchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setdata({ ...data, [name]: value });
    // setpid(e.target.value)
  };

  const Create = async () => {
    console.log(data);
    settext("Redirecting wait..");
    try {
      const product = await mutation.mutateAsync({
        userData: data,
        id: id,
      });
      if (product) {
        if (typeof (window === "undefined")) {
          window.location.href = `${product.link}`;
        }
      }
    } catch (error) {
      console.error("error:", error);
      seterror(true);
    }
  };

  

  return (
    <>
      <div
       
        className={`${
          product.link.length === 0 ? "w-[400px]" : "w-[500px] "
        }  rounded-md bg-white`}
      >
        <div className="w-full flex flex-col items-center p-[30px]">
          <span className="text-lg font-semibold text-gray-900 ">
            User Details
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[20px] pt-0 p-[30px]">
          {product.link.length === 0 && (
            <>
              <Input
                label={"First Name "}
                name={"first_name"}
                value={data.first_name}
                placeholder="Enter First name"
                onchange={onchange}
              />
              <Input
                label={"Last Name"}
                name={"last_name"}
                value={data.last_name}
                placeholder="Enter Last name"
                onchange={onchange}
              />
              <Input
                label={"DOB"}
                name={"dob"}
                value={data.dob}
                placeholder="Enter DOB"
                type=""
                onchange={onchange}
              />

              {/* <Select
                    label={"Package"}
                    name={"packageid"}
                    value={data.packageid || ""}
                    placeholder="Packageid"
                    onchange={onchange}
                  >
                    {data.map((item, index) => {
                      return (
                        <option key={index} value={`${item.id}`}>
                          {item.name}{" "}
                        </option>
                      );
                    })}


                  </Select> */}

              <Select
                label={"Country"}
                name={"country"}
                value={data.country}
                placeholder="country"
                onchange={onchange}
              >
                <option value="indonesia">Indonesia</option>
                <option value="nigeria">Nigeria</option>
              </Select>

              <Select
                label={"Gender"}
                name={"gender"}
                value={data.gender}
                placeholder="Country"
                onchange={onchange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>

              <Input
                label={"BVM"}
                name={"bvm"}
                value={data.bvm}
                placeholder="BVM (optional)"
                type=""
                onchange={onchange}
              />
              {/*  */}

              {error && (
                <span className="text-rose-500 text-[14px]">
                  Please fill all credentials 
                </span>
              )}

              <button
                onClick={Create}
                className="w-full h-[44px] rounded-md bg-gray-200 text-[#6D7987] font-semibold text-md cursor-pointer"
              >
                {text}
              </button>
            </>
          )}

          <a
            href={product.link}
            className="w-full text-[12px] hover:text-blue-500 text-center"
          >
            {product.link}
          </a>
        </div>
      </div>
    </>
  );
};

export default CreateKyc;

const Input = ({ label, placeholder, name, value, onchange }) => {
  return (
    <div className="flex flex-col w-full gap-[6px]">
      <label htmlFor="name" className="text-sm  font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={`${name}`}
        value={value}
        onChange={onchange}
        placeholder={`${placeholder}`}
        className="p-[10px] rounded-md border boder-gray-200"
      />
    </div>
  );
};

const Select = ({ label, placeholder, name, value, onchange, children }) => {
  return (
    <div className="flex flex-col w-full gap-[6px]">
      <label htmlFor="name" className="text-sm font-normal text-gray-700">
        {label}
      </label>
      <select
        name={`${name}`}
        value={value}
        onChange={onchange}
        placeholder={`${placeholder}`}
        className="p-[10px] rounded-md border boder-gray-200 text-gray-500"
      >
        {children}
      </select>
    </div>
  );
};

const Phone = ({ label }) => {
  return (
    <div className="flex flex-col w-full gap-[6px]">
      <label htmlFor="name" className="text-sm font-normal text-gray-700">
        {label}
      </label>
      <div className="flex justify-between gap-[10px]">
        <div className="w-[60px] bg-white border border-gray-200 rounded-md flex justify-center items-center text-sm text-gray-700 px-[10px]">
          <select name="" id="">
            <option value=""> +88</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-[10px] rounded-md border boder-gray-200 w-full"
        />
      </div>
    </div>
  );
};
