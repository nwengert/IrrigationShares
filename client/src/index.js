import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//styling
import './styling/navbar.css';
import './styling/index.css';
import './styling/Admin.css';
//images
import './images/LymanLake.jpg';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);