import React from 'react'
import Dashnavbar from './Dashnavbar'

function Userlisting() {
  return (
    <div className='bg-gray-100 min-h-full'>
        <Dashnavbar/>

        <div>
            <div className='xl:px-[151px] px-8  mt-4 '>
            <h1 className='font-aeroport font-bold text-3xl'>User Listing</h1>
            </div>
        <div className='xl:px-[151px] px-8 pb-20 mt-4 mb-10'>
        <div className='rounded-2xl bg-white h-auto p-7 mb-8'>
         
            
            
{/**       
    
<div className="table w-full border-spacing-y-10  font-Nunito">
  <div className="table-header-group h-12  rounded-full  border-b-2 border-gray-800">
    <div className="table-row font-bold bg-gray-200 mt-10 text-center  ">
      <div className="table-cell content-center">ID</div>
      <div className="table-cell content-center ">Name</div>
      <div className="table-cell content-center ">Address</div>
      <div className="table-cell content-center ">Date</div>
      <div className="table-cell content-center ">Type</div>
      <div className="table-cell content-center ">Status</div>
      
    </div>
  </div>
 

  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div><div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">00001</div>
      <div className="table-cell border-b-2 pb-3 ">Christine Brooks</div>
      <div className="table-cell border-b-2 pb-3">089 Kutch Green Apt. 448</div>
      <div className="table-cell border-b-2 pb-3 ">04 Sep 2019</div>
      <div className="table-cell  border-b-2 pb-3">Electric</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></div>
      
    </div>
   
  </div>

 
</div> */}

<div className="overflow-x-auto md:overflow-none w-full">
          <table className="w-full gap-5   border border-gray-300 mt-6">
            {/* Table Header */}
            <thead className="bg-gray-200 text-lg font-bold font-Nunito ">
              <tr className="text-center ">
                <th className="border-b-2 py-2 px-5 ">ID</th>
                <th className="border-b-2 py-2 px-5">NAMES</th>
                <th className="border-b-2 py-2 px-5 ">ADDRESS</th>
                <th className="border-b-2 py-2 px-5 ">DATE</th>
                <th className="border-b-2 py-2 px-5 ">TYPE</th>
                <th className="border-b-2 py-2 px-5 ">STATUS</th>
                
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="text-center font-Nunito">
              {/* Example row (you can map over your data here) */}
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">0001</td>
                <td className="py-3">Christine Brooks</td>
                <td className="py-3">089 Kutch Green Apt. 448</td>
                <td className="py-3">04 Sep 2019</td>
                <td className="py-3">Electric</td>
                <td className="py-3"><button className='text-[#00B69B] rounded-lg bg-[#00B69B] bg-opacity-5 w-[93px] h-[27px]'>Completed</button></td>
              </tr>
             

              {/* Additional rows */}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        </div>

    </div>
        </div>
    </div>
  )
}

export default Userlisting