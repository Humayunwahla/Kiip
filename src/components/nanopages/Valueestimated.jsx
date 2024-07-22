
import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom'
import arrow from "../../assets/icons/downarrow.png"

function Valueestimated() {
  return (
    <div>
        <div className='p-3 flex flex-row justify-between border-b-2'>
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
        <Link to="/form">      <button className='bg-[#3ccad1] md:w-[195px] w-[95px] h-[52px] font-aeroport'>Log In</button></Link>
        </div>      
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
        <Link to={"/estimatedprice"}>    <button  className='bg-[#3ccad1] w-auto px-4 h-[52px] rounded-2xl  mt-4 font-semibold '>Here we help you to quote</button></Link>
          </div>
    </div>
    </div>
  )
}

export default Valueestimated