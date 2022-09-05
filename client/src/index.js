import ContProvider from './Cont'
import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
require("dotenv").config()



ReactDOM.render(
  <React.StrictMode>
     <Router>
      <ContProvider>
        <App />
      </ContProvider>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
