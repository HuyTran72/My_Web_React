import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar" >
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu' >
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Contact</Link>

            </div>
            <button className='desktopMenuBtn' >
                <img src='' alt='' className='desktopMenuImg' />Contact me</button> 

        </nav>
    )
}

export default Navbar;