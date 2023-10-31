import React from 'react'
import './Expcard.css'
import petim from '../Images/Petkeen.png'
import holgicim from '../Images/holgicim.png'
import sknm from '../Images/skinnymixes.png'

function Expcard(props) {
  return (
   <>
   <div className="card mx-1 bg-dark" style={{width:"20rem", height:"28rem"  }}>
  <img src={petim} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Petkeen</h5>
    <p className="card-text">I developed this website for a client of autaralia using WordPress</p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
   <div className="card mx-1 bg-dark" style={{width:"20rem", height:"28rem"  }}>
  <img src={holgicim} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Holgics</h5>
    <p className="card-text">I developed this website for a client. You can also visit this website</p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
   <div className="card mx-1 bg-dark" style={{width:"20rem", height:"28rem"  }}>
  <img src={sknm} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Skinnymixes</h5>
    <p className="card-text">I developed the exact copy of this website for a client</p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
   </>
  )
}

export default Expcard
