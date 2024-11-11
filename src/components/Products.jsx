import React, { useState } from 'react'
import Product from './Product'
 import { motion } from 'framer-motion'

function Products() {
    var product = [
        {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},

        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false},

        {title:"YIR 2022",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:true},

        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:true},

        {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",live:true,case:true},
    ];

    const[pos,setpos] = useState(0);

    const mover = (val)=>{
      setpos(val*23)
    }

  return (
    <div className='mt-20 relative'>
        {product.map((val,index)=>{
            return   <Product key={index} val={val} mover ={mover} count={index}/>
        })}

        <div className='absolute  top-0 w-full h-full pointer-events-none'>
            <motion.div initial = {{y:pos}}
                        animate ={{y: pos+`rem`}}
             className='window absolute w-[30rem] h-[23rem]  left-[28%] rounded-md overflow-hidden'>
            <motion.div animate={{y:-pos+`rem`}}  className='w-full h-full  left-[28%] rounded-md'>
              <video className='w-full h-full object-cover autoplay loop muted' src="https://refocus-clone-aman.vercel.app/assets/arqitel-D3jJRwFT.mp4"></video>
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}}  className='w-full h-full left-[28%] rounded-md '>
              <video className='w-full h-full object-cover autoplay loop muted' src="https://refocus-clone-aman.vercel.app/assets/ttr-CUQdDHBj.mp4"></video>
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}} className='w-full h-full  left-[28%] rounded-md '>
              <video className='w-full h-full object-cover autoplay loop muted' src="https://refocus-clone-aman.vercel.app/assets/yir-BzJiRbqx.mp4"></video>
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}} className='w-full h-full  left-[28%] rounded-md'>
              <video className='w-full h-full object-cover autoplay loop muted' src="https://refocus-clone-aman.vercel.app/assets/yahoo-D7WzLbum.mp4"></video>
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}} className='w-full h-full  left-[28%] rounded-md'>
              <video className='w-full h-full object-cover autoplay loop muted' src="https://refocus-clone-aman.vercel.app/assets/rainfall-BZC7HG1T.mp4"></video>
            </motion.div>
            </motion.div>
        </div>
       
    </div>
  )
}
export default Products