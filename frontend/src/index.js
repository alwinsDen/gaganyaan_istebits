import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import {Module1} from './module1/Module1'
import {Module2} from './module2/Module2'
import {FullModule1} from "./fullModule1/FullModule1"
import {FullModule2} from "./fullModule1/FullModule2"
import {FullModule3} from "./fullModule1/FullModule3"
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Error} from './error_page/Error'
import {configureStore} from "@reduxjs/toolkit"
import audioControl from "./features/audioControl"
import windControl from "./features/windowCloseControl"
import perState from "./features/percentageState"
import {Provider} from "react-redux"

const store = configureStore({
  reducer:{
    audioControl: audioControl,
    windCtrl: windControl,
    perState:perState,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <App/>
        </Route>
        <Route path="/fullmodule1">
          <FullModule1 /> 
        </Route>
        <Route path="/fullmodule3">
          <FullModule2 /> 
        </Route>
        <Route path="/fullmodule5">
          <FullModule3 /> 
        </Route>
        <Route path="/fullmodule2">
          <Module2 />
        </Route>
        <Route path="/fullmodule3">
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