import React from 'react'
import icon1 from "../../assets/icons/pickup.png"
import icon2 from "../../assets/icons/storage.png"
import icon3 from "../../assets/icons/delivery.png"
import isolation from "../../assets/icons/isolation.png"
import no1 from "../../assets/icons/no1.png"
import no2 from "../../assets/icons/no2.png"
import no3 from "../../assets/icons/no3.png"
import no4 from "../../assets/icons/no4.png"

function Dashflexiblework() {
  return (
    <div>
        <div className='md:p-[46px] p-[16px] '>
        <div className='bg-slate-300 bg-fixed rounded-2xl pt-6'>

        <div className='text-center'>
            <h2 className='font-bold font-aeroport sm:text-5xl text-3xl mt-[71px]'>How Its Works</h2>
            <p className='font-semibold font-aeroport sm:text-2xl text-lg mt-5'>We take care of everything so that you feel like it's magic</p>
        </div>
        <div className=' flex lg:flex-row flex-col lg:mt-[64px] mt-[20px] py-10'>
        <div className='grid lg:grid-cols-2 grid-cols-1 2xl:px-[69px] mx-2 sm:mx-10 sm:px-[40px] px-[3px] mt-10  '>
        <div className='flex  flex-col sm:gap-[40px] gap-[10px] '>
            <div>
                <img src={isolation}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '>
                <div  className='flex flex-row gap-2'>
                  <img src={no1} alt=""
                  width={35}
                  height={35} />
                <h2 className='font-bold sm:text-4xl text-2xl font-aeroport'>Select items</h2>
            </div>
                <p className='mt-1 font-semibold font-aeroport text-[#21A3AA] sm:text-lg  leading-6 mb-[45px] '>Select items you want to store away and <br/>schedule a visit on the day and time that<br/>uits you best</p>
                </div>
           </div>
           <div className='flex  flex-col sm:gap-[40px] gap-[16px] lg:mt-48 mt-6 lg:ml-28'>
            <div>
                <img src={icon1}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '>
            <div  className='flex flex-row gap-2'>
                  <img src={no2} alt=""
                  width={35}
                  height={35} />
                <h2 className='font-bold sm:text-4xl text-2xl font-aeroport'>We Pick Up</h2>
            </div> 
                
                <p className='mt-1 font-semibold font-aeroport sm:text-lg text-[#21A3AA] leading-6 mb-[45px] '>We collect your items from any location you<br/> specify, protect them during transport, and<br/>handle everything with care.</p>
            </div>
           </div>

           <div className='flex flex-col sm:gap-[40px] gap-[16px] mt-6'>
            <div>
                <img src={icon2}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '>
            <div  className='flex flex-row gap-2'>
                  <img src={no3} alt=""
                  width={35}
                  height={35} />
                <h2 className='font-bold sm:text-4xl text-2xl font-aeroport'>We Store</h2>
            </div> 
                
                <p className='mt-1 leading-6 font-semibold font-aeroport text-[#21A3AA] sm:text-lg mb-[45px] '>Your belongings are important to us. They<br/>are monitored 24/7, allowing you to relax<br/>and enjoy your home, family, or trip.</p>
            </div>
           </div>


           <div className='flex  flex-col sm:gap-[40px] gap-[16px] lg:mt-48 mt-6 lg:ml-28'>
            <div>
                <img src={icon3}
                width={106}
                height={106} alt="money-bag" />
            </div>
            <div className=' '>
            <div  className='flex flex-row gap-2'>
                  <img src={no4} alt=""
                  width={35}
                  height={35} />
                <h2 className='font-bold sm:text-4xl text-2xl font-aeroport'>We Return</h2>
            </div> 
                
                <p className='mt-1 leading-6 font-semibold sm:text-lg mb-[45px] text-[#21A3AA] font-aeroport '>With a click, select the items you need from <br/>your inventory, and we'll deliver them to you<br/>wherever and whenever you want.</p>
            </div>
           </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Dashflexiblework