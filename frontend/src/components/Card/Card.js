import React from 'react'
import { Link } from "react-router-dom";
function Card({item}) {
  return (
    
    <div className='flex w-[180px] h-full px-[5px] md:w-[240px] justify-center items-center ml-2 md:ml-4 mt-2'>
      <Link to={`product/${item.id}`||`products/:id/product/${item.id}`}>
        <img src={"http://localhost:1337"+item?.attributes?.image?.data?.attributes?.url} alt="" className='h-[220px] w-[200px] lg:h-[280px] lg:w-[230px] object-cover hover:scale-105 duration-300'/>
        <div className='flex flex-col my-2 items-center'>
        <h className="font-semibold  break-all text-[13px]  ">{item?.attributes.title}</h>
        <h className="font-semibold">Rs {item?.attributes.price}</h>
        </div>
        
        </Link>
      
    </div>
  )
}

export default Card
