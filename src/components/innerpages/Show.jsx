import React from 'react'
import show1 from '../../assets/show1.png'
import  Homeogo from '../../assets/icons/logo.png'

function Show() {
  return (
    <div className='p-[20px] flex lg:flex-row flex-col'>
        <div className='lg:w-1/2'>
          <img src={show1} alt="" />
        </div>
        <div className='lg:w-1/2 content-center mt-16 '>
        <div className=' gap-2  '>
            <div className='flex flex-row justify-center gap-4 '>

            <div className='mt-3 '>
                <img src={Homeogo} width={36} height={36} 
                className='' alt=''/>    
            </div>      
            <div className='flex flex-row gap-4 '>
                <p className='text-5xl '>|</p>
             <h2 className=' text-3xl mt-2'>Kiip</h2>
            </div>
            </div>
            <div className='flex flex-col gap-3 mt-[98px] items-center'>
            <button className='bg-[#3ccad1]   sm:w-[395px] w-[195px] h-[52px]
             justify-center text-white font-semibold font-aeroport
             '>Start saving</button>

            <button className='   sm:w-[395px] w-[195px] h-[52px]
             justify-center border-2 font-semibold font-aeroport
             '>Go to my account</button>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default Show