import React from 'react';
import './App.css';
import Weather from "./Weather"
import Planes from "./Planes"
import {Link, Router, Route, BrowserRouter, Switch } from "react-router-dom"
import Map from "./Map"

const App = () => { 
  return (
    <main className="App">
    
    <Switch>
     <Route  path="/" exact component={ Weather } />
    <Route  path="/Planes" component={ Planes } />
   </Switch> 
    </main>
  );
}

export default App;
