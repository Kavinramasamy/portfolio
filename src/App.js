import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Skills from './Component/skills';
import Navigationbar from './Component/Navigationbar';
import Project from './Component/Project';
import  Footer  from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();


function App() {
  return (
    <div className="App p-3">
        <div id="navigationbar"><Navigationbar/></div>
         <div id="home"><Home/></div>
        <div id="about"><About/></div>
        <div id="skills"><Skills/></div>
        <div id="project"><Project/></div>
        <div id="contact"><Contact/></div>
        <div id="footer"><Footer/></div>
        
        
       
      
    </div>
  );
}

export default App;
