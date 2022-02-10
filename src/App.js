import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {fetchUser} from './store/actions';

function App() {

  const user = useSelector(state => state);
  console.log(user)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);


  return (
    <Router>
      <div className="app">
        <div className="app__body">
            <Switch>
              {/* Any fixed Component can be placed here to show on every route component */}
              {console.log(user)}
              <Route exact path="/">{user.auth ? <Redirect to="/app"/>: <Redirect to="/login"/>}</Route>
              <Route path="/app">{user.auth ? <Home/>: <Redirect to="/login"/>}</Route>
              <Route path="/login">{user.auth ? <Redirect to="/app"/>: <Login/>}</Route>
            </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;
