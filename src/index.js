import React from 'react';
import App from './App';
import ReactDom from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import './index.css';


const rootElement = ReactDom.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
