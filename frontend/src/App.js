//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
