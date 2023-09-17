import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const LocalNavbar = () => {
    return (

        <Navbar bg="blue" data-bs-theme="blue" expand="sm">
        <Container>
            <img src={logo} alt="Logo" className='logo' />

            <Nav className="desktopMenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Work Experience</Nav.Link>
            <Nav.Link href="#link">Contact me</Nav.Link>        
          </Nav>
        </Navbar.Collapse>
            </Nav>

            <button className="btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }} >
                <img src={contactImg} alt='' className='btnimg' />Contact</button>
        </Container>
      </Navbar> 
    )
}

export default LocalNavbar;

        // <nav className="navbar" >
        //     <img src={logo} alt="Logo" className='logo' />
        //     <div className='desktopMenu' >
        //         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        //         <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Skills</Link>
        //         <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Work Experience</Link>
        //         <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Projects</Link>
        //         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Contact Me</Link>
        //     </div>
        //     <button className="btn" onClick={() => {
        //         document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        //     }} >
        //         <img src={contactImg} alt='' className='btnimg' />Contact</button> 
        
            
        // </nav>