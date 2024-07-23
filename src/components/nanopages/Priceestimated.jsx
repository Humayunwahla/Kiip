import React, { useState } from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Priceestimated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
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
        <Link to="/form"><button className='bg-[#3ccad1]  hidden sm:block w-[195px] font-aeroport font-normal h-[52px]'>Log In</button></Link>
        </div>
            
        <nav className=" sm:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Close menu icon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}  id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-800">
          <button className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Log In</button>
          <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Choose your plan</button>
          <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Quote your space</button>
          
        </div>
      </div>
    </nav>
    </div> 
    <Link to={"/estimatedvalue"}>
    <div className=' flex flex-row mt-3 sm:mx-32 mx-12'>
    <button className="text-xl mt-1 w-[26px] h-[26px]">{"<"}</button>
        <p className='mt-2'>Go Back</p>
    </div></Link>
      <div className='items-center mx-auto sm:w-[700px]  '>

     <div className='flex sm:flex-row flex-col gap-4 justify-center items-center'>
     <div className=' justify-between flex sm:w-[315px] rounded-lg w-[250px] h-[110px] border-2 mt-3 items-center px-[17px]'>
            <div className='text-center mx-auto'>
                <h1 className='font-semibold text-[#21A3AA]'>Initial collection</h1>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
        </div>
        <div className=' justify-between flex sm:w-[315px] bg-[#21A3AA] rounded-lg w-[250px] h-[110px] border-2 mt-3 items-center px-[17px]'>
            <div className='text-center text-white mx-auto'>
                <h1 className='font-semibold  text-4xl mt-2'>$349.00</h1>
                <h1 className='font-extralight text-xs'>MXN/Monthly</h1>
                <p className='font-semibold text-md'>Month by Month</p>
                <p className='font-extralight text-xs'>Maximum flexibility, no commitment of stay.</p>
            </div>
        </div>
     </div>
     <div className='font-aeroport p-7'>
        <h1 className='font-semibold text-xl'>Check availability</h1>
        <p className='font-normal  mt-2'>Enter your details to check the availability of collection dates and times in your area, we will send you the details by email</p>
     </div>

     
        
    <div className='p-[25px] py-[29px] mb-7'>
    <form>
  <div className="space-y-12">
   

    <div className=" border-gray-900/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Names</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Last names</label>
          <div className="mt-2">
            <input type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Number</label>
          <div className="mt-2">
            <input type="number"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Address</label>
          <div className="mt-2">
            <input  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Refference</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Date</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Time</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>

    
  </div>

  <div className="mt-2 flex items-center justify-center gap-x-6">
   <Link to={"/finalestimated"}> <button type="button" className="text-sm font-semibold font-aeroport leading-6 w-[289px] h-[52px] rounded-2xl bg-[#3ccad1] text-white">Schedule</button></Link>
     </div>
</form>
        
    </div>
   
      </div>

    </div>
  )
}

export default Priceestimated