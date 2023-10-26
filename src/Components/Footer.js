import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
  
   <div className="bgfooter">
        <div className="col-10 mx-auto">
          <div className="row">
           <div className="contact col-4">
            <h1 className='pb-3'>Contact ME</h1>
            <div className="phtl" id='phtl'>
                    <i className="fa-brands fa-telegram fa-2x"></i> <p className='pt-2'> +923433085528</p><br />
            </div>
            <div className="phtl" id='phtl'>
            <i className="fa-solid fa-phone fa-2x"> </i><p className='pt-1'> +923176734489</p>
            </div>
            <div className="iconssmedia" id='smediaicons'>

<Link to="https://www.facebook.com/muhammadshahbaz.muhammadshahbaz.925/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-facebook-f"></i></Link>
<Link to="https://www.linkedin.com/in/web-developer-front-end-exper/"  rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-linkedin-in"></i></Link>
<Link to="https://www.instagram.com/shahbazsharif706/" rel="noreferrer" target="_blank"><i className="fa-brands fa-2x fa-instagram" rel="noreferrer" target="_blank"></i></Link>
<Link to="https://twitter.com/Shahbaz52390668/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-x-twitter" ></i></Link>
<Link to="https://wa.me/+923433085528" rel="noreferrer" target="_blank"><i className="fa-brands fa-2x fa-whatsapp"></i></Link>

</div>
           </div>

           <div className="contform col-lg-8">
           <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label for="email">Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div className="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
           </div>
           
           </div>

          
        </div>    
   </div>
   </>
  )
}

export default Footer
