import React from 'react'
import './Expcard.css'

function Expcard(props) {
  return (
   <>
     <div class="expcard mx-2 my-2" >
         <img src={props.imsrc} alt="" />
    <div class="card__content">
      <p class="card__title">{props.titles}</p>
      <p class="card__description"> {props.desc} <br/> .
        <button className="primary"><a href="https://petkeen.com/" tar>Visit</a></button>
      </p>
    </div>
  </div>
   </>
  )
}

export default Expcard
