
"use client"
import Image from "next/image";
import { useState } from "react";
import CreateKyc from "../../../../Components/KYC/CreateKyc";
import { useParams } from "next/navigation";

export default function Home() {
  const [kycform, setkycform] = useState(false);

  const params = useParams();
  const pid = params?.provider_id;
  const id = params?.onboarding;


  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[600px] w-[100vw] bg-white h-[100vh] flex flex-col items-center justify-between py-[40px] gap-[10px]">
        {kycform === false ? (
          <>
         
            <div className="text-gray-900 text-center mx-auto w-full font-semibold h-[50px] text-[26px] w-[206px]">
             
            </div>
            <Image src="/images/m1.png" width={350} height={500} alt="" />

            <div>
              <h2 className="font-semibold text-[26px] w-[226px] mx-auto text-gray-900 text-center">
                This is the title of the onboarding
              </h2>

              <p className="text-gray-500 text-[14px] text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci omnis consectetur blanditiis.
              </p>
            </div>

            <div className="w-full flex justify-between px-[40px]">
              <button className="font-medium px-6 text-blue-500 p-[10px] tetx-[14px] ">
                Skip
              </button>
              <button onClick={()=>{setkycform(true)}} className="font-medium px-6 rounded-lg text-white bg-blue-500 p-[10px] tetx-[14px]">
                Next
              </button>
            </div>
          </>
        ) : (
          <>
          <CreateKyc id={id} pid={pid}/>
          </>
        )}
      </div>
    </div>
  );
}


