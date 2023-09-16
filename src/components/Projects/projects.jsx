import React from 'react';
import './projects.css';
import project1 from '../../assets/personal_web.png';
import project2 from '../../assets/spotify.png';
import project3 from '../../assets/pyramid.png';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projecTtitle'>My Projects</h2>
        <span className="projectDesc">All my projects show my skills practing with code druring my study in school.</span>
        <div className="projectBars">
            <div className='projectBar'></div>
                <img src={project1} alt="project1" className="projectImg" />
                <div>
                    <h1>Personal Project | HTLM, CSS, JavaScrip, Reactjs |<a href="https://github.com/HuyTran72/My_Web_React"> Github</a> </h1>
                    <p>Show all my resume</p>
                </div>

            <div className='projectBar'></div>
                <img src={project2} alt="project2" className="projectImg" />
                <div>
                    <h1>Sportify App | Java | <a href="https://github.com/HuyTran72/Sportify_App"> Github</a></h1>
                    <p>Build an app run the music</p>
                </div>  
            
            <div className='projectBar'></div>
                <img src={project3} alt="project3" className="projectImg" />
                <div>
                    <h1>Egyptian Pyramids App | Java | <a href="https://github.com/HuyTran72/Nassef_Pyramids_App"> Github</a></h1>
                    <p>Use Java to build Pyramids includes the list of Paraong's information</p>
            </div>
            
        </div>
    </section>
  )
}

export default Projects