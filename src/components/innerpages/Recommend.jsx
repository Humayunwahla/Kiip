import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Recommend() {
  return (
    <div>
    <div className='md:p-8 p-2 flex flex-row justify-between border-b-2'>
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
            <button className='bg-[#3ccad1] lg:w-[195px] w-[95px] h-[52px] font-aeroport'>Log In</button>
    </div>
        
    
</div>

  
<div className='flex flex-col items-center mt-24 '>
    <div>
    <h2 className='text-4xl text-center  font-semibold font-aeroport'>We recommend</h2>
    </div>
    <div className='flex flex-row gap-10 mx-auto mt-8 '>
        
    <div className='lg:w-[870px] w-auto lg:h-[473px] h-auto border-2 rounded-3xl p-[25px] py-[29px] mb-7'>
        <div className='flex flex-col mt-3'>
        <div>
            <h2 className='text-3xl text-center md:text-left font-semibold font-aeroport'>Added Items</h2>
        </div>
        <div className='w-[350px] h-[95px] mt-8 bg-[#EFEFEF] font-aeroport'>
                  <h2>Added items are here{}</h2>                   {/**Added items are here to add */}
        </div>
        </div>
        <div className='flex flex-col mt-3'>
        <div>
            <h2 className='text-3xl text-center md:text-left font-semibold font-aeroport'>We recommend</h2>
        </div>
        <div className='w-[350px] h-[95px] mt-8 bg-[#EFEFEF] font-aeroport'>
                  <h2>Added items are here{}</h2>                   {/**Added items are here to add */}
        </div>
        </div>
        <div className='md:text-right text-center mt-5 '>
            <Link to="recomend">
        <button className='bg-[#3ccad1] w-[195px] h-[52px] rounded-2xl  font-aeroport'>CALCULATE</button>
        </Link></div>
    </div>
    </div>
</div>
</div>
  )
}

export default Recommend