import React, { useState } from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Recommend() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
     <div className='p-4 flex flex-row justify-between border-b-2'>
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
        <Link to="/login"><button className='bg-[#3ccad1] rounded-xl  hidden sm:block w-[155px] font-aeroport font-normal h-[52px]'>Log In</button></Link>
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
        <Link to="/login"> <button className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Log In</button>
        </Link> </div>
      </div>
    </nav>
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
            <Link to="/form">
        <button className='bg-[#3ccad1] w-[195px] h-[52px] rounded-2xl  font-aeroport'>CALCULATE</button>
        </Link></div>
    </div>
    </div>
</div>
</div>
  )
}

export default Recommend