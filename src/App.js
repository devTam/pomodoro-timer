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
          <Route exact path="/pomodoro">
              <Pomodoro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
