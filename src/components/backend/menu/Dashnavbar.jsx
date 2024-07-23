import React, { useState } from 'react'
import Homeogo from "../../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Dashnavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className='p-3 flex flex-row justify-between border-b-2'>
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
        <div className=' font-aeroport hidden md:block'>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/dashboardmenu"}>Dashboard</Link></button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/userlisting"}>User listing</Link></button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'>Request</button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/warehouse"}>Warehouse</Link></button>
        </div>
         
        <div className='flex flex-row gap-3    font-aeroport text-xl justify-items-center'>
                <Link to="login">
                <button className='bg-[#3ccad1] hidden md:block font-aeroport font-normal sm:w-[195px] w-[95px] h-[52px]'>Log In</button>
        </Link>
        <nav className=" md:hidden px-8">
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
          <button href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Log In</button>
          <button href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to={"/dashboardmenu"}>Dashboard</Link></button>
          <button href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to={"/userlisting"}>User listing</Link></button>
          <button href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Request</button>
          <button href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to={"/warehouse"}>Warehouse</Link></button>
          
        </div>
      </div>
    </nav>
        </div>

          
        
    </div>
    </div>
  )
}

export default Dashnavbar