import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='w-40 px-4 py-2 rounded-full bg-zinc-100 text-black flex items-center justify-between'>
        <span className='text-sm font-semibold'>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button