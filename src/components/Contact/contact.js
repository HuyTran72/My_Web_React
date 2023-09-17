import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import GitHubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import YoutubeIcon from '../../assets/youtube.png';
import { Container, Row, Col } from 'react-bootstrap';



const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
        <section id="contactPage">
        <div id="contact">
            <h1 className='contactPageTitle'>CONTACT ME</h1>
            <span className="contactDesc">Whether you need me, have feedback or want to discuss any work opportunities, you can contact me any time!</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="text" className="email" placeholder='Your Email'/>
                <textarea className="msg"  name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="send" className='submitBtn'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                    <img src={GitHubIcon} alt="GitHub" className="link" />    
                    <img src={LinkedinIcon} alt="Linkedin" className="link" /> 
                    <img src={YoutubeIcon} alt="Youtube" className="link" />    
                </div>
            </form>
        </div>
        </section>
        </Col>
      </Row>
    </Container>
    
  )
}

export default Contact