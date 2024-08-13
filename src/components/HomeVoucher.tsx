import React from 'react'
import Image from "next/image";

const HomeVoucher = () => {
  return (
    <div className='homevoucher mb-10'>
        <div className=''>
        <Image src="/eyevouchers.png" alt="logo" className='!w-[500px] !h-[320px]' width={500} height={500}/>
        </div>
        <div className='w-[500] h-[120]'>
        <Image src="/eyemed.png" alt="logo" className='!w-[500px] !h-[320px]' width={500} height={500}/>
        </div>
    </div>
  )
}

export default HomeVoucher