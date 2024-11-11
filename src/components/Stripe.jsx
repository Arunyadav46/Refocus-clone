import React from 'react'

function Stripe({values}) {
  const{url,number} = values
  return (
    <div className='w-[20%] border-b-2 border-t-2 border-r-2 px-6 py-6 mt-20 border-zinc-600 flex items-center justify-between'>
      <span><img src={url} alt="" /></span>
      <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe