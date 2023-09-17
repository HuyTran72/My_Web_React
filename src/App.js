import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
