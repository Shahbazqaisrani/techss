
import './App.css';
import About from './Components/About';
import Home from './Components/Home';


import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

function App() {
  return (
   <>
      <Navbar/>
     <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/about' Component={About}/>
     <Route path='/services' Component={Services}/>
     <Route path='/contactus' Component={Contactus}/>
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
