import React from 'react'
import './Servicescard.css'

function Servicescard(props) {
  return (
    
 
    <div className="scard">
    <p className="card-title">{props.title}</p>
    <p className="small-desc pt-2">
      {props.dis}
    </p>
  
  </div>
    
  )
}

export default Servicescard
