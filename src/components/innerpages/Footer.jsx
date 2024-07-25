import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import phone from "../../assets/icons/phone.png"
import navigation from "../../assets/icons/navigation.png"
import facebook from "../../assets/icons/facebook.png"
import insta from "../../assets/icons/insta.png"
import tiktok from "../../assets/icons/tiktok.png"
import youtube from "../../assets/icons/youtube.png"


function Footer() {
  return (
    <div className='bg-black sm:p-24 p-6 content-center flex lg:flex-row flex-col gap-16 font-aeroport rounded-4xl'>
        <div className='lg:w-1/4 font-aeroport'>
        <div className='flex flex-row gap-2 justify-items-center'>
            <div className='mt-3'>
                <img src={Homeogo} width={36} height={36} 
                className='' alt=''/>
               
                
            </div>
           
            <div className='flex flex-row gap-2'>
                <p className='text-5xl text-white'>|</p>
             <h2 className='text-white text-3xl mt-2'>Kiip</h2>
            </div>
        </div>
         <div>
            <h2 className='text-white mt-3'>Your Personal Home Winery</h2>
         </div>
        </div>

        <div className='lg:w-3/4 text-white grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-6 leading-10 text-center'>
           <div>
            <h1>How does it works?</h1>
            <h1>Frequently Asked Question</h1>
            <h1>Contact</h1>
           </div>
           <div>
            <h1>Quote your space</h1>
            <h1>Storage rules</h1>
            <h1>Choose your plan</h1>
           </div>
           <div className='mx-auto'>
            <div className='flex flex-row gap-4 '>
             <img src={phone} alt=""
             className='w-9 h-9' />
            <h1>+34523442345</h1>
            </div>
            <div className='flex flex-row gap-4 mt-5'>
             <img src={navigation} alt=""
             className='w-9 h-9' />
            <h1>lorem ipsum <br />lorem ipsum</h1>
            </div>
            <div className=''>
                <ul  className='flex flex-row gap-6 mt-6'>

                <li>
                    <img src={facebook} alt=""
                    className='w-[24px] h-[24px]' />
                </li>
                <li>
                    <img src={insta} alt=""
                    className='w-[24px] h-[24px]' />
                </li>
                <li>
                    <img src={tiktok} alt=""
                    className='w-[24px] h-[24px]' />
                </li>
                <li>
                    <img src={youtube} alt=""
                    className='w-[24px] h-[24px]' />
                </li>
                </ul>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer