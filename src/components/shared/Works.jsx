import React from 'react'
import icon1 from '../../assets/icons/pickup.png'
import icon2 from '../../assets/icons/storage.png'
import icon3 from '../../assets/icons/delivery.png'
import workplace from '../../assets/workplace.png'

function Works() {
  return (
    <div className='md:p-[46px] p-[16px] '>
        <div className='bg-slate-300 bg-fixed rounded-2xl pt-6'>

        <div className='text-center'>
            <h2 className='font-bold font-aeroport text-5xl mt-[71px]'>How Its Works</h2>
            <p className='font-semibold font-aeroport text-2xl mt-5'>We take care of everything so that you feel like it's magic</p>
        </div>
        <div className=' flex lg:flex-row flex-col lg:mt-[64px] mt-[20px] py-10'>
        <div className='lg:w-1/2 2xl:px-[69px] sm:px-[40px] px-[16px] mt-10 '>
           <div className='flex sm:flex-row flex-col sm:gap-[40px] gap-[16px]'>
            <div>
                <img src={icon1}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '> 
                <h2 className='font-bold text-4xl font-aeroport'>We Pick Up</h2>
                <p className='mt-1 font-semibold font-aeroport text-lg leading-6 mb-[45px] '>We collect your items from any location you<br/> specify, protect them during transport, and<br/>handle everything with care.</p>
            </div>
           </div>

           <div className='flex sm:flex-row flex-col sm:gap-[40px] gap-[16px] mt-6'>
            <div>
                <img src={icon2}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '> 
                <h2 className='font-bold text-4xl font-aeroport'>We Store</h2>
                <p className='mt-1 leading-6 font-semibold font-aeroport text-lg mb-[45px] '>Your belongings are important to us. They<br/>are monitored 24/7, allowing you to relax<br/>and enjoy your home, family, or trip.</p>
            </div>
           </div>


           <div className='flex sm:flex-row flex-col sm:gap-[40px] gap-[16px] mt-6'>
            <div>
                <img src={icon3}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '> 
                <h2 className='font-bold text-4xl font-aeroport'>We Return</h2>
                <p className='mt-1 leading-6 font-semibold text-lg mb-[45px] font-aeroport '>With a click, select the items you need from <br/>your inventory, and we'll deliver them to you<br/>wherever and whenever you want.</p>
            </div>
           </div>
        </div>
        <div className='lg:w-1/2'>
            <img src={workplace}
            className='px-[47px]' alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Works