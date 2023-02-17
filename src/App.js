import React  from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
