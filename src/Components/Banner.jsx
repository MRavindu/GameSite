import React from 'react'
import { useEffect, useState } from 'react'

function Banner({gameBanner}) {

    useEffect(() => {
        // console.log("Game Banner", gameBanner);
    }, []);


  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-lg'>
            <h2 className='text-[24px] text-white font-bold'>
                {gameBanner.name}
            </h2>
            <button className='bg-green-600 text-white px-2 p-1'>
                Download Now
            </button>
        </div>
        <img src={gameBanner.background_image} className='md:h-[400px] w-full object-cover rounded-lg' />
    </div>
  )
}

export default Banner