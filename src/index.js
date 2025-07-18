import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Allproject from './conponents/allproject';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/allproject' element={<Allproject/>}></Route>
    </Routes>
    </BrowserRouter>
);
