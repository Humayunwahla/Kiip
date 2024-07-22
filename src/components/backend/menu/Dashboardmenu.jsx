import React from 'react'
import Dashnavbar from './Dashnavbar'
import Dashboardnavigation from './Dashboardnavigation'
import Dashboardtable from './Dashboardtable'

function Dashboardmenu() {
  return (
    <div className='bg-gray-100 min-h-full'>
      <Dashnavbar/>
      <Dashboardnavigation/>
      <Dashboardtable/>
    </div>
  )
}

export default Dashboardmenu