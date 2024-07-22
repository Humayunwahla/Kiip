import React from 'react'
import workplace from '../../assets/workplace.png'

function Works() {
  return (
    <div className=' p-[16px] '>
        
        <div className=' flex lg:flex-row flex-col mt-[20px] '>
           <div className='lg:w-1/2'>
            <img src={workplace}
            className='sm:px-[47px]' alt="" />
        </div> 
        <div className='lg:w-1/2 content-center px-[16px] mt-16 '>
            <div className='text-center lg:text-left'> 
                <h2 className='font-bold sm:text-4xl text-2xl font-aeroport md:px-48 lg:px-0 sm:px-32 px-2'>Space limitations are a thing of the past.</h2>
                <p className='mt-2 font-semibold font-aeroport md:px-48 lg:px-0 sm:px-32 px-2 sm:text-lg text-md leading-6 mb-[16px] '>Create more room in your life for just $261.75 a  month, all without stepping out of your home. Here's how.</p>
                <button className='bg-[#3ccad1] rounded-2xl  w-[195px] h-[52px]
             justify-center text-white font-aeroport font-normal
             '>Choose your plan</button>
            </div>   
        </div>
        
        </div>
        
    </div>
  )
}

export default Works