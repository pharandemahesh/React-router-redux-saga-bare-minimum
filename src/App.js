import React from 'react';
import Home from './views/home'; 
import About from './views/about'; 
import ContactUs from './views/contactus'; 
import { HashRouter as Router, Route, Link } from "react-router-dom"; 
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <Router> 
      <Route path='/' exact component={Home}></Route> 
      <Route path='/about' exact component={About}></Route> 
      <Route path='/contact-us' exact component={ContactUs}></Route> 
    </Router> 
    );
}

export default App;
