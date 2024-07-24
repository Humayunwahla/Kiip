
import React, { useState } from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'


function Valueestimated() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const handleMenuClick = () => {
      setIsOpen(!isOpen);
      setIsExpanded(!isExpanded);
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
        <Link  to="/login"><button className='bg-[#3ccad1] rounded-xl  hidden sm:block w-[155px] font-aeroport font-normal h-[52px]'>Log In</button></Link>
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
        </Link>  </div>
      </div>
    </nav>
    </div> 

    <div className=''>
        <div className=' font-aeroport text-center lg:mt-[71px] mt-[25px]'>
            <h1 className=' font-normal text-3xl'>Choose the estimated space</h1>
            <p className=' font-normal text-light'>Don't worry if it's not accurate since in the visit we will measure the real space of your items</p>
         </div>
        <div className='grid lg:grid-cols-2 justify-items-center mb-4 font-aeroport '>

        <div className={`flex flex-col sm:w-[459px] w-[280px] ${isExpanded ? 'h-auto' : 'h-[107px]'} justify-between border-2 mt-3 px-[17px]`}>
          <div className='flex flex-row justify-between  mt-5'>

      <div className=''>
        <h1 className='font-semibold'>Mini</h1>
        <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
        <p className='font-semibold'>$349.00 MXN</p>
      </div>
      <div className=''>
        <div className="relative inline-block text-left">
          <div>
            <button 
              type="button" 
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
              id="menu-button" 
              aria-expanded={isOpen} 
              aria-haspopup="true" 
              onClick={handleMenuClick}
            >
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>  
        </div>
      </div>
          </div>

      {isOpen && (
            <div className="" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="flex md:flex-row flex-col items-center mt-4 gap-4 mb-3" role="none">
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>349.00</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold mb-2'>Month by Month</h1>
                  <p className='font-normal text-sm'>Maximum flexibility, no commitment of stay</p>
                </div>
                </div>
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>$296.65</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold mb-2'>3+ months</h1>
                  <p className='font-normal text-sm'>Stay 3 months or more and save!
15% discount on monthly storage
Initial Collection At No Cost</p>
                </div>
                </div>
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>349.00</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold  mb-2'>6+ months</h1>
                  <p className='font-normal text-sm'>Maximum flexibility, no commitment of stay.</p>
                </div>
                </div>
              </div>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="block w-full mb-4  bg-[#21A3AA] text-center text-white rounded-xl font-aeroport font-bold px-4 py-2  text-sm " role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                </form>
            </div>
          )}
        </div>
        <div className={`flex flex-col sm:w-[459px] w-[280px] ${isExpanded ? 'h-auto' : 'h-[107px]'} justify-between border-2 mt-3 px-[17px]`}>
          <div className='flex flex-row justify-between  mt-5'>

      <div className=''>
        <h1 className='font-semibold'>Mini</h1>
        <p className='font-normal'>1.0m x 1.0m (up to 1 m3)</p>
        <p className='font-semibold'>$349.00 MXN</p>
      </div>
      <div className=''>
        <div className="relative inline-block text-left">
          <div>
            <button 
              type="button" 
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
              id="menu-button" 
              aria-expanded={isOpen} 
              aria-haspopup="true" 
              onClick={handleMenuClick}
            >
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>  
        </div>
      </div>
          </div>

      {isOpen && (
            <div className="" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="flex md:flex-row flex-col items-center mt-4 gap-4 mb-3" role="none">
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>349.00</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold mb-2'>Month by Month</h1>
                  <p className='font-normal text-sm'>Maximum flexibility, no commitment of stay</p>
                </div>
                </div>
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>$296.65</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold mb-2'>3+ months</h1>
                  <p className='font-normal text-sm'>Stay 3 months or more and save!
15% discount on monthly storage
Initial Collection At No Cost</p>
                </div>
                </div>
                <div className='w-[136px] h-[250px] border-2 rounded-xl overflow-hidden'>
                <div className='h-[80px] bg-[#21A3AA] text-center content-center text-white font-aeroport'>
                  <h1 className='font-bold'>349.00</h1>
                  <h1 className='font-normal'>MXN/ MONTHLY</h1>
                </div>
                <div className='text-center font-aeroport mt-3 px-1'>
                  <h1 className='font-bold  mb-2'>6+ months</h1>
                  <p className='font-normal text-sm'>Maximum flexibility, no commitment of stay.</p>
                </div>
                </div>
              </div>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="block w-full mb-4  bg-[#21A3AA] text-center text-white rounded-xl font-aeroport font-bold px-4 py-2  text-sm " role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                </form>
            </div>
          )}
        </div>
        
      </div>
        
        <div className='text-center mt-9 mb-10 font-aeroport flex flex-row justify-center gap-5'>
            <p className='font-normal text-lg mt-4'>Don't you know what size to reserve?</p>
        <Link to={"/estimatetextarea"}>    <button  className='bg-[#3ccad1] w-auto px-4 h-[52px] rounded-2xl   font-semibold '>Here we help you to quote</button></Link>
          </div>
    </div>
    </div>
  )
}

export default Valueestimated