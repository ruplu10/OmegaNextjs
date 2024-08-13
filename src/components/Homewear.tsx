import React from "react";
import Image from "next/image";
const Homewear = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col justify-center items-center mb-8 w-[100%]">
        <h1 className="text-sky-500">Our Selection Of</h1>

        <h1 className="text-blue-800 font-semibold flex items-center justify-center w-[35%]">
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
          <span className="px-4">Designer Eyewear</span>
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
        </h1>
      </div>
      <div className="w-[100%] flex flex-row">
        <div className="w-[50%]">
          <Image
            src="/calvin.png"
            alt="image"
            width={500}
            height={500}
            className="w-[100%]"
          ></Image>
        </div>

        <div className="w-[25%]">
          <Image
            src="/calvinlogo.png"
            alt="image"
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="w-[50%]">
          <Image src="/gucci.png" alt="image" width={500} height={500} className="w-[100%]"></Image>
        </div>

        <div className="w-[25%]">
          <Image
            src="/guccilogo.png"
            alt="image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>

      <div className="w-[100%] flex flex-row">
        <div className="w-[25%]">
          <Image
            src="/gantlogo.png"
            alt="image"
            width={500}
            height={500}
            className="object-cover"
          ></Image>
        </div>

        <div className="w-[50%]">
          <Image src="/gant.png" alt="image" width={500} height={500} className="w-[100%]"></Image>
        </div>

        <div className="w-[25%]">
          <Image
            src="/gantlogo.png"
            alt="image"
            width={500}
            height={500}
            className="object-cover"
          ></Image>
        </div>

        <div className="w-[50%]">
          <Image src="/hugo.png" alt="image" width={500} height={500} className="w-[100%]"></Image>
        </div>
      </div>
    </div>
  );
};

export default Homewear;
