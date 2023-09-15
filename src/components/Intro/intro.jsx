import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm Huy Tran.</span>
                <p className="introPara">I'm very professional in develop app.</p>
                <Link><button className="but"><img src={btnImg} alt="Hire me" />Hire me</button></Link>
            </div>
            <img src="" alt="" className="bg" />
        </section>
    )
}

export default Intro