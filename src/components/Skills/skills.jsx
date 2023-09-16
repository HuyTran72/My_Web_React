import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">TECHNICAL SKILLS</span>
      <span className="skillDesc">I am a strong understanding of design and use friendly websites.</span>
      <div className="skillBars">
        <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className='skillBarImg' />

          <div>
              <h2>Language</h2>
              <p>Java, HTML/CSS, JavaScript, C/C++, Python</p>
          </div>
        </div> 

        <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div>
              <h2>Frameworks/Developer Tools</h2>
              <p>Git, GitHub, VS Code, Eclipse, React, HTTP protocol</p>
          </div>
        </div>  

        <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div>
              <h2>Related Coursework</h2>
              <p>Data Structure, Object-Oriented Programming, Computer Systems, Discrete Math, Computer Vision and Algorithm</p>
          </div>
        </div>  

      </div>
    </section>
  )
}

export default Skills