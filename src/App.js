import React  from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';
import About from './pages/about';
import Product from './pages/product';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:id/:name' element={<Product/>}/>
    </Routes>
  );
}

export default App;
