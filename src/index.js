import React from 'react';
import { render } from 'react-dom'
import Main from './views/layouts/Main';
import Home from './views/Home';
import Donation from './views/Donation';
import About from './views/About';
import { Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route component={Main}>
        <Route path="/" component={Home}/>
        <Route path="/donation" component={Donation}/>
        <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))
