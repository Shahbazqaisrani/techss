import React from 'react'
import './Ecard.css'

function Ecard(props) {
  return (
   <>
 
 <div className="ecard mx-1 my-1">
  <p className="c-txt">{props.sk}</p>
</div>

    </>
   
  )
}

export default Ecard
