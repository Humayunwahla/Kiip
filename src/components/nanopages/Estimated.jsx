import React, { useState } from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'
import arrow from "../../assets/icons/downarrow.png"

function Estimated() {
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

    <div className=''>
        <div className=' font-aeroport text-center lg:mt-[71px] mt-[25px]'>
            <h1 className=' font-normal text-3xl'>Choose the estimated space</h1>
            <p className=' font-normal text-light'>Don't worry if it's not accurate since in the visit we will measure the real space of your items</p>
        </div>
        <div className='grid lg:grid-cols-2 justify-items-center mb-4 font-aeroport '>

        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>

        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>
        <div className=' justify-between flex sm:w-[459px] w-[280px] h-[107px] border-2 mt-3 items-center px-[17px]'>
            <div>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
            <div>
                <img src={arrow} alt="arrow"
                className='w-8 h-8' />
            </div>
        </div>

        </div>
        <div className='text-center mt-9 mb-10 font-aeroport'>
            <p className='font-normal text-lg'>Don't you know what size to reserve?</p>
           <Link to={"/estimatedvalue"}> <button  className='bg-[#3ccad1] w-auto px-4 h-[52px] rounded-2xl  mt-4 font-semibold '>Here we help you to quote</button></Link>
          </div>
    </div>
    </div>
  )
}

export default Estimated