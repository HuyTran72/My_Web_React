import React from 'react';
import './experience.css';
import MUI from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import TutorImg from '../../assets/tutor.png';
import ResearchImg from '../../assets/research.png';

const Experience = () => {
  return (
    <Container>
        <Row>
            <section id='experience'>
            <h1 className="expTitle">PERSONAL WORK EXPERIENCE</h1>
            <span className="expDesc">All my projects show my skills practing with code druring my study in school.</span>
            <Col sm='4'>
                    <div className="expBars">
                        <div className="expBar">
                            <img src={TutorImg} alt="Tutor" className='TutorImg'/>
                            <div>
                                <h3>Computer and Math Tutor</h3>
                                <ul>
                                    <li>Worked in the Tutoring Center to help over 50 students in Calculus I, II, Discrete Math, Linear Algebra, Differential Equations, Statistics, Java Programming, Python, and Data Structure</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </Col>

            <Col sm='4'>
                    <div className="expBar"></div>
                    <img src={ResearchImg} alt="" className='ResearchImg'/>
            </Col>
            </section>

        </Row>
    </Container>
      
  )
}

export default Experience