import React from 'react'
import './Experience.css'
import Expcard from './Expcard';
import petim from '../Images/petim.png'
import holgicim from '../Images/holgicim.png'
import sknm from '../Images/skinnymixes.png'

function Experience() {
  return (
    <>

    <div className='bgexperience'>
      <div className="col-10 mx-auto">
        <div className="row">
          <h1>Experience</h1>
      <Expcard imsrc={petim} titles='Petkeen' desc='I developed this website for a client of Australia. this website is build using wordpress and you can also check this site. This is a pets care website' />
      <Expcard imsrc={holgicim} titles='Holgic' desc='I developed this website for a client. This website is build using wordpress and you can also check this site. This is a health care website and a best sample of work' />
      <Expcard imsrc={sknm} titles='Skinnymixes' desc='I developed the exact replica of this website for a client of India. this website is build using wordpress and you can also check this site. This is a pets care website' />
      </div>
    </div>
    </div>

    </>
  )
}

export default Experience;
