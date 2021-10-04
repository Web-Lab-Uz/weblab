import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './system/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('WebLabCodes')
);

