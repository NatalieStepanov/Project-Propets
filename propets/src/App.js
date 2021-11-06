import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MainComponent from './components/pages/main/MainComponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" component={MainComponent} />
      </Switch>
    </div>
  );
}

export default App;


