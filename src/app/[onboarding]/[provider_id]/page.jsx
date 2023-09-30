
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
    <div className="flex justify-center w-full bg-gray-100">
      <div className="max-w-[600px] w-[100vw] bg-white h-[100vh] flex flex-col items-center justify-between py-[40px] gap-[10px]">
        {kycform === false ? (
          <>
         
            <div className="text-gray-900 text-center mx-auto w-full font-semibold h-[50px] text-[26px] w-[206px]">
             
            </div>
            <Image src="/images/m1.png" width={350} height={500} alt="" className="w-[320px]"/>

            <div>
              <h2 className="font-semibold text-[26px] w-[325px] mx-auto mb-[20px] text-gray-900 text-center">
              Qasswa Direct Umrah Visa Application
              </h2>

              <p className="w-[325px] text-gray-500 text-[14px] text-center">
              You are authorizing Qasswa to view your details for the purposes of issuing a direct visa
              </p>
            </div>

            <div className="w-full flex justify-end px-[40px]">
              
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


