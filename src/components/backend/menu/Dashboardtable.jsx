import React from 'react'
import downarrow from '../../../assets/icons/downarrow.png'

function Dashboardtable() {
  return (
    <div className='xl:px-[151px] sm:px-8 px-3 pb-20 mt-4 mb-10 font-Nunito'>
        <div className='rounded-2xl bg-white h-auto lg:h-[400px] sm:p-7 p-3 mb-8'>
         <div className='flex flex-row justify-between'>
            <div>
            <h1 className='font-aeroport font-bold text-xl sm:text-3xl'>New Requests</h1>
            </div>
             <div className='bg-gray-100 h-7 w-32 flex flex-row p-[2px]  px-1 justify-between'>
               <h1>October</h1>
               <img src={downarrow} alt="" 
               className='h-8 w-8' />
             </div>
         </div>
  {/**     
<div className="table w-full  border-spacing-y-10 overflow-x-scroll">
  <div className="table-header-group h-12  rounded-full  border-b-2 border-gray-800">
    <div className="table-row text-xs font-bold bg-gray-200 mt-10 text-center  ">
      <div className="table-cell content-center">Space</div>
      <div className="table-cell content-center ">Location</div>
      <div className="table-cell content-center ">Date-Time</div>
      <div className="table-cell content-center ">Size</div>
      <div className="table-cell content-center ">Amount</div>
      <div className="table-cell content-center "></div>
      <div className="table-cell content-center "></div>
    </div>
  </div>
 

  <div className="table-row-group text-center text-xs ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">Mini</div>
      <div className="table-cell border-b-2 pb-3 ">6096 Marjolaine Landing</div>
      <div className="table-cell border-b-2 pb-3">12.09.2019 - 12.53 PM</div>
      <div className="table-cell border-b-2 pb-3 ">1.0m x 1.0m
      (up to 1 m3)</div>
      <div className="table-cell  border-b-2 pb-3">$34,295</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#21A3AA]'>Accept</button></div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#F93C65]'>Reject</button></div>
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">Mini</div>
      <div className="table-cell border-b-2 pb-3 ">6096 Marjolaine Landing</div>
      <div className="table-cell border-b-2 pb-3">12.09.2019 - 12.53 PM</div>
      <div className="table-cell border-b-2 pb-3 ">1.0m x 1.0m
      (up to 1 m3)</div>
      <div className="table-cell  border-b-2 pb-3">$34,295</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#21A3AA]'>Accept</button></div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#F93C65]'>Reject</button></div>
    </div>
   
  </div>
  <div className="table-row-group text-center  ">
    <div className="table-row border-spacing-6 ">
      <div className="table-cell border-b-2 pb-3">Mini</div>
      <div className="table-cell border-b-2 pb-3 ">6096 Marjolaine Landing</div>
      <div className="table-cell border-b-2 pb-3">12.09.2019 - 12.53 PM</div>
      <div className="table-cell border-b-2 pb-3 ">1.0m x 1.0m
      (up to 1 m3)</div>
      <div className="table-cell  border-b-2 pb-3">$34,295</div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#21A3AA]'>Accept</button></div>
      <div className="table-cell border-b-2 pb-3"><button className='text-[#F93C65]'>Reject</button></div>
    </div>
   
  </div>
 
</div> */}
{/* Table */}
<div className="overflow-x-auto md:overflow-none w-full">
          <table className="w-full gap-5   border border-gray-300 mt-6">
            {/* Table Header */}
            <thead className="bg-gray-200 text-lg font-bold font-Nunito">
              <tr className="text-center">
                <th className="border-b-2 py-2 px-5">Space</th>
                <th className="border-b-2 py-2 px-5">Location</th>
                <th className="border-b-2 py-2 px-5">Date-Time</th>
                <th className="border-b-2 py-2 px-5">Size</th>
                <th className="border-b-2 py-2 px-5">Amount</th>
                <th className="border-b-2 py-2 px-5"></th>
                <th className="border-b-2 py-2 px-5"></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="text-center font-Nunito">
              {/* Example row (you can map over your data here) */}
              <tr className="border-b border-gray-300">
                <td className="py-3">Mini</td>
                <td className="py-3">6096 Marjolaine Landing</td>
                <td className="py-3">12.09.2019 - 12.53 PM</td>
                <td className="py-3">1.0m x 1.0m (up to 1 m3)</td>
                <td className="py-3">$34,295</td>
                <td className="py-3"><button className='text-[#21A3AA]'>Accept</button></td>
                <td className="py-3"><button className='text-[#F93C65]'>Reject</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">Mini</td>
                <td className="py-3">6096 Marjolaine Landing</td>
                <td className="py-3">12.09.2019 - 12.53 PM</td>
                <td className="py-3">1.0m x 1.0m (up to 1 m3)</td>
                <td className="py-3">$34,295</td>
                <td className="py-3"><button className='text-[#21A3AA]'>Accept</button></td>
                <td className="py-3"><button className='text-[#F93C65]'>Reject</button></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3">Mini</td>
                <td className="py-3">6096 Marjolaine Landing</td>
                <td className="py-3">12.09.2019 - 12.53 PM</td>
                <td className="py-3">1.0m x 1.0m (up to 1 m3)</td>
                <td className="py-3">$34,295</td>
                <td className="py-3"><button className='text-[#21A3AA]'>Accept</button></td>
                <td className="py-3"><button className='text-[#F93C65]'>Reject</button></td>
              </tr>
             

              {/* Additional rows */}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

    </div>
    </div>
  )
}

export default Dashboardtable