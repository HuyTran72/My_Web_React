import React from 'react';
import './experience.css';
import MUI from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import TutorImg from '../../assets/tutor.png';
import ResearchImg from '../../assets/research.png';
import TeamLeadImg from '../../assets/TeamLeader.jpg';

const Experience = () => {
  return (
    <Container>
        <Row>
            <Col>
                <section id='experience'>
                    <h2 className="expTitle">WORK EXPERIENCE</h2>
                    <div className="expBars">
                        <div className='expBar'>
                            <img src={TutorImg} alt="work1" className="expImg" />
                                <div>
                                    <h5>Computer and Math Tutor</h5>
                                        <ul>
                                            <li>Worked in the Tutoring Center to assisted over 100 students in Math, Java, Data and Algorithm</li>
                                            <li>Using CSS</li>
                                            <li>By React</li>
                                        </ul>
                                </div>
                        </div>
                

                        <div className='expBar'>
                            <img src={ResearchImg} alt="exp2" className="expImg" />
                            <div>
                                <h5>Research Assistant</h5>
                                <ul>
                                    <li>Collaborated with a prefessor to research and build scalable templates in Lorem Ipsum</li>
                                    <li>Provided training sessions for classmates to use effectively utilized the data program</li>
                                    <li>Keep track of each student's progress, sent reminders to ensure they were working on their goals</li>
                                </ul>
                            </div> 
                        </div>
                 
            
                        <div className='expBar'>
                            <img src={TeamLeadImg} alt="exp3" className="expImg" />
                            <div>
                                <h5>Peer Team Learning Leader</h5>
                                <ul>
                                    <li>Engaged classmates to work in a project group of five</li>
                                    <li>Help them to review the difficult lessons and problems to enhance their matter knowledge, study skills, and course success</li>
                                    <li>Build, manage, and develop the Lovelace Cupcakes project by using Java</li>
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

export default Experience