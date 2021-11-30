import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About Me/About';
import AirCloud from './Pages/AllPortfolio/AirCloud/AirCloud';
import DentalStudio from './Pages/AllPortfolio/DentalStudio/DentalStudio';
import WatchWorld from './Pages/AllPortfolio/WatchWorld/WatchWorld';
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
          <Route path="/watchworld" element={<WatchWorld/>}/>
          <Route path="/aircloud" element={<AirCloud/>}/>
          <Route path="/dental" element={<DentalStudio/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
