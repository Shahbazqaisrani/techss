import React from 'react'
import './Homexperties.css'
import Ecard from './Ecard'

function Homexperties() {
  return (
  <>
  <div className="bghomexperties pb-5">
    <div className="col-10 mx-auto">
        <h1>Experties</h1>
        <div className="row">
  <Ecard sk='WordPress' det=''/>
  <Ecard sk='React JS' det='' />
  <Ecard sk='JavaScript' det='' />
  <Ecard sk='Mango DB' det='' />
  
  <Ecard sk='Express JS' det='' />
  <Ecard sk='HTML' det='' />
  <Ecard sk='CSS' det='' />
  <Ecard sk='BOOTSTRAP' det='' />
  <Ecard sk='jQuery' det='' />
  <Ecard sk='Node JS' det='' />
 
  </div>
  </div>
  </div>
  </>
  )
}

export default Homexperties
