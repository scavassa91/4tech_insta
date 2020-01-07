import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from './containers/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
