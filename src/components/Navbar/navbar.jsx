import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <nav className="navbar" >
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu' >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Work Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">Contact Me</Link>
            </div>
            <button className="btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }} >
                <img src={contactImg} alt='' className='btnimg' />Contact</button> 

        </nav>
    )
}

export default Navbar;