import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import chair from '../../assets/icons/chair.png'
import box2 from '../../assets/icons/box2.png'
import { Link} from 'react-router-dom'

function Quote() {

  return (
    <div className=''>
      <div className='p-8 flex flex-row justify-between border-b-2'>
        <div className='flex flex-row gap-2 justify-items-center'>
            <div className='mt-3'>
                <img src={Homeogo} width={36} height={36} 
                className='' alt=''/>
               
                
            </div>
           
            <div className='flex flex-row gap-2'>
                <p className='text-5xl'>|</p>
             <h2 className=' text-3xl mt-2'>Kiip</h2>
            </div>
        </div>
        
        <div className='flex flex-row gap-3 text-white font-semibold text-xl justify-items-center'>
                <button className='bg-[#3ccad1] lg:w-[195px] w-[95px]font-aeroport font-normal h-[52px]'>Log In</button>
        </div>
            
        
    </div>

    <div className='flex flex-col items-center mt-16 mb-14 '>
        <div>
        <h2 className='text-4xl text-center font-semibold font-aeroport'>How do you prefer to quote?</h2>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 mx-auto mt-16 text-center'>
            <Link to="selfquote">
        <div className='w-[290px] h-[290px] border-2 content-center rounded-3xl'
        >
            <img src={chair} alt="chair"
            className='w-[104px] h-[102] mx-auto' />
            <h2 className='text-xl font-bold mt-6 font-aeroport'>Self-quote</h2>
            <p className='text-xl font-normal font-aeroport'> will do it using the space calculator</p>
        </div></Link>
        <div className='w-[290px] h-[290px] border-2 content-center rounded-3xl'>
            <img src={box2} alt="chair"
            className='w-[104px] h-[102] mx-auto' />
            <h2 className='text-xl font-bold mt-6 font-aeroport'>Assisted quote</h2>
            <p className='text-xl font-normal font-aeroport'> I want personalized help</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Quote