import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Addedquote() {
  return (
    <div>
        <div className='sm:p-8 p-2 flex flex-row justify-between border-b-2'>
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
        <button className='bg-[#3ccad1] md:w-[195px] w-[95px] h-[52px] font-aeroport'>Log In</button>
        </div>   
    </div>

      
    <div className='flex flex-col items-center mt-24 '>
        <div>
        <h2 className='text-4xl font-semibold font-aeroport'>Self-quote</h2>
        </div>
        <div className='flex flex-row gap-10 mx-auto mt-8 '>
            
        <div className='lg:w-[870px] w-auto lg:h-[473px] h-auto border-2 rounded-3xl p-[25px]  mb-7'>
        <div className='flex flex-col'>
            <div>
                <h2 className='text-3xl font-semibold text-center sm:text-left font-aeroport'>Select Catagory</h2>
            </div>
            <div className='mt-4 text-center  space-x-2 space-y-3'>
                <button className='w-[126px] h-[54px] bg-[#3ccad1]  rounded-full font-aeroport'>Bedroom</button>
                <button className='w-[126px] h-[54px] border-2  rounded-full font-aeroport'>Living Room</button>
                <button className='w-[180px] h-[54px] border-2  rounded-full font-aeroport'>Cooking and Washing</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Others</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Boxes</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Office</button>
            </div>
            </div> 
            <div className='flex flex-col mt-3'>
            <div>
                <h2 className='text-3xl text-center sm:text-left font-semibold font-aeroport'>Select Items</h2>
            </div>
            <div className='mt-4 space-y-3 text-center space-x-2'>
                <button className='w-[126px] h-[54px] border-2 rounded-full font-aeroport'>Single Bed</button>
                <button className='w-[126px] h-[54px] border-2  rounded-full font-aeroport'>Double Bed</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Cradle</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Bunk Bed</button>
                <button className='w-[110px] h-[54px] border-2  rounded-full font-aeroport'>Bunk Bed</button>
            </div>
            </div> 
            <div className='flex flex-col mt-3'>
            <div>
            <h2 className='text-3xl text-center sm:text-left font-semibold font-aeroport'>Added Items</h2>
            </div>
            <div className='w-[350px] h-[95px] mt-8 bg-[#EFEFEF] font-aeroport'>
                      <h2>Added items are here{}</h2>                   {/**Added items are here to add */}
            </div>
            </div>
            <div className='sm:text-right text-center md:-mt-10 mt-5'>
                <Link to="recomend">
            <button className='bg-[#3ccad1] w-[195px] h-[52px] rounded-2xl font-aeroport '>CALCULATE</button>
            </Link></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Addedquote