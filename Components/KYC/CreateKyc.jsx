"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { createkyclink } from "../../lib/mutations";
import { getallpackage } from "../../lib/queries";
import { useParams } from "next/navigation";

const CreateKyc = ({ id, pid }) => {
  const [show, setshow] = useState(false);
  const [text, settext] = useState("Proceed");
  const [data, setdata] = useState({
    nationality: "indonesia",
    gender: "male",
    provider_id: `${pid}`,
    first_name: "",
    last_name: "",
    address: "",
    email: "",
   
  });
  const [error, seterror] = useState(false);
  const [product, setproduct] = useState({ link: "" });
  const [proceed, setproceed] = useState(false);

  const mutation = useMutation(createkyclink);

  const onchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setdata({ ...data, [name]: value });
    // setpid(e.target.value)

    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.email !== "" &&
      data.address !== ""
    ) {
      setproceed(true);
      seterror(false);
    } else {
      setproceed(false);
    }
  };

  const [numid, setnumid] = useState("+62");

  const Create = async () => {
    const phonenumber = data.phone_number;

    const kycdata = {
      ...data,
      phone_number: `${numid}${phonenumber}`,
    };

    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.email !== "" &&
      data.address !== ""
    ) {
      settext("Redirecting wait..");
      seterror(false);
      setproceed(true);
      try {
        const product = await mutation.mutateAsync({
          userData: kycdata,
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
        setproceed(false);
        settext("Proceed");
      }
    } else {
      seterror(true);
      setproceed(false);
    }
  };

  return (
    <>
      <div
        className={`${
          product.link.length === 0 ? "w-[400px]" : "w-[500px] "
        }  rounded-md bg-white`}
      >
        <div className="flex w-full flex-col items-center justify-center gap-[20px] pt-0 p-[30px]">
          {product.link.length === 0 && (
            <>
              <Input
                label={"First Name "}
                name={"first_name"}
                value={data.first_name}
                placeholder="Enter First name"
                onchange={onchange}
                type="text"
              />
              <Input
                label={"Last Name"}
                name={"last_name"}
                value={data.last_name}
                placeholder="Enter Last name"
                onchange={onchange}
                type="text"
              />
              <Input
                label={"Email"}
                name={"email"}
                value={data.email}
                placeholder="Enter your email"
                onchange={onchange}
                type="email"
              />
              <Mobilenumber
                label={"Mobile No."}
                name={"phone_number"}
                value={data.phone_number}
                placeholder="Enter your number"
                onchange={onchange}
                type="email"
                nationality={`${data.nationality}`}
                numid={numid}
                setnumid={setnumid}
              />
              <Input
                label={"Address"}
                name={"address"}
                value={data.address}
                placeholder="Enter your address"
                onchange={onchange}
                type="text"
              />
              {/* <Input
                label={"DOB"}
                name={"dob"}
                value={date}
                placeholder="Enter DOB"
                type="date"
                onchange={handledate}
              /> */}

              <Select
                label={"Nationality"}
                name={"nationality"}
                value={data.nationality}
                placeholder="nationality"
                onchange={onchange}
              >
                <option className="py-4 px-4" value="indonesia">
                  Indonesia
                </option>
                <option className="py-4 px-4" value="nigeria">
                  Nigeria
                </option>
              </Select>

              {data.nationality === "nigeria" && (
                <Input
                  label={"BVN"}
                  name={"bvn"}
                  value={data.bvn}
                  placeholder="BVN "
                  type=""
                  onchange={onchange}
                />
              )}

              {/*  */}

              {error && (
                <span className="text-rose-500 text-[14px]">
                  Please fill all credentials
                </span>
              )}

              <button
                onClick={Create}
                className={`w-full h-[44px] rounded-md  ${
                  proceed
                    ? " bg-sinbadhq text-white "
                    : " bg-gray-200 text-[#6D7987] "
                } bg-gray-200 text-[#6D7987] font-semibold text-md cursor-pointer `}
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

const Input = ({ label, placeholder, name, value, onchange, type }) => {
  return (
    <div className="flex flex-col w-full gap-[6px]">
      <label htmlFor="name" className="text-sm  font-medium text-gray-700">
        {label}
      </label>
      <input
        type={`${type}` || "text"}
        name={`${name}`}
        value={value}
        onChange={onchange}
        placeholder={`${placeholder}`}
        className="p-[10px] rounded-md border boder-gray-200"
      />
    </div>
  );
};

const Mobilenumber = ({
  label,
  placeholder,
  name,
  value,
  onchange,
  setnumid,
  numid,
}) => {
  const handlephoneid = (e) => {
    setnumid(e.target.value);
    console.log(numid);
  };

  return (
    <div className="flex flex-col w-full gap-[6px]">
      <label htmlFor="name" className="text-sm  font-medium text-gray-700">
        {label}
      </label>
      <div className="w-full flex gap-[10px]">
        <select
          name=""
          id=""
          onChange={handlephoneid}
          value={numid}
          className="p-[10px] rounded-md border boder-gray-200 text-gray-500 flex justify-center items-center"
        >
          <option className="py-4 px-4" value="+234">
            +234
          </option>
          <option className="py-4 px-4" value="+62">
            +62
          </option>
        </select>
        <input
          type={"text"}
          name={`${name}`}
          value={value}
          onChange={onchange}
          placeholder={`${placeholder}`}
          className="p-[10px] rounded-md border boder-gray-200 w-full"
        />
      </div>
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
