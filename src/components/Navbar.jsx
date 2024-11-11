import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-4  flex items-center justify-between border-b-2 border-zinc-700'>
        <div className='flex items-center'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
       <div className='Links flex gap-14 ml-20'>
           {["Home","Work","Culture","","News"].map((elem,index)=>{
            return elem.length===0 ? <span key={index} className='w-[1.5px] h-6 bg-zinc-700'></span> :<a key={index} className='flex items-center gap-1' href="#"> {index===1 && (<span className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>)} {elem}</a>})}
       </div>
        </div>
        <Button/>
    </div>
  )
}
export default Navbar