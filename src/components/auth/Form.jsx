import React from 'react'
import Homeogo from "../../assets/icons/logo.png"

function Form() {
  return (
    <div>
    <div className='md:p-8 p-2 flex flex-row justify-between border-b-2'>
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
            <button className='bg-[#3ccad1] md:w-[195px] w-[95px]  h-[52px] font-aeroport'>Log In</button>
    </div>
        
    
</div>

  
<div className='flex flex-col items-center mt-24 '>
    <div>
    <h2 className='text-4xl text-center  font-semibold font-aeroport'>Leave us your details so we can send you your quote</h2>
    </div>
    <div className='flex flex-row gap-10 mx-auto mt-8 '>
        
    <div className='lg:w-[870px] w-auto lg:h-[473px] h-auto border-2 rounded-3xl p-[25px] py-[29px] mb-7'>
    <form>
  <div className="space-y-12">
   

    <div className=" border-gray-900/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Names</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Last names</label>
          <div className="mt-2">
            <input type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">TELEPHONE</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label  className="block text-sm font-semibold font-aeroport leading-6 text-gray-900">ZIP / Postal Code</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>

    
  </div>

  <div className="mt-2 flex items-center justify-center gap-x-6">
    <button type="button" className="text-sm font-semibold font-aeroport leading-6 w-[289px] h-[52px] rounded-2xl bg-[#3ccad1] text-white">SEE MY QUOTE</button>
     </div>
</form>
        
    </div>
    </div>
</div>
</div>
  )
}

export default Form