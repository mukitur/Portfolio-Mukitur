import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About Me/About';
import Contact from './Pages/Contact /Contact';
import Home from './Pages/Home/Home/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
