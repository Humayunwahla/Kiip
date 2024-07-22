import React from 'react'
import downarrow from '../../../assets/icons/downarrow.png'

function Dashboardtable() {
  return (
    <div className='xl:px-[151px] px-8 pb-20 mt-4 mb-10 font-Nunito'>
        <div className='rounded-2xl bg-white h-[400px] p-7 mb-8'>
         <div className='flex flex-row justify-between'>
            <div>
            <h1 className='font-aeroport font-bold text-3xl'>New Requests</h1>
            </div>
             <div className='bg-gray-100 h-7 w-32 flex flex-row p-[2px]  px-1 justify-between'>
               <h1>October</h1>
               <img src={downarrow} alt="" 
               className='h-8 w-8' />
             </div>
         </div>
        {/** <table className=" w-full mt-8 space-y-6 border-spacing-9">
  <thead className='bg-gray-200 table-header-group h-12 w-full rounded-xl bg-contain'>
    <tr className='font-bold  '>
      <th>Space</th>
      <th>Location</th>
      <th>Date-Time</th>
      <th>Size</th>
      <th>Amount</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody className='text-center border-spacing-10 '>
    <tr className='table-row mt-5'>
      <td>Mini</td>
      <td>6096 Marjolaine Landing</td>
      <td>12.09.2019 - 12.53 PM</td>
      <td>1.0m x 1.0m
      (up to 1 m3)</td>
      <td>$34,295</td>
      <td><button className='text-[#21A3AA]'>Accept</button></td>
      <td><button className='text-[#F93C65]'>Reject</button></td>
    </tr>
    <tr className=''>
      <td className='justify-center'>Mini</td>
      <td  className=''>6096 Marjolaine Landing</td>
      <td>12.09.2019 - 12.53 PM</td>
      <td>1.0m x 1.0m
      (up to 1 m3)</td>
      <td>$34,295</td>
      <td><button className='text-[#21A3AA]'>Accept</button></td>
      <td><button className='text-[#F93C65]'>Reject</button></td>
    </tr>
    <tr className=''>
      <td className='justify-center'>Mini</td>
      <td  className=''>6096 Marjolaine Landing</td>
      <td>12.09.2019 - 12.53 PM</td>
      <td>1.0m x 1.0m
      (up to 1 m3)</td>
      <td>$34,295</td>
      <td><button className='text-[#21A3AA]'>Accept</button></td>
      <td><button className='text-[#F93C65]'>Reject</button></td>
    </tr>
  </tbody>
</table> */}
<div className="table w-full border-spacing-y-10 ">
  <div className="table-header-group h-12  rounded-full  border-b-2 border-gray-800">
    <div className="table-row font-bold bg-gray-200 mt-10 text-center  ">
      <div className="table-cell content-center">Space</div>
      <div className="table-cell content-center ">Location</div>
      <div className="table-cell content-center ">Date-Time</div>
      <div className="table-cell content-center ">Size</div>
      <div className="table-cell content-center ">Amount</div>
      <div className="table-cell content-center "></div>
      <div className="table-cell content-center "></div>
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
 
</div>
        </div>

    </div>
  )
}

export default Dashboardtable