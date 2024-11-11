import React from 'react'
import {motion} from "framer-motion"

function Marque({imgurl,direction}) {
  return (
    <div className='flex w-full py-8  overflow-hidden'>

      <motion.div initial={{x:direction ==='left'?"0":"-100%"}} animate={{x: direction==="left"?"-100%" :"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-4 pr-40'>
      {imgurl.map((url,index)=>{
           return <img key={index}  src={url} alt=""/>
       })}
      </motion.div>

      <motion.div initial={{x:direction ==='left'?"0":"-100%"}} animate={{x: direction==="left"?"-100%" :"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-4 pr-40'>
      {imgurl.map((url,index)=>{
           return <img key={index}  src={url} alt=""/>
       })}
      </motion.div>

       
    </div>
  )
}

export default Marque