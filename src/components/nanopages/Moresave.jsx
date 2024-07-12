import React from 'react'
import save from '../../assets/icons/save.png'
import savemore from "../../assets/savemore.png"

function Moresave() {
  return (
    <div className='mt-10'>
        <div className='text-center'>
            <p className='text-[#21A3AA] font-aeroport'>BENEFITS</p>
            <h1 className='font-bold text-3xl font-aeroport mt-3'>You won't need to worry about<br/> running out of space anymore.</h1>
        </div>
        <div className='lg:w-[1100px] md:w-[650px] w-[300px] flex lg:flex-row flex-col lg:h-[510px] bg-[#F3F3F3] mx-auto mt-[67px] mb-16'>
           <div className='lg:w-1/2 lg:p-[70px] sm:p-10 text-center lg:text-left'>
             <div>
                <img src={save}
                className='mx-auto lg:mx-0' alt="" 
                width={66}
                height={66}/>
             </div>
             <div className='mt-[42px]'>
                <h2 className='text-3xl font-bold'>Save More</h2>
                <p className='text-lg font-normal mt-3'>Only pay for the space you need and avoid<br/> costly removal fees. Save up to 40%!</p>
             </div>
           </div>
           <div className='lg:w-1/2 content-center sm:px-4 mb-4' >
             <img src={savemore} alt="" 
             width={398}
             height={420}
             className='mx-auto' />
           </div>
        </div>
    </div>
  )
}

export default Moresave