import React from 'react';
import {Switch, Route, useLocation } from 'react-router-dom'
import './App.css';
import Homepage from './components/homepage/Homepage';
import Pomodoro from './components/pomodoro/Pomodoro';
import { AnimatePresence, motion } from 'framer-motion';


function App() {

  let location = useLocation()
  return (
    <motion.div className="App"
      initial={{opacity: 0, scale: .5}}
      animate={{opacity: 1, scale:1, transition:{type:'spring', duration:1}}}
    >
     
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
      
      
    </motion.div>
  );
}

export default App;
