import React,{useEffect} from 'react';
import {Login} from './signup';
import {Router } from "@reach/router";
import {Home} from './home';
import 'antd/dist/antd.css';
import { useNavigate } from "@reach/router";





const Routing = ()=>{
 
  
  return <>
  <Router>
         <Login path='/'></Login>
         <Home path='/home'></Home>
    </Router>
  </>
}

function App() {
  


  return (
    
    <Routing/>
   
  );
}

export default App;
