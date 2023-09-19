import React from 'react';
import './projects.css';
import project1 from '../../assets/personal_web.png';
import project2 from '../../assets/spotify.png';
import project3 from '../../assets/pyramid.png';
import MUI from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';


const Projects = () => {
  return (
    <Container>
        <Row>
            <Col>
                <section id='projects'>
                    <h2 className="projectTitle">MY PROJECTS</h2>
                    <span className="projectDesc">All my projects show my skills practing with code druring my study in school.</span>
                    <div className="projectBars">
                        <div className='projectBar'>
                            <img src={project1} alt="project1" className="projectImg" />
                                <div>
                                    <h5> <a href="https://huytran72.github.io/My_Web_React/">Personal Website </a>| HTLM, CSS, JavaScrip, Reactjs |<a href="https://github.com/HuyTran72/My_Web_React"> GitHub</a> </h5>
                                        <ul>
                                            <li>A personal website involves using React, a popular JavaScript library for building user interfaces to design and develop the website's front-end</li>
                                            <li>The platform created and maintained to showcase my personal information, skills, projects, and achievements based on a modern, interactive, and visually appealing online presence</li>
                                        </ul>
                                </div>
                        </div>
                

                        <div className='projectBar'>
                            <img src={project2} alt="project2" className="projectImg" />
                            <div>
                                <h5>Sportify App | Java | <a href="https://github.com/HuyTran72/Sportify_App"> GitHub</a></h5>
                                <ul>
                                    <li>Implemented a Sportify App that gathers data from the available list and developed a inteface using Java</li>
                                    <li>The app supports searching the artist, song, and good communicating with functional buttons like play, stop, next, previous</li>
                                </ul>
                            </div> 
                        </div>
                 
            
                        <div className='projectBar'>
                            <img src={project3} alt="project3" className="projectImg" />
                            <div>
                                <h5>Egyptian Pyramids App | Java | <a href="https://github.com/HuyTran72/Nassef_Pyramids_App"> GitHub</a></h5>
                                <ul>
                                    <li>Displayed information for a specific Egyptian pharaoh by asking the user for a pyramid ID number that the contributors associated with them</li>
                                    <li>Reports a list of requested pyramids without any duplicates. Displays all information such as contributor’s name, gold, and total contribution for each pharaoh</li>
                                </ul>
                            </div>  
                        </div>
                    
                    </div>
                </section>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Projects