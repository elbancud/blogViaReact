import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard  from './Dashboard';
import Home from './Home';
import './style.css';

function App() {
  return (
   

      <BrowserRouter>
        <Switch>   
          
          <Route path="/" exact component={Home} />
          
          <Route path="/dashboard" exact component={Dashboard} />

        </Switch>
      </BrowserRouter>
   
  );
}

export default App;
