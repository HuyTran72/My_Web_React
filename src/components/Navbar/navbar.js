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
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Awards</Link>
            </div>
            <button className="contactImg" >
                <img src={contactImg} alt='' className='contactImg' />Contact</button> 

        </nav>
    )
}

export default Navbar;