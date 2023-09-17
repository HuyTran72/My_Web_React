import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";


function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Intro />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;

{/* <div className="App">

<Experience />

</div> */}