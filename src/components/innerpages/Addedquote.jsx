import React from 'react'
import Homeogo from "../../assets/icons/logo.png"
import {useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import selfquote from '../../assets/selfquote.png'


const lists = {
    rooms: [
      { name: 'Dressing Table', quantity: 1, length: 26, width: 68, height: 140, weight: 32.0 },
      { name: 'Baby Changing(Table)', quantity: 1, length: 63, width: 79, height: 80, weight: 38.0 },
      { name: 'Triple(Chest) of (Drawers)', quantity: 1, length: 53, width: 156, height: 120, weight: 96.0 },
      { name: 'Double(Chest) of (Drawers)', quantity: 1, length: 53, width: 111, height: 120, weight: 110.0 },
      { name: 'Comfortable', quantity: 1, length: 53, width: 89, height: 120, weight: 40.2 },
      { name: '2 Door (Wardrobe)', quantity: 1, length: 61, width: 84, height: 200, weight: 98.5 },
      { name: '1 Door (Wardrobe)', quantity: 1, length: 60, width: 41, height: 200, weight: 47.3 },
      { name: 'Floor Lamp', quantity: 1, length: 48, width: 48, height: 155, weight: 2.0 },
      { name: 'Desk Lamp', quantity: 1, length: 27, width: 27, height: 55, weight: 1.0 },
      { name: '(Nightstand) /(Bedside-Table)', quantity: 1, length: 47, width: 47, height: 50, weight: 10.6 },
      { name: 'Queen/King Mattress', quantity: 1, length: 202, width: 158, height: 35, weight: 23.5 },
      { name: 'Double Mattress', quantity: 1, length: 190, width: 135, height: 20, weight: 22.5 },
      { name: 'Single Mattress', quantity: 1, length: 175, width: 91, height: 35, weight: 53.7 },
      { name: 'Bunk Bed', quantity: 1, length: 83, width: 186, height: 145, weight: 60.0 },
      { name: 'Cradle', quantity: 1, length: 133, width: 71, height: 90, weight: 16.0 },
      { name: 'Queen/King Bed', quantity: 1, length: 217, width: 171, height: 65, weight: 57.2 },
      { name: 'Double Bed', quantity: 1, length: 230, width: 164, height: 60, weight: 62.0 },
      { name: 'Individual Bed', quantity: 1, length: 184, width: 95, height: 56, weight: 30.1 }
    ],
    livingRoomDiningRoom: [
      { name: 'Piano', quantity: 1, length: 163, width: 42, height: 120, weight: 410.0 },
      { name: 'Mirror', quantity: 1, length: 3, width: 141, height: 170, weight: 6.8 },
      { name: 'Rug', quantity: 1, length: 22, width: 22, height: 90, weight: 3.9 },
      { name: 'Chart', quantity: 1, length: 9, width: 96, height: 102, weight: 7.7 },
      { name: 'Bank', quantity: 1, length: 22, width: 22, height: 45, weight: 2.0 },
      { name: 'Sideboard', quantity: 1, length: 46, width: 99, height: 195, weight: 86.8 },
      { name: 'Large Bookcase', quantity: 1, length: 28, width: 80, height: 202, weight: 43.4 },
      { name: 'Small Bookcase', quantity: 1, length: 46, width: 69, height: 124, weight: 37.6 },
      { name: 'Hallway Table', quantity: 1, length: 36, width: 80, height: 112, weight: 31.1 },
      { name: 'TV(55-65")', quantity: 1, length: 15, width: 143, height: 80, weight: 3.5 },
      { name: 'TV(32-42")', quantity: 1, length: 88, width: 12, height: 70, weight: 6.2 },
      { name: 'TV stand(medium)', quantity: 1, length: 150, width: 51, height: 49, weight: 18.0 },
      { name: 'TV cabinet(small)', quantity: 1, length: 51, width: 51, height: 49, weight: 12.3 },
      { name: 'Table Set', quantity: 1, length: 84, width: 64, height: 50, weight: 26.0 },
      { name: 'Center table', quantity: 1, length: 63, width: 99, height: 41, weight: 17.0 },
      { name: 'Chaise Lounge', quantity: 1, length: 138, width: 91, height: 90, weight: 47.0 },
      { name: '3 Seater(Sofa)', quantity: 1, length: 82, width: 210, height: 76, weight: 68.0 },
      { name: '2 Seater(Sofa)', quantity: 1, length: 145, width: 85, height: 82, weight: 45.0 },
      { name: 'Armchair', quantity: 1, length: 74, width: 82, height: 80, weight: 46.8 },
      { name: 'Dining Table(8+)', quantity: 1, length: 223, width: 101, height: 66, weight: 47.0 },
      { name: 'Dining(Table(4-6))', quantity: 1, length: 163, width: 81, height: 62, weight: 35.0 },
      { name: 'Round Table(4)', quantity: 1, length: 77, width: 77, height: 75, weight: 42.9 },
      { name: 'Chair', quantity: 1, length: 53, width: 40, height: 108, weight: 5.0 }
    ],
    cookingAndWashing: [
      { name: 'Large Upper(Cupboard)', quantity: 1, length: 46, width: 124, height: 52, weight: 40.0 },
      { name: 'Small Upper(Cupboard)', quantity: 1, length: 43, width: 59, height: 90, weight: 22.0 },
      { name: 'Dryer', quantity: 1, length: 54, width: 55, height: 80, weight: 31.0 },
      { name: 'Washing machine', quantity: 1, length: 54, width: 55, height: 80, weight: 64.2 },
      { name: 'Metal Shelves', quantity: 1, length: 45, width: 122, height: 200, weight: 10.0 },
      { name: 'Large Pantry Cabinet', quantity: 1, length: 51, width: 97, height: 195, weight: 93.0 },
      { name: 'Stool', quantity: 1, length: 29, width: 29, height: 79, weight: 3.6 },
      { name: 'Stove', quantity: 1, length: 80, width: 72, height: 100, weight: 70.0 },
      { name: 'Horizontal Freezer (Chest)', quantity: 1, length: 158, width: 84, height: 96, weight: 43.0 },
      { name: 'Dishwasher', quantity: 1, length: 54, width: 55, height: 80, weight: 23.1 },
      { name: 'Microwave', quantity: 1, length: 39, width: 51, height: 30, weight: 5.8 },
      { name: 'Duplex Refrigerator', quantity: 1, length: 118, width: 65, height: 180, weight: 133.1 },
      { name: 'Fridge', quantity: 1, length: 71, width: 71, height: 170, weight: 44.0 },
      { name: 'Minibar', quantity: 1, length: 62, width: 69, height: 115, weight: 27.0 },
      { name: 'Cooktop', quantity: 1, length: 60, width: 49, height: 30, weight: 7.5 },
      { name: '1 Door Refrigerator', quantity: 1, length: 60, width: 60, height: 160, weight: 57.0 },
      { name: 'Vertical Freezer', quantity: 1, length: 64, width: 60, height: 160, weight: 45.0 },
      { name: 'Cooking hood', quantity: 1, length: 66, width: 65, height: 60, weight: 16.0 }
    ],
    boxes : [
        { name: 'Loaded Pallet', quantity: 1.73, length: 28.0, width: 120, height: 120, weight: 120 },
        { name: 'Pallet / Pallet', quantity: 0.29, length: 12.0, width: 120, height: 120, weight: 20 },
        { name: 'Big box', quantity: 0.10, length: 7.0, width: 39, height: 44, weight: 60 },
        { name: 'Medium Box', quantity: 0.05, length: 4.8, width: 44, height: 38, weight: 30 },
        { name: 'Small Box', quantity: 0.03, length: 2.9, width: 30, height: 39, weight: 26 },
        { name: 'Plastic Storage Box', quantity: 0.13, length: 12.0, width: 66, height: 50, weight: 40 }
      ],
      others : [
        { name: 'Car Tire', quantity: 1, length: 21, width: 64, height: 55, weight: 6.8 },
        { name: 'Trampoline (Disassembled)', quantity: 1, length: 153, width: 195, height: 30, weight: 86.3 },
        { name: 'Jetski', quantity: 1, length: 92, width: 228, height: 86, weight: 203.5 },
        { name: 'Motorcycle', quantity: 1, length: 200, width: 90, height: 120, weight: 77.7 },
        { name: 'Games', quantity: 1, length: 61, width: 67, height: 180, weight: 71.4 },
        { name: 'Generator', quantity: 1, length: 81, width: 76, height: 65, weight: 38.0 },
        { name: 'Pruner', quantity: 1, length: 67, width: 129, height: 98, weight: 16.6 },
        { name: 'Surf table', quantity: 1, length: 37, width: 2, height: 149, weight: 6.8 },
        { name: 'Snowboard', quantity: 1, length: 3, width: 34, height: 260, weight: 4.3 },
        { name: 'Skis', quantity: 1, length: 2, width: 28, height: 170, weight: 6.8 },
        { name: 'Golf Bag / Clubs', quantity: 1, length: 24, width: 24, height: 113, weight: 6.8 },
        { name: 'Air-conditioning', quantity: 1, length: 33, width: 85, height: 60, weight: 16.0 },
        { name: 'Air purifier', quantity: 1, length: 13, width: 25, height: 30, weight: 1.0 },
        { name: 'Portable Heater', quantity: 1, length: 21, width: 41, height: 60, weight: 5.0 },
        { name: 'Tub / Bathtub', quantity: 1, length: 192, width: 80, height: 43, weight: 63.5 },
        { name: 'WC', quantity: 1, length: 71, width: 40, height: 71, weight: 27.1 },
        { name: 'Pedestal Sink', quantity: 1, length: 33, width: 45, height: 80, weight: 20.0 },
        { name: 'Port-A-Robe', quantity: 1, length: 60, width: 60, height: 89, weight: 9.0 },
      ],
      office : [
        { name: 'Office Chair', quantity: 1, length: 0.81, width: 0.72, height: 1.51, weight: 17.8 },
        { name: 'Suitcase', quantity: 5, length: 0.24, width: 0.45, height: 0.70, weight: 20.1 },
        { name: 'Duplex Refrigerator', quantity: 2, length: 1.18, width: 0.65, height: 1.80, weight: 133.1 },
        { name: 'Fridge', quantity: 3, length: 0.71, width: 0.71, height: 1.70, weight: 44.0 },
        { name: 'Minibar', quantity: 5, length: 0.62, width: 0.69, height: 1.15, weight: 27.0 },
        { name: '3 Seater Sofa', quantity: 1, length: 0.82, width: 2.10, height: 0.76, weight: 68.0 },
        { name: '2 Seater Sofa', quantity: 1, length: 1.45, width: 0.85, height: 0.82, weight: 45.0 },
        { name: 'Armchair', quantity: 1, length: 0.74, width: 0.82, height: 0.80, weight: 46.8 },
        { name: 'Dining Table (8+)', quantity: 1, length: 2.23, width: 1.01, height: 0.66, weight: 47.0 },
        { name: 'Dining Table (4-6)', quantity: 1, length: 1.63, width: 0.81, height: 0.62, weight: 35.0 },
        { name: 'Round Table (4)', quantity: 2, length: 0.77, width: 0.77, height: 0.75, weight: 42.9 },
        { name: 'Chair', quantity: 2, length: 0.53, width: 0.40, height: 1.08, weight: 5.0 }
      ]
};
const ItemList = ({ items }) => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
      const { current } = scrollRef;
      if (direction === "left") {
          current.scrollBy({ left: -200, behavior: 'smooth' });
      } else {
          current.scrollBy({ left: 200, behavior: 'smooth' });
      }
  };
  return( 
     <div className="relative ">
<button onClick={() => scroll('left')} className="absolute left-0 top-7 transform -translate-y-1/2 z-10 text-8xl -ml-9 font-extralight">{"<"}</button>
  <div className=' overflow-hidden gap-3 flex flex-row  ' ref={scrollRef} style={{ scrollBehavior: 'smooth' }} >  
      {items.map((item, index) => (
        <button key={index}  className=' h-[74px] w-fit border-2 px-10 rounded-full font font-aeroport '>
          {item.name}
        </button>
      ))}    
    </div>
    <button onClick={() => scroll('right')} className="absolute right-0 top-7 transform -translate-y-1/2 z-10 text-8xl -mr-9 font-extralight">{">"}</button>
</div>
  );
};
function Selfquote() {
    const [visibleList, setVisibleList] = useState(null);  
    const handleButtonClick = (listName) => {
      setVisibleList(visibleList === listName ? null : listName);
    }; 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
       <div className='p-4 flex flex-row justify-between border-b-2'>
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
        <Link to="/login"><button className='bg-[#3ccad1] rounded-xl  hidden sm:block w-[155px] font-aeroport font-normal h-[52px]'>Log In</button></Link>
        </div>
            
        <nav className=" sm:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Close menu icon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}  id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-800">
        <Link to="/login"> <button className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Log In</button>
        </Link> </div>
      </div>
    </nav>
    </div>    
    <div className='flex flex-col items-center mt-20 '>
        <div>
        <h2 className='text-4xl font-bold font-aeroport'>Self-quote</h2>
        </div>
        <div className='flex flex-row  gap-10 mx-auto mt-8 '>       
        <div className='lg:w-[1070px] w-[300px] gap-16 sm:w-[450px] flex lg:flex-row flex-col  lg:h-[473px] h-auto border-2 rounded-3xl p-[25px] mb-7'>
           <div>
            <div className='flex flex-col'>
            <div>
                <h2 className='text-xl font-semibold font-aeroport text-center sm:text-left'>Select Catagory</h2>
            </div>
            <div className='mt-4 text-center lg:flex lg:flex-col  space-x-2 space-y-3'>
                <button onClick={() => handleButtonClick('rooms')} className='w-[126px] h-[44px] bg-[#3ccad1]  rounded-full  font-aeroport'>Bedroom</button>
                <button onClick={() => handleButtonClick('livingRoomDiningRoom')} className='w-[126px] h-[44px] border-2  rounded-full font-aeroport'>Living Room</button>
                <button onClick={() => handleButtonClick('cookingAndWashing')} className='w-[180px] h-[44px] border-2  rounded-full font-aeroport'>Cooking and Washing</button>
                <button onClick={() => handleButtonClick('boxes')} className='w-[110px] h-[44px] border-2  rounded-full font-aeroport'>Others</button>
                <button onClick={() => handleButtonClick('others')} className='w-[110px] h-[44px] border-2  rounded-full font-aeroport'>Boxes</button>
                <button onClick={() => handleButtonClick('office')} className='w-[110px] h-[44px] border-2  rounded-full font-aeroport'>Office</button>
            </div>
            </div> 
           </div>
           <div className='lg:w-3/4'>

            <div className='flex flex-col mt-1'>
            <div>
                <h2 className='text-xl text-center sm:text-left font-semibold font-aeroport'>Select Items</h2>
            </div>
            <div className='mt-4 text-center' >                     
            {visibleList && <ItemList items={lists[visibleList]} />}           
        </div>
            </div> 
            <div className='flex flex-col mt-3'>
            <div>
                <h2 className='text-xl text-center sm:text-left font-semibold font-aeroport'>Added Items</h2>
                <img src={selfquote} alt="selfquote"
                width={301} 
                className='mx-auto my-auto'/>
            </div>
            </div> 
            <div className='text-right mt-20'>
             <Link to="/recomend">
            <button className='bg-[#3ccad1] w-[195px] h-[52px] rounded-2xl font-aeroport font-semibold '
            
            >CALCULATE</button>
            </Link>
            </div>
           </div>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Selfquote