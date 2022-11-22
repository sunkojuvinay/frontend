import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Switch, Route } from'react-router-dom';
import './index.css'
// import * as ReactBootStrap from "react-bootstrap";
import Radiobutton from './components/Radiobutton';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
// import TestingNavbar from './components/TestingNavbar';
import Footer from './components/Footer';
import SqlServer from './SqlServer';
import Dropdownbox from './components/Dropdownbox';

function App() {
  return (
    <div className="App">


<Navbar/> 

{/* <TestingNavbar/> */}

<Radiobutton/>


<Dropdownbox/>
{/* 
<SqlServer/> */}

{/* <Searchbar/> */}
   

<Footer/>

<div className="container"></div>
      </div>
    );
    
    
}

export default App;
