import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Iconbox from './components/Iconbox';
import Calltoaction from './components/Calltoaction';
import Bar from './components/Bar.js'
import Papularroutes from './components/Papularroutes.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Mainpage= () => {
    return (
        <div>
            <Navbar/>
            <Bar/>
            <Papularroutes/>
            <Calltoaction/>
            <Iconbox />
            <Footer />
        </div>
    )
}

export default Mainpage; 