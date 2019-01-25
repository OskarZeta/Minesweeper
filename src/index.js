import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';
import Menu from './components/Menu.js';
import Game from './components/Game.js';
import Scores from './components/Scores.js';

ReactDOM.render(
  <BrowserRouter>
    <main>
      <Route exact path='/' component={ Menu }/>
      <Route path='/game' render={
        (props) =>
          <Game
            {...props}
            minesTotal={Number.parseInt(localStorage.getItem('mines_number')) || 10}
          />
      }/>
      <Route path='/scores' render={
        (props) =>
          <Scores
            {...props}
            info={JSON.parse(localStorage.getItem('minesweeper'))}
          />
      }/>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);

// serviceWorker.unregister();
