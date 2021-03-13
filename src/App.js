import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./component/pages/Home";
import Service from "./component/pages/Service";
import Product from "./component/pages/Product";
import Signup from "./component/pages/Signup";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/Home" exact component={Home}/>  
          <Route path="/services" exact component={Service}/>
          <Route path="/products" exact component={Product}/>  
          <Route path="/sign-up" exact component={Signup}/>    
        </Switch>
    </Router>
    </>
  );
}

export default App;
