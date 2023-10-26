import React from 'react'
import './Servicescard.css'

function Servicescard(props) {
  return (
    
 
    <div class="scard">
    <p class="card-title">{props.title}</p>
    <p class="small-desc pt-2">
      {props.dis}
    </p>
  
  </div>
    
  )
}

export default Servicescard
