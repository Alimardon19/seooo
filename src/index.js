import React from 'react';
import App from './App';
import {hydrate, render} from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import './index.css';


const APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
