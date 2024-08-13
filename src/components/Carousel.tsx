"use client";
import React from 'react'
import { Slide } from './Slide';
import Slider from "react-slick";


const Carousel = () => {
var settings={
  dots: true,
  infinite:true,
  slideToShow:1,
  slideToScoll:1,
  autoplay: true,
  pauseOnHover: true,
};
const slideData=[
    {
        id : 0,
        img: "/lensesGIF.gif",
        title:"Shop Now st 20% off",
        mainTitle: "We have a great track record in fitting previously unsuccessful wearers of contact lenses.",
        
    },
    {
      id : 1,
      img: "/smallkid.jpg",
      title:"Enhanced Eye Test",
      mainTitle: "OCT Scans Available",
      
  }
]
  return (
    <div className="">
      <div className="">
        <Slider className='overflow-hidden'  {...settings}>

          {slideData.map((item)=> (
            <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
           
            />
          )) }
        </Slider>
      </div>
    </div>
    
  )
}

export default Carousel