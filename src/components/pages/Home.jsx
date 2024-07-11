import React  from 'react'
import Navbar from '../shared/Navbar'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='sm:p-[20px] p-[3px]'>
        <div className='backgroungimg  rounded-2xl'>
            <Navbar/>
            <div className=' text-center space-y-3 md:mt-[268px] mt-[120px] pb-[268px] '>
             <h2 className='text-center  text-white md:text-5xl sm:text-4xl text-3xl font-aeroport font-bold  '>Effortlessly plan and track<br/> your storage on one click </h2>
            <p className='text-center font-aeroport font-normal text-white'>We handle everything for you we pick up, store, and deliver<br/> your belongings whenever you need them.</p>
            <Link to="quote">
            <button className='bg-[#3ccad1]   w-[195px] h-[52px]
             justify-center text-white font-aeroport font-normal
             '>Quote your space</button></Link>
            </div>
        </div>

    </div>
  )
}

export default Home