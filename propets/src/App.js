import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/pages/content/Login';
import Logout from './components/pages/content/Logout';
import MainComponent from './components/pages/main/MainComponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={MainComponent} />
      </Switch>
    </div>
  );
}

export default App;


