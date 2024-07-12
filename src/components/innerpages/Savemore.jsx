import React  from 'react'

import {Link} from 'react-router-dom'
import Homeogo from "../../assets/icons/logo.png"
import Moresave from '../nanopages/Moresave'

function Savemore() {
  return (
    <div>
    <div className='sm:p-[20px] p-[5px]'>
        <div className='backgroungimg  rounded-2xl pt-5'>
        <div className='px-6 flex flex-row justify-between lg:w-[805px] h-[58px] mx-auto bg-black/[0.07] rounded-full'>
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
         
        <div className='flex flex-row gap-3   text-white font-aeroport text-xl justify-items-center'>
               <div className='md:flex flex-row mt-3 gap-3 hidden font-aeroport font-normal '>
               <Link to="show"> <h2>Choose your plan</h2></Link>
                <h2>Quote your space</h2>
                </div> 
                <Link to="form">
                <button className='bg-[#3ccad1] rounded-full font-aeroport font-normal mt-2 sm:w-[195px] w-[95px] h-[42px]'>Log In</button>
        </Link></div>

          
        
    </div>
            <div className=' text-center space-y-3 md:mt-[268px] mt-[120px] pb-[268px] '>
             <h2 className='text-center  text-white md:text-5xl sm:text-4xl text-3xl font-aeroport font-bold  '>Effortlessly plan and track<br/> your storage on one click </h2>
            <p className='text-center font-aeroport font-normal text-white'>We handle everything for you we pick up, store, and deliver<br/> your belongings whenever you need them.</p>
            <Link to="/quote">
            <button className='bg-[#3ccad1] mt-5 rounded-2xl   w-[195px] h-[52px]
             justify-center text-white font-aeroport font-normal
             '>Quote your space</button></Link>
            </div>
        </div>

    </div>
    <Moresave/>
    </div>
  )
}

export default Savemore