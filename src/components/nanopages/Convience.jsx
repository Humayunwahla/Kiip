import React from 'react'
import ultimate from "../../assets/icons/ultimate.png"
import ultimate2 from "../../assets/pic2.png"

function Convience() {
  return (
    <div>
        
        <div className='mt-10'>
        <div className='text-center'>
            <p className='text-[#21A3AA] font-aeroport'>BENEFITS</p>
            <h1 className='font-bold text-3xl font-aeroport mt-3'>You won't need to worry about<br/> running out of space anymore.</h1>
        </div>
        <div className='lg:w-[1000px] md:w-[600px] w-[250px] flex flex-row h-[482px] rounded-2xl bg-[#F3F3F3] mx-auto mt-[67px] '></div>
        <div className='lg:w-[1070px] md:w-[650px] w-[300px] flex lg:flex-row flex-col lg:h-[510px] rounded-2xl bg-[#F3F3F3] mx-auto shadow-2xl -mt-[450px] mb-16'>
           <div className='lg:w-1/2 lg:p-[70px] p-[9px]  text-center lg:text-left'>
             <div>
                <img src={ultimate} alt="" 
                width={66}
                height={66}
                className='mx-auto lg:mx-0'/>
             </div>
             <div className='mt-[42px]'>
                <h2 className='text-3xl font-bold'>Ultimate convenience</h2>
                <p className='text-lg font-normal mt-3'>Forget heavy lifting and moving hassles. We<br/> costly removal fees. Save up to 40%!</p>
             </div>
           </div>
           <div className='lg:w-1/2 content-center mt-4  mb-4'>
             <img src={ultimate2} alt="" 
             width={398}
             height={420}
             className='mx-auto' />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Convience