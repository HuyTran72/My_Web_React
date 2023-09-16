import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Intro />
        <Projects />
        <Skills />
    </div>
  );
}

export default App;
