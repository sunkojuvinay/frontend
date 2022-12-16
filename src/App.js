import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from'react-router-dom';
import { Redirect } from 'react-router';

import './index.css'
import * as ReactBootStrap from "react-bootstrap";
import Radiobutton from './components/Radiobutton';
import Navbar from './components/Navbar';
// import Table from './components/Table';
// import TestingNavbar from './components/TestingNavbar';
import Footer from './components/Footer';

import Header from './components/Header';
import Dropdownbox from './components/Dropdownbox';
import Sql2022 from './Sql2022';
import Sql2019 from './Sql2019';
import Sql2016 from './Sql2016';
import Sql2017 from './Sql2017';
import Sql2014 from './Sql2014';
import Sql2012 from './Sql2012';
import Sql2009 from './Sql2009';
import Sql2008 from './Sql2008';
import Sql2005 from './Sql2005';
import Sql2001 from './Sql2001';
import SU from './SU';
import CU from './CU';
import FIXErrors from './FIXErrors';
import AzureConnect from './AzureConnect';
import CriticalUpdate from './CriticalUpdate';
import GDR from './GDR';
import Hotflix from './Hotflix';
import MS from './MS';
import RS from './RS';
import RTM from './RTM';
import Servicing from './Servicing';
import TLS from './TLS';


// // import Selectbox from './Testing';



function App() {
  return (
<Router>

<Header/>

      <Routes>
        <Route exact path="/" element={<Radiobutton/>} />
        <Route exact path="/Dropdownbox" element={<Dropdownbox/>} />
        <Route exact path="/Sql2022" element={<Sql2022/>} />
        <Route  exact path="/Sql2019" element={<Sql2019/>} />
        <Route  exact path="/Sql2017" element={<Sql2017/>} />
        <Route  exact path="/Sql2016" element={<Sql2016/>} />
        <Route  exact path="/Sql2014" element={<Sql2014/>} />
        <Route  exact path="/Sql2012" element={<Sql2012/>} />
        <Route  exact path="/Sql2009" element={<Sql2009/>} />
        <Route  exact path="/Sql2008" element={<Sql2008/>} />
        <Route  exact path="/Sql2005" element={<Sql2005/>} />
        <Route  exact path="/Sql2001" element={<Sql2001/>} />      
        <Route  exact path="/SU" element={<SU/>} />    
        <Route  exact path="/CU" element={<CU/>} />  
        <Route  exact path="/FIXErrors" element={<FIXErrors/>} />
        <Route  exact path="/AzureConnect" element={<AzureConnect/>} />  
        <Route  exact path="/CriticalUpdate" element={<CriticalUpdate/>} />  
        <Route  exact path="/GDR" element={<GDR/>} /> 
        <Route  exact path="/Hotflix" element={<Hotflix/>} />  
        <Route  exact path="/MS" element={<MS/>} />  
        <Route  exact path="/RS" element={<RS/>} />  
        <Route  exact path="/RTM" element={<RTM/>} />  
        <Route  exact path="/Servicing" element={<Servicing/>} />  
        <Route  exact path="/TLS" element={<TLS/>} />  
      
      </Routes>
<Dropdownbox/>

<Footer/> 

{/* <Navbar/>

<Radiobutton/>

<Dropdownbox/>

<Table/> */}

{/* <Footer/> */}

{/* <Routes>
<Route path="/" element ={<Radiobutton/>} >
  <Route path="/Home" element ={<Home/>} />
</Route>
</Routes> */}

    {/* <Dropdownbox/>  */}

</Router>
 
      
    );
    
    
}

export default App;



























































// import React from 'react';
// import './App.css';
// // import { BrowserRouter as Router, Switch, Route } from'react-router-dom';
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Redirect,
// // } from "react-router-dom";
// import './index.css'
// import * as ReactBootStrap from "react-bootstrap";
// import Radiobutton from './components/Radiobutton';
// import Navbar from './components/Navbar';
// // import Table from './components/Table';
// // import TestingNavbar from './components/TestingNavbar';
// import Footer from './components/Footer';
// //import Datagrid from './Datagrid';
// import Sql2022 from './versionpages/Sql2022';
// import Sql2001 from './versionpages/Sql2001';
// //import KnowledgeBase from './KnowledgeBase';
// import Dropdownbox from './components/Dropdownbox';

// function App() {
//   return (
//         <div className="App">


// <Navbar/> 

// {/* <TestingNavbar/> */}

// <Radiobutton/>


// <Dropdownbox/> 
 
//  <Sql2022/>

// <Sql2001/>


   

// <Footer/> 

// <div className="container"></div>
//       </div>
//     );
    
    
// }

// export default App;
