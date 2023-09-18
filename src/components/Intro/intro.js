import React from 'react';
import './intro.css';
import avatar from '../../assets/gg1.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import { Container, Row, Col } from 'react-bootstrap';


const Intro = () => {
    return (
            <Container>
                <Row>
                    <Col sm="8">
                    <div className="introContent">
                        <span className="hello">Hello,</span>
                        <span className="introText"> My name is <span className='introName'> Huy Tran.</span> <br /></span>
                        <p className="introPara">I'm pursing my under-graduation with major in Software Engineering at San Jose State University. I love exploring new technologies and develop interest in solving complex problems of the fundamental Maths which help me to improve my understanding of difficul problems. I have experience building websites, and teaching as a tutor when I was in college. I am looking for interships for Spring or Summer 2024. Don't hesitate to catch me!.</p>
                        <Link><button className="butn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
                    </div>
                    </Col>

                    <Col sm="4">
                    <div>
                        <img src={avatar} alt="Profile" className="avatar" />
                    </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Intro


