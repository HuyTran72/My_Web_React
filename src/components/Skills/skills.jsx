import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do?</span>
      <span className="skillDesc">I am a strong understanding of design and use friendly websites.</span>
      <div className="skillBars">
        <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className='skillBarImg' />

          <div>
              <h2>UI/UX Design</h2>
              <p>This is a demo test, you can write here!</p>
          </div>
        </div> 

        <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div>
              <h2>Web Design</h2>
              <p>Making the production ready website</p>
          </div>
        </div>  

        <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div>
              <h2>App Design</h2>
              <p>You can write text related to mobile app development.</p>
          </div>
        </div>  

      </div>
    </section>
  )
}

export default Skills