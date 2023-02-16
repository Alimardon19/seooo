import React  from 'react';
import {Route, Routes} from 'react-router-dom';
import Product from './pages/product';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id/:name' element={<Product/>}/>
    </Routes>
  );
}

export default App;
