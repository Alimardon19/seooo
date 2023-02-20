import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </HelmetProvider>
);

ReactDOM.hydrate(app, document.getElementById("root"));