import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
