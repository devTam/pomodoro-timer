import React from 'react';
import {Switch, Route, useLocation } from 'react-router-dom'
import './App.css';
import Homepage from './components/homepage/Homepage';
import Pomodoro from './components/pomodoro/Pomodoro';
import { AnimatePresence } from 'framer-motion';


function App() {

  let location = useLocation()
  return (
    <div className="App">
     
     <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </AnimatePresence>
      
      
    </div>
  );
}

export default App;
