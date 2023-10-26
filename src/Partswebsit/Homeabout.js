import React, { useState } from 'react'
import './Homeabout.css'
import img from '../Images/ssbackground.png'
import Aboutcard from './Aboutcard';
 import {Link} from 'react-router-dom'

function Homeabout() {
  const [showtab, setShowtab] = useState(1);
const handleclick = (e)=>{
   setShowtab(e);
}

  return (
    <>
    <div className="bgabouthome pt-5 pb-5">
    <div className='container-fluid'>
      <div className="col-10 mx-auto">
       <div className="row">
            
        <div className="col-lg-4 col-md-6 ">
        <img src={img} alt="" />
        </div>
        <div className="col-lg-8 col-md-6 personalinfo">
        <h1>About ME</h1>
        <p>I'm a web developer with a passion for crafting sleek and efficient digital solutions. Armed with expertise in HTML, CSS, JavaScript, and a knack for problem-solving, I bring concepts to life on the web. I thrive on optimizing website performance and ensuring compatibility across browsers. My strong communication skills foster seamless collaboration with designers, content creators, and clients. I'm committed to staying updated with industry trends, striving to deliver exceptional web experiences that leave a lasting impression.
          </p>
         <div className="row">
          
          <ul className='nav nav-pills' id='pills-tab' role='tablist'>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(1)}> Skills</Link>
            </li>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(2)}> Experience</Link>
            </li>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(3)}> Education</Link>
            </li>
          </ul>
                  <div className="abcontent">
                    {showtab===1 && <Aboutcard heading='Skills' para='React developer' para2='MERN Stack developer' para3='WordPress developer'/>}
                    
                    {showtab===2 && <Aboutcard heading='Experience' para='As Itern 6 month' para2='Wordpress Freelancing projects'/>}
                    
                    {showtab===3 && <Aboutcard heading='NFTP UE Lahore' para='Full Stack Web developement'
                     heading2='Internee' para2='MERN Stack'/>}
                    
                  </div>
              </div>

          </div>
         </div>
        </div>

      </div>
        
      </div>
    
    
    </>
  )
}

export default Homeabout
