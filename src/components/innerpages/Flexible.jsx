import React from 'react'
import flexible from "../../assets/icons/flexible.png"
import ultimate2 from "../../assets/pic2.png"
import Workflexible from '../nanopages/Workflexible'

function Flexible() {
  return (
    <div>
        
        <div className='mt-10'>
        <div className='text-center'>
            <p className='text-[#21A3AA] font-aeroport'>BENEFITS</p>
            <h1 className='font-bold text-3xl font-aeroport mt-3'>You won't need to worry about<br/> running out of space anymore.</h1>
        </div>
        <div className='lg:w-[950px] md:w-[550px] w-[200px] flex flex-row h-[469px] rounded-2xl bg-[#F3F3F3] mx-auto mt-[67px] '></div>
        <div className='lg:w-[1000px] md:w-[600px] w-[250px] flex flex-row h-[482px] rounded-2xl bg-[#F3F3F3] mx-auto shadow-2xl -mt-[450px] '></div>
        <div className='lg:w-[1070px] md:w-[650px] w-[300px] flex lg:flex-row flex-col lg:h-[510px] h-auto rounded-2xl bg-[#F3F3F3] mx-auto shadow-2xl -mt-[450px] mb-16 p-4'>
           <div className='lg:w-1/2 md:p-[70px] p-6'>
             <div>
                <img src={flexible} alt="" 
                width={66}
                height={66}/>
             </div>
             <div className='mt-[42px]'>
                <h2 className='text-3xl font-bold'>Flexible Plans</h2>
                <p className='text-lg font-normal mt-3'>Need more or less space? No problem! <br/>Our plans adapt to your needs</p>
             </div>
           </div>
           <div className='lg:w-1/2 content-center '>
             <img src={ultimate2} alt="" 
             width={398}
             height={420}
             className='mx-auto' />
           </div>
        </div>
    </div>

    <Workflexible/>
    </div>
  )
}

export default Flexible