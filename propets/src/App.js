import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MainComponent from './components/pages/main/MainComponent';
import Registration from './components/pages/Registration';
import { useSelector, useDispatch } from 'react-redux';
import {appSelector, authSuccess} from './store/app'
import { useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  // const {loading, auth} = useSelector(appSelector)
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(authSuccess())
  // }, [dispatch])
  return (
    <div className="App">
      {/* {auth && <Redirect exact from = '/' to = '/posts' />} */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/" component={MainComponent} />
        {/* {loading && <Loader />} */}
      </Switch>
    </div>
  );
}

export default App;




