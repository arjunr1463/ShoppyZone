import React from 'react';
import Payment from "../../assets/Footer/payment.png"

function Footer() {
  return (
    <div className='h-[50px] flex justify-between items-center '>
      <div className='mx-2 sm:mx-4 w-[300px]'>
        <h className="text-[8px] sm:text-[10px] md:text-[12px] font-semibold">ShoppyZone© Copyright 2023.All Rights Reserved</h>

      </div>
      <div className='mx-2 sm:mx-5 '>
        <img src={Payment} alt="" className='h-[50px] sm:h-[75px] w-[300px]'/>
      </div>
        

      
    </div>
  )
}

export default Footer
