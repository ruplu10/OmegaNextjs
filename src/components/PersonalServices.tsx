import React from "react";
import Image from "next/image";

export const PersonalServices = () => {
  return (
    <div className="mb-10 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-8 w-[100%]">
        <h1 className="text-sky-500">Our Personal Services</h1>
        



<h1 className="text-blue-800 font-semibold flex items-center justify-center w-[35%]">
  <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
  <span className="px-4">Eye Care Services</span>
  <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
</h1>



      </div>
      <div className="flex flex-row justify-between mr-[20%] ml-[20%]">
        <div className="flex  flex-col mb-10 items-center">
          <h1 className="text-black font-semibold"> 3D OCT Scan</h1>
          <Image src="/oct.png" alt="image" width={100} height={100}></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>

        <div className="flex  flex-col mb-10 items-center">
          <h1 className="text-black font-semibold"> Enhanced Eye Tests</h1>
          <Image
            src="/eyetest.png"
            alt="image"
            width={100}
            height={100}
          ></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>
        <div className="flex  flex-col mb-10 items-center">
          <h1 className="text-black font-semibold flex flex-col justify-center items-center">
            {" "}
            Contact Lens{" "}
          </h1>
          <Image src="/lens.png" alt="image" width={100} height={100}></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between mr-[20%] ml-[20%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-semibold"> Children’s Eyecare</h1>
          <Image
            src="/childreneyecare.png"
            alt="image"
            width={100}
            height={100}
          ></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>

        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-black font-semibold"> Hearing</h1>
          <Image
            src="/hearing.png"
            alt="image"
            width={100}
            height={100}
          ></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-black font-semibold"> Dry Eye Care </h1>
          <Image src="/dryeye.png" alt="image" width={100} height={100}></Image>
          <h1 className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget sem facilisis,
          </h1>
        </div>
      </div>
    </div>
  );
};
