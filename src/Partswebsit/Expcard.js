import React from 'react'
import './Expcard.css'

function Expcard(props) {
  return (
   <>
     <div className="expcard mx-2 my-2" >
         <img src={props.imsrc} alt="" />
    <div className="card__content">
      <p className="card__title">{props.titles}</p>
      <p className="card__description"> {props.desc} <br/> .
        <button className="primary"><a href="https://petkeen.com/" tar>Visit</a></button>
      </p>
    </div>
  </div>
   </>
  )
}

export default Expcard
