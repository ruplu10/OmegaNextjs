import Image from "next/image";
import React from "react";
import { Button, ReadMore } from "./Button";
type SlideProps = {
  img: string;
  title: string;
  mainTitle: string;

};
export const Slide = ({ img, title, mainTitle }: SlideProps) => {
  return (
    <div className="outline-none border-none h-[80vh] relative">
     
        {/* <div className="absolute top-[50%] left-0 w-[40%] bg-white p-8"> */}
        <div className="absolute top-[70%] p-8 right-4 bg-slate-500 bg-transparent">
          <h1 className='title_text'><b>{title}</b></h1>
          <h2 className='subtitle'>{mainTitle}</h2>
          <ReadMore 
          type="button"
    
          />
        </div>
        <Image src={img} width={1024} height={500} alt="image title" className="w-full h-full object-cover"/>
    
    </div>
  );
};
