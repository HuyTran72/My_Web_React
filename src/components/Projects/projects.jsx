import React from 'react';
import './projects.css';
import project1 from '../../assets/personal_web.png';
import project2 from '../../assets/spotify.png';
import project3 from '../../assets/pyramid.png';
import MUI from '@mui/material';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className="projectTitle">MY PROJECTS</h2>
        <span className="projectDesc">All my projects show my skills practing with code druring my study in school.</span>
        <div className="projectBars">
            <div className='projectBar'>
            <   img src={project1} alt="project1" className="projectImg" />
                <div>
                    <h1>Personal Website | HTLM, CSS, JavaScrip, Reactjs |<a href="https://github.com/HuyTran72/My_Web_React"> GitHub</a> </h1>
                    <ul>
                        <li>
                            Using HTML
                        </li>
                        <li>
                            Using CSS
                        </li>
                        <li>
                            By React
                        </li>
                    </ul>
                </div>
            </div>
                

            <div className='projectBar'>
                <img src={project2} alt="project2" className="projectImg" />
                <div>
                    <h1>Sportify App | Java | <a href="https://github.com/HuyTran72/Sportify_App"> GitHub</a></h1>
                    <ul>
                        <li>Build an app music</li>
                        <li>Play/Stop/Next/Previous Song</li>
                        <li>Show the list when finding</li>
                    </ul>
                </div> 
            </div>
                 
            
            <div className='projectBar'>
                <img src={project3} alt="project3" className="projectImg" />
                <div>
                    <h1>Egyptian Pyramids App | Java | <a href="https://github.com/HuyTran72/Nassef_Pyramids_App"> GitHub</a></h1>
                    <ul>
                        <li>Use Java to build Pyramids includes the list of Paraong's information</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>  
            </div>
                    
        </div>
    </section>
  )
}

export default Projects