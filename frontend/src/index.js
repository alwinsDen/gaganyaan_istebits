import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {Module1} from './module1/Module1'
import {Module2} from './module2/Module2'
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Error} from './error_page/Error'
import {configureStore} from "@reduxjs/toolkit"
import audioControl from "./features/audioControl"
import windControl from "./features/windowCloseControl"
import {Provider} from "react-redux"

const store = configureStore({
  reducer:{
    audioControl: audioControl,
    windCtrl: windControl
  }
})

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <App/>
        </Route>
        <Route path="/module1">
          <Module1 /> 
        </Route>
        <Route path="/module2">
          <Module2 />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </HashRouter>
    </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();  