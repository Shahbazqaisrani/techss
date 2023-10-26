import React from 'react'
import './Homeservicess.css'
import Servicescard from './Servicescard'



function Homeservices() {
  return (
  <>
  <div className="bghomeservices pb-5">
  <div className="col-10 mx-auto">
  <h1>Services</h1>

  
    <div className="row">
  
   
      <Servicescard title='</>Web Development' dis="I have experties in both Wordress and cutom website development. I can build any kind of website you need" />
      <Servicescard title='UX/UI Design' dis='I can design any kind of website for you which is responsive and eye-catchy. The design will be compatible and will have stunning view and pixels' />
      <Servicescard title='SEO' dis='Also we can Optimize the performance and improve the traffic on your website by on page and off page seo. We will rank your website on first page' />
      
 
  </div>
  </div>
  </div>
 
 
  </>
  )
}

export default Homeservices
