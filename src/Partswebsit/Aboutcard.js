import React from 'react'
import './Aboutcard.css'

function Aboutcard(props) {
  return (
    <>
    <div className='homaboutcard' id='homeaboutcard'>
        <h6 style={{color:'red'}}>{props.heading}</h6>
        <p>{props.para}</p>
        <h6 style={{color:'red'}}>{props.heading2}</h6>
        <p>{props.para2}</p>
        <p>{props.para3}</p>
      
    </div>
    </>
  )
}

export default Aboutcard
