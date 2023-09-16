import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';


const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className='contactPageTitle'>CONTACT ME</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="text" className="email" placeholder='Your Email'/>
                <textarea className="msg"  name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="send" className='submitBtn'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact