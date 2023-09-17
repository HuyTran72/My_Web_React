import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import { Container, Row, Col } from 'react-bootstrap';


const Skills = () => {
  return (
    <Container>
      <Row>
        <Col>
        <section id='skills'>
      <span className="skillTitle">TECHNICAL SKILLS</span>
      <span className="skillDesc">I am a strong understanding of design and use friendly websites.</span>
      <div className="skillBars">
        <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className='skillBarImg' />

          <div>
              <h5>Language</h5>
              <p>Java, HTML/CSS, JavaScript, C/C++, Python</p>
          </div>
        </div> 

        <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div>
              <h5>Frameworks Tools</h5>
              <p>Git, GitHub, VS Code, Eclipse, React, HTTP protocol</p>
          </div>
        </div>  

        <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div>
              <h5>Related Coursework</h5>
              <p>Data Structure, Object-Oriented Programming, Computer Systems, Discrete Math, Computer Vision and Algorithm</p>
          </div>
        </div>  

      </div>
    </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills