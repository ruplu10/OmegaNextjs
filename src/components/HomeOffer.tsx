import React from 'react'
import { GetVoucher } from './Button'

export const HomeOffer = () => {
  return (
   
   <div className="homeOffer mt-[-6%] relative">
    <div className="hv1 flex flex-col justify-center items-center ">
    <h5 className="font-black text-white text-2xl">50% OFF </h5> <h1 className="font-black text-white">Your next eye test</h1>
    </div>
    <div className="hv2 flex flex-col justify-center items-center" >
    <h1 className="font-black text-white">Download you voucher and </h1> 
            <h1 className="font-black text-white">request you appointment</h1>
            <p className="font-black text-white">T&C applies ask for more detail in store</p>
            <div className ="rotate">
            </div>
    </div>

    <div className ="hv3 flex justify-center items-center">
            {/* <button  >Get your voucher</button> */}
            <GetVoucher 
          type="button"
    
          />
        </div>
   </div>

  )
}
