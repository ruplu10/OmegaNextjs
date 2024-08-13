import React from "react";
import Image from "next/image";

const Branchimage = () => {
  return (
    <div className="flex justify-center row w-full bg-[#2f6a8f] h-[50vh] items-center mt-8 mb-28 ">
      <div className="w-1/4 ">
        <div className=" bg-[#2f6a8f]   h-[50%] pb-[30%] ">
          <h1 className="font-black text-white pl-9"> Hayes Eye Clinic</h1>
          <h1 className=" text-white pl-9">814A Uxbridge Road Hayes,</h1>
          <h1 className=" text-white pl-9">Middlesex, UB4 0RS</h1>
        </div>
        <div className="bg-[#2f6a8f]  pl-9 h-[50%] ">
          <h1 className="font-black text-white"> Southhall Eye Clinic</h1>
          <h1 className=" text-white">31-33 King Street Southall,</h1>
          <h1 className=" text-white">Middlesex, UB2 4DG</h1>
        </div>
      </div>
      <div className="w-3/4 h-[50vh] ">
        <Image src="/branchimage.png" alt="image" width={500} height={500} className="h-full object-cover w-full"/>
      </div>
    </div>
  );
};

export default Branchimage;
