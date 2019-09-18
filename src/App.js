import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/jobs" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
