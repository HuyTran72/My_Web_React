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
                        <span className="introText"> My name is <span className='introName'> Huy Tran.</span> <br />I'm Junior in Software Engineering <br />at San Jose State University</span>
                        <p className="introPara">I'm very professional in develop app.</p>
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


