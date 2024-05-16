import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] flex flex-col lg:flex-row rounded-xl my-8  bg-green-200 justify-around items-center'>
        <div className='font-secondary'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-secondary font-bold text-center pt-4'>Buy your dream plants</h1>
            <div className='flex items-center gap-8 pt-8'>
                <div className='flex gap-2 items-center'>
                    <p className='text-2xl font-bold'>10+</p>
                    <p>Plants</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-2xl font-bold'>100+</p>
                    <p>Customers</p>
                </div>
            </div>
            <button className='bg-green-800 text-white font-bold px-8 py-2 rounded-lg mt-4'>Shop Now</button>
        </div>
        <div className='w-1/2 h-full p-4'>
        <img src='/hero.png' alt='hero' className='w-full h-full rounded-xl  object-cover' />
        </div>
    </div>
  )
}

export default Banner