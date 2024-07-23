import React, { useState } from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'
import calender from '../../assets/icons/calendar.png'
import circle from '../../assets/icons/circle.png'

function Finalestimated() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='bg-gray-100 h-full'>
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
            <Link to={"/estimatedprice"}>
    <div className=' flex flex-row mt-3 sm:mx-32 mx-12'>
    <button className="text-xl mt-1 w-[26px] h-[26px]">{"<"}</button>
        <p className='mt-2'>Go Back</p>
          </div></Link>
        <div className='items-center mx-auto sm:w-[744px]  '>

            <div className='flex md:flex-row flex-col gap-4 justify-center items-center'>
     <div className=' justify-between flex sm:w-[363px] rounded-lg w-[250px] h-[110px] border-2 mt-3 items-center px-[17px]'>
            <div className='text-center mx-auto'>
                <h1 className='font-semibold text-[#21A3AA]'>Initial collection</h1>
                <h1 className='font-semibold'>Mini</h1>
                <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
                <p className='font-semibold'>$349.00 MXN</p>
            </div>
        </div>
        <div className=' justify-between flex sm:w-[363px] bg-[#21A3AA] rounded-lg w-[250px] h-[110px] border-2 mt-3 items-center px-[17px]'>
            <div className='text-center text-white mx-auto'>
                <h1 className='font-semibold  text-4xl mt-2'>$349.00</h1>
                <h1 className='font-extralight text-xs'>MXN/Monthly</h1>
                <p className='font-semibold text-md'>Month by Month</p>
                <p className='font-extralight text-xs'>Maximum flexibility, no commitment of stay.</p>
            </div>
        </div>
            </div>
                <div className='flex lg:flex-row flex-col items-center gap-4'>
            <div>
                {/**1st */}
                <div className='mt-7'>
                   <h1 className='font-aeroport font-semibold text-2xl'>Date of collection</h1>
                   <div className='flex p-2 flex-row items-center bg-white h-[44px] sm:w-[363px] w-[250px] gap-2'>
                    <img src={calender} alt="" 
                    className='w-[13.5] h-[15px]'/>
                    <h1 className='font-aeroport font-extralight'>2024-07-24 at 09:30 AM</h1>
                   </div>
                </div>
                {/**2nd */}
                <div className='mt-6  '>
                  <h1 className='font-aeroport font-semibold text-2xl'>Payment method</h1>
                  <p className='font-aeroport font-extralight mt-1'>Select a payment method</p>
                  <div className='flex p-2 flex-row my-2 items-center bg-white h-[44px] sm:w-[363px] w-[250px] gap-2'>
                    <img src={circle} alt="" 
                    className='w-[13.5] h-[15px]'/>
                    <h1 className='font-aeroport font-extralight'>Credit card</h1>
                   </div>
                   <div className='flex p-2  my-2 flex-row items-center bg-white h-[44px] sm:w-[363px] w-[250px] gap-2'>
                    <img src={circle} alt="" 
                    className='w-[13.5] h-[15px]'/>
                    <h1 className='font-aeroport font-extralight'>Electronic Transfer (SPEI)</h1>
                   </div>
                   <div className='flex p-2  my-2 flex-row items-center bg-white h-[44px] sm:w-[363px] w-[250px] gap-2'>
                    <img src={circle} alt="" 
                    className='w-[13.5] h-[15px]'/>
                    <h1 className='font-aeroport font-extralight'>Pay in cash (OXXO Pay)</h1>
                   </div>
                </div>
            </div>
               <div>
                <div className='mt-7 mb-8'>
                    <h1 className='font-aeroport font-semibold text-2xl'>Payment summary</h1>
                    <div className='sm:w-[363px] w-[250px] sm:h-[200px] h-auto bg-white'>
                        <div className='justify-between flex flex-row p-4 border-b-2'>

                       <div className='font-aeroport '>
                        <h1 className='font-semibold text-md '>Mini</h1>
                        <p>1.0m x 1.0m (up to 1 m3)</p>
                        <h1 className='font-semibold text-md'>Service Reception of Items in</h1>
                        <h1 className='font-semibold text-md '>the Winery - MX Res A</h1>
                       </div>
                       <div className='font-aeroport text-right'>
                        <h1 className='font-semibold text-md'>$349.00</h1>
                        <h1 className='font-semibold text-md'>MXN</h1>
                        <h1 className='font-semibold text-md'>$270.00</h1>
                        <h1 className='font-semibold text-md'>MXN</h1>
                       </div>
                        </div>
                        <div className='flex flex-row justify-between font-aeroport mt-2 mb-5'>
                            <h1 className='font-semibold text-md'>Total</h1>
                            <div>
                                <h1 className='font-semibold text-md'>$619.00</h1>
                                <h1 className='font-semibold text-md'>MXN</h1>
                            </div>
                        </div>
                    </div>
                    <button className='sm:w-[363px] w-[250px] mt-16 sm:mt-5 h-[40px] text-white font-aeroport bg-[#3ccad1] rounded-xl'>Pay & Schedule</button>
                </div>
               </div>
                </div>
        </div>  
    </div>
  )
}

export default Finalestimated