import React from 'react'
import icon1 from '../../assets/icons/money-bag.png'
import icon2 from '../../assets/icons/box.png'
import icon3 from '../../assets/icons/layout.png'
import { Link } from 'react-router-dom'

function Feature() {
  return (
    <div className='sm:px-[48px] px-[16px] pt-[100px] flex lg:flex-row flex-col'>
        <div className='lg:w-1/2 text-center'>
            <h2 className='text-black lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-aeroport font-bold'>You won't need to<br/> worry about running<br/> out of space anymore.</h2>
        </div>
        <div className='lg:w-1/2 mt-9'>
        <Link to="savemore">
           <div className='flex sm:flex-row flex-col gap-[40px]'>
            <div>
                <img src={icon1}
                width={53}
                height={53} alt="money-bag" />
            </div>
            <div className=' border-b-2'> 
                <h2 className='font-aeroport font-bold md:text-4xl text-2xl'>Save More</h2>
                <p className='mt-1 font-aeroport font-normal text-2xl mb-[30px] '>Only pay for the space you need and avoid<br/> costly removal fees. Save up to 40%!</p>
            </div>
           </div>
           </Link>
            <Link to="ultimate">
           <div className='flex sm:flex-row flex-col gap-[40px] mt-6'>
            <div>
                <img src={icon2}
                width={53}
                height={53} alt="money-bag" />
            </div>
            <div className=' border-b-2'> 
                <h2 className='font-bold font-aeroport md:text-4xl text-2xl'>Ultimate Convenience</h2>
                <p className='mt-1 text-2xl font-aeroport font-normal mb-[30px] '>Forget heavy lifting and moving hassles.<br/>We save you hours of effort.</p>
            </div>
           </div>
           </Link>

<Link to="flexible">
           <div className='flex sm:flex-row flex-col gap-[40px] mt-6'>
            <div>
                <img src={icon3}
                width={53}
                height={53} alt="money-bag" />
            </div>
            <div className=' border-b-2'> 
                <h2 className='font-bold md:text-4xl font-aeroport text-2xl'>Flexible Plans</h2>
                <p className='mt-1 text-2xl mb-[30px] font-aeroport font-normal '>Need more or less space? No problem!<br/> Our plans adapt to your needs.</p>
            </div>
           </div>
           </Link>
        </div>
    </div>
  )
}

export default Feature