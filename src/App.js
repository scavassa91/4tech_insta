import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './containers/Login/Login';
import TimeLine from './containers/TimeLine/TimeLine';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/timeline" component={TimeLine} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
