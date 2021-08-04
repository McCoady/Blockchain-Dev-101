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
              <Route exact path="/Blockchain-Dev-101/">
                <Home />
              </Route>
              <Route path="/Blockchain-Dev-101/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/Blockchain-Dev-101/roadmap">
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
