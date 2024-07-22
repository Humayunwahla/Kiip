import React from 'react'
import Dashnavbar from './Dashnavbar'

function Warehouse() {
  return (
    <div className='bg-gray-100 min-h-full'>
        <Dashnavbar/>
        <div>
            <div className='xl:px-[151px] px-8 mt-4 '>
            <h1 className='font-aeroport font-bold text-3xl'>Warehouse</h1>
            </div>
        <div className='xl:px-[151px] px-8 pb-20 mt-4 mb-10 flex md:flex-row flex-col items-center gap-3'>
        <div className=' bg-white md:w-1/2 w-full h-[379px]  p-7 mb-8'>
        </div>
        <div className=' bg-white md:w-1/2 w-full h-[379px] p-7 mb-8'>
        </div>

    </div>
        </div>
    </div>
  )
}

export default Warehouse