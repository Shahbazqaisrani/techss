import React from 'react'
import './Experience.css'
import Expcard from './Expcard';


function Experience() {
  return (
    <>

    <div className='bgexperience pb-5'>
      <div className="col-10 mx-auto">
       
          <h1>Experience</h1>
          <div className="experience">
          <Expcard/>
          </div>
    </div>
    </div>

    </>
  )
}

export default Experience;
