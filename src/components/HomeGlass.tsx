import React from "react";
import Image from "next/image";
// import gif from '../../public/sunglass.gif'
import gif from '../../public/sunglass.gif'


const HomeGlass = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col justify-center items-center mb-8 w-[100%]">
        <h1 className="text-sky-500">Introducing</h1>

        <h1 className="text-blue-800 font-semibold flex items-center justify-center w-[35%]">
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
          <span className="px-4">Smart Glasses</span>
          <span className="flex-grow bg-black h-[1px] w-[25%]"></span>
        </h1>
      </div>

      <div className="flex flex-row  w-[100%]">
        <div className="w-[30%]">
          <Image
            src="/glasses.png"
            alt="image"
            width={500}
            height={500}
            className="w-[100%]"
          ></Image>
        </div>
        <div className="w-[40%]">
          <Image
            src={gif}
            // src='/sunglass.gif'
            alt="image"
            width={500}
            height={500}
             className="w-[100%] h-full object-cover"
          />
        </div>
        <div className="w-[30%]">
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/jKOJjGfr4Qw?autoplay=1&mute=1&loop=1&si=3oWp1JavPNWB90x5"
            allow="autoplay; encrypted-media"
            className="w-[100%] h-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeGlass;
