import React  from 'react'
import Navbar from '../shared/Navbar'
import {Link} from 'react-router-dom'
import home2 from "../../assets/home2.png"

function Dashhome() {
  return (
    <div className=' p-[3px]'>
    <div className='background2 '>
        <Navbar />
        <div className=' text-center space-y-3 md:mt-[68px] mt-[20px] pb-[68px] text-black '>
         <h2 className='text-center  md:text-5xl sm:text-4xl text-3xl font-aeroport font-bold  '>Effortlessly plan and track<br/> your storage on one click </h2>
        <p className='text-center text-[#21A3AA] font-aeroport font-normal mt-3'>We handle everything for you we pick up, store, and deliver<br/> your belongings whenever you need them.</p>
        <Link to="/dashboardmenu">
        <button className='bg-[#3ccad1] mt-5 w-[195px] h-[52px]
         justify-center font-aeroport font-normal
         '>Quote your space</button></Link>
        </div>

        <img src={home2} alt=""
        className='px-[10px] bg-contain' />
    </div>

</div>
  )
}

export default Dashhome