import React from 'react'
import Homeogo from "../../../assets/icons/logo.png"
import { Link } from 'react-router-dom'

function Dashnavbar() {
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
        <div className=' font-aeroport'>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/dashboardmenu"}>Dashboard</Link></button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/userlisting"}>User listing</Link></button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'>Request</button>
          <button className='w-[150px] h-[50px] hover:bg-[#3ccad1] rounded-2xl'><Link to={"/warehouse"}>Warehouse</Link></button>
        </div>
         
        <div className='flex flex-row gap-3    font-aeroport text-xl justify-items-center'>
                <Link to="login">
                <button className='bg-[#3ccad1] font-aeroport font-normal sm:w-[195px] w-[95px] h-[52px]'>Log In</button>
        </Link></div>

          
        
    </div>
    </div>
  )
}

export default Dashnavbar