import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[60vh] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward />
         </div>
         <h1 className='text-3xl font-medium mt-5'>Whatever heading.</h1>
        </div>
        <div className='down w-full'>
            {start===true && <> <h1 className='text-5xl font-semibold tracking-tight leading-none'>start a project</h1>
                <button className='rounded-full py-2 px-5 border-[1px] border-zinc-600 mt-10'>Contact Us</button></>
              }

              {para===true &&      <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>}

        
        </div>
        
    </div>
  )
}

export default Card