import './App.css';
import Homepage from './components/homepage/Homepage';
import Pomodoro from './components/pomodoro/Pomodoro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pomodoro" component={Pomodoro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
