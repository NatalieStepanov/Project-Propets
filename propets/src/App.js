import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MainComponent from './components/pages/main/MainComponent';
import Registration from './components/pages/Registration';

import Loader from './components/Loader';
import Posts from './components/pages/content/Posts';

import { useSelector, useDispatch } from 'react-redux';
import { appSelector, authSuccess } from './store/app';
import { useEffect } from 'react';

function App() {

  const {loading, auth} = useSelector(appSelector)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(authSuccess())
  }, [dispatch])

  console.log(auth)
  
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/" component={MainComponent} />
         
      </Switch>
      {loading && <Loader />}
      {auth && <Redirect exact from = '/login' to = '/posts' />} 
    </div>
  );
}

export default App;




