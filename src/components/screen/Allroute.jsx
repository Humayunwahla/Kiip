import React from 'react'
import Home from '../pages/Home'
import Feature from '../shared/Feature'
import Works from '../shared/Works'
import Footer from '../innerpages/Footer'
import Workflexible from '../nanopages/Workflexible'



function Allroute() {
  return (
    <div>
        <Home/>
        <Feature/>
        <Workflexible/>
        <Works/>
        <Footer/>
        
        
    </div>
  )
}

export default Allroute