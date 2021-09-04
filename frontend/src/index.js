import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Module1} from './module1/Module1'
import {Module2} from './module2/Module2'
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Error} from './error_page/Error'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <Module1 /> 
      </Route>
      <Route path="/module2">
        <Module2 />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
reportWebVitals();  