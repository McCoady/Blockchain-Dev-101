import Connect from './Connect';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Leaderboard from './Leaderboard';

import './custom.scss';
import Roadmap from './Roadmap';


function App() {
  return (
    <Router>
      <div className="Overall">
        <Connect />
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/roadmap">
                <Roadmap />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
