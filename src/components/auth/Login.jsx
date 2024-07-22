import React from 'react'

import  Homeogo from '../../assets/icons/logo.png'

function Login() {
  return (
    <div className='bg-gray-200  h-screen pt-36'>
       <div className='w-[572px] bg-white h-[400px] mx-auto  rounded-xl'>
       <div className=' content-center mt-16 '>
        <div className=' gap-2  '>
            <div className='flex flex-row justify-center gap-4  mt-7'>

            <div className='mt-3 '>
                <img src={Homeogo} width={36} height={36} 
                className='' alt=''/>    
            </div>      
            <div className='flex flex-row gap-4 '>
                <p className='text-5xl '>|</p>
             <h2 className=' text-3xl mt-2'>Kiip</h2>
            </div>
            </div>
            <div className='justify-center font-aeroport mt-5 text-center text-xl'>
                <h1 className='font-semibold'>Admin Login</h1>
                <input type="email" placeholder='Email Address'  className='w-[393px] mt-8 h-[52px] bg-gray-200'/>
                <input type="password" placeholder='Password'  className='w-[393px] mt-4 h-[52px] bg-gray-200'/>
            </div>
            <div className='flex flex-col gap-3 mt-6 items-center'>
            <button className='bg-[#3ccad1]   sm:w-[395px] w-[195px] h-[52px]
             justify-center text-white font-semibold font-aeroport
             '>Log in</button>
            </div>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default Login