import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-6 flex flex-row justify-between border-b-2'>
        <div className='flex flex-row gap-2 justify-items-center'>
            <div className='mt-3'>
                <img src={Homeogo} width={36} height={36} 
                className='' alt=''/>
               
                
            </div>
           
            <div className='flex flex-row gap-2'>
                <p className='text-5xl '>|</p>
             <h2 className=' text-3xl mt-2'>Kiip</h2>
            </div>
        </div>
         
        <div className='flex flex-row gap-3    font-aeroport text-xl justify-items-center'>
               <div className='md:flex flex-row mt-2 gap-3 hidden font-aeroport font-bold '>
               <Link to="show"> <h2>Choose your plan</h2></Link>
                <h2>Quote your space</h2>
                </div> 
                <Link to="login">
                <button className='bg-[#3ccad1] font-aeroport font-normal sm:w-[195px] w-[95px] h-[52px]'>Log In</button>
        </Link></div>

          
        
    </div>
  )
}

export default Navbar