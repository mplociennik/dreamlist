import React from 'react';
import { render } from 'react-dom'
import {Main} from './components/main.layout';
import {Home} from './components/home';
import {Donation} from './components/donation';
import {About} from './components/about';
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
