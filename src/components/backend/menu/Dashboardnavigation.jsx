import React from 'react'
import contact from '../../../assets/icons/contact.png'
import arrowup from '../../../assets/icons/tradeup.png'
import gift from '../../../assets/icons/gift.png'
import trade from '../../../assets/icons/trade.png'
import tradedown from '../../../assets/icons/tradedown.png'
import watch from '../../../assets/icons/watch.png'


function Dashboardnavigation() {
  return (
    <div className='xl:px-[151px] px-8 mt-4'>
        <div>
            <h1 className='font-aeroport font-bold text-3xl'>Dashboard</h1>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 justify-items-center'>

        {/*1st */}
        
        <div>
            <div className='w-[240px] h-[130px] rounded-2xl bg-white mt-4 p-3'>
             <div className='flex flex-row justify-between'>
                <div>
                   <h1 className='text-xl text-gray-500 font-extralight mb-4'>Total User</h1>
                   <h1 className=' text-2xl font-bold'>40,689</h1>
                </div>
                <div>
                  <img src={contact} alt=""
                  className='w-[60px] h-[60px]' />
                </div>
             </div>
             <div className='flex flex-row justify-center mt-4'>
                <img src={arrowup} alt=""
                className='w-6 h-6' />
                <h1><span className='text-[#00B69B]'>8.5%</span>Up from yesterday</h1>
             </div>
            </div>
        </div>
        {/*2nd */}
        <div>
            <div className='w-[240px] h-[130px] bg-white rounded-2xl mt-4 p-3'>
             <div className='flex flex-row justify-between'>
                <div>
                   <h1 className='text-xl text-gray-500 font-extralight mb-4'>Total Order</h1>
                   <h1 className=' text-2xl font-bold'>10,293</h1>
                </div>
                <div>
                  <img src={gift} alt=""
                  className='w-[60px] h-[60px]' />
                </div>
             </div>
             <div className='flex flex-row justify-center mt-4'>
                <img src={arrowup} alt=""
                className='w-6 h-6' />
                <h1><span className='text-[#00B69B]'>1.3%</span>Up from past week</h1>
             </div>
            </div>
        </div>
        {/*3rd */}
        <div>
            <div className='w-[240px] h-[130px] bg-white rounded-2xl mt-4 p-3'>
             <div className='flex flex-row justify-between'>
                <div>
                   <h1 className='text-xl text-gray-500 font-extralight mb-4'>Total Sales</h1>
                   <h1 className=' text-2xl font-bold'>$89,000</h1>
                </div>
                <div>
                  <img src={trade} alt=""
                  className='w-[60px] h-[60px]' />
                </div>
             </div>
             <div className='flex flex-row justify-center mt-4'>
                <img src={tradedown} alt=""
                className='w-6 h-6' />
                <h1><span className='text-[#F93C65]'>4.3%</span>Down from yesterday</h1>
             </div>
            </div>
        </div>
        {/*4th */}
        <div>
            <div className='w-[240px] h-[130px] bg-white rounded-2xl mt-4 p-3'>
             <div className='flex flex-row justify-between'>
                <div>
                   <h1 className='text-xl text-gray-500 font-extralight mb-4'>Total pending</h1>
                   <h1 className=' text-2xl font-bold'>2040</h1>
                </div>
                <div>
                  <img src={watch} alt=""
                  className='w-[60px] h-[60px]' />
                </div>
             </div>
             <div className='flex flex-row justify-center mt-4'>
                <img src={arrowup} alt=""
                className='w-6 h-6' />
                <h1><span className='text-[#00B69B]'>1.8%</span>Up from yesterday</h1>
             </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Dashboardnavigation