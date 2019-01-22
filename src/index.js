import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';
import Menu from './components/Menu.js';
import Game from './components/Game.js';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <main>
      <Route exact path='/' component={ Menu }/>
      <Route path='/game' component={ Game }/>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);

// serviceWorker.unregister();
