import React, { Component } from 'react';
import Menu from './Menu.js';
import Game from './Game.js';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    const n = 10;
    let mines = [];
    for (let i = 0; i < 9; i++) {
      mines.push([]);
      for (let j = 0; j < 9; j++) {
        mines[i].push(0);
      }
    }
    for (let i = 0; i < n; i++) {
      let x = (Math.floor(Math.random() * 9));
      let y = (Math.floor(Math.random() * 9));
      if (mines[x][y] === 0) {
        mines[x][y] = 9;
      } else {
        x = (Math.floor(Math.random() * 9));
        y = (Math.floor(Math.random() * 9));
      }
    }
    // let mines = [
    //   [0, 0, 0, 9, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 9, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 9, 0, 0, 9, 0],
    //   [0, 0, 0, 0, 0, 0, 9, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 9, 0, 9, 0, 0, 0, 0],
    //   [0, 0, 9, 0, 0, 9, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 9]
    // ];
    // let mines = [
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 9, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [9, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [9, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [9, 0, 9, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 9, 0, 0, 0, 9, 0],
    //   [0, 0, 0, 0, 0, 0, 9, 0, 0],
    //   [9, 0, 0, 9, 0, 0, 0, 0, 0]
    // ];
    // [
    //   [0, 0, 1, 9, 1, 1, 1, 1, 0],
    //   [0, 0, 1, 1, 1, 1, 9, 1, 0],
    //   [0, 0, 0, 1, 1, 2, 2, 2, 1],
    //   [0, 0, 0, 1, 9, 2, 2, 9, 1],
    //   [0, 0, 0, 1, 1, 2, 9, 2, 1],
    //   [0, 1, 1, 2, 1, 2, 1, 1, 0],
    //   [0, 2, 9, 3, 9, 2, 1, 0, 0],
    //   [0, 2, 9, 3, 2, 9, 1, 1, 1],
    //   [0, 1, 1, 1, 1, 1, 1, 1, 9]
    // ];
    //console.log(mines);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (mines[i][j] === 9) {
          if (i-1 in mines) {
            mines[i - 1][j] = mines[i - 1][j] === 9 ? mines[i - 1][j] : mines[i - 1][j]+1;
          }
          if (i+1 in mines) {
            mines[i + 1][j] = mines[i + 1][j] === 9 ? mines[i + 1][j] : mines[i + 1][j]+1;
          }
          if (j-1 in mines[i]) {
            mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
            if (i-1 in mines) {
              mines[i - 1][j - 1] = mines[i - 1][j - 1] === 9 ? mines[i - 1][j - 1] : mines[i - 1][j - 1]+1;
            }
            if (i+1 in mines) {
              mines[i + 1][j - 1] = mines[i + 1][j - 1] === 9 ? mines[i + 1][j - 1] : mines[i + 1][j - 1]+1;
            }
          }
          if (j+1 in mines[i]) {
            mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
            if (i-1 in mines) {
              mines[i - 1][j + 1] = mines[i - 1][j + 1] === 9 ? mines[i - 1][j + 1] : mines[i - 1][j + 1]+1;
            }
            if (i+1 in mines) {
              mines[i + 1][j + 1] = mines[i + 1][j + 1] === 9 ? mines[i + 1][j + 1] : mines[i + 1][j + 1]+1;
            }
          }

          // if (i === 0) {
          //   mines[i + 1][j] = mines[i + 1][j] === 9 ? mines[i + 1][j] : mines[i + 1][j]+1;
          //   if (j === 0) {
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i + 1][j + 1] = mines[i + 1][j + 1] === 9 ? mines[i + 1][j + 1] : mines[i + 1][j + 1]+1;
          //   } else if (j === 8) {
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i + 1][j - 1] = mines[i + 1][j - 1] === 9 ? mines[i + 1][j - 1] : mines[i + 1][j - 1]+1;
          //   } else {
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i + 1][j - 1] = mines[i + 1][j - 1] === 9 ? mines[i + 1][j - 1] : mines[i + 1][j - 1]+1;
          //     mines[i + 1][j + 1] = mines[i + 1][j + 1] === 9 ? mines[i + 1][j + 1] : mines[i + 1][j + 1]+1;
          //   }
          // } else if (i === 8) {
          //   mines[i - 1][j] = mines[i - 1][j] === 9 ? mines[i - 1][j] : mines[i - 1][j]+1;
          //   if (j === 0) {
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i - 1][j + 1] = mines[i - 1][j + 1] === 9 ? mines[i - 1][j + 1] : mines[i - 1][j + 1]+1;
          //   } else if (j === 8) {
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i - 1][j - 1] = mines[i - 1][j - 1] === 9 ? mines[i - 1][j - 1] : mines[i - 1][j - 1]+1;
          //   } else {
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i - 1][j - 1] = mines[i - 1][j - 1] === 9 ? mines[i - 1][j - 1] : mines[i - 1][j - 1]+1;
          //     mines[i - 1][j + 1] = mines[i - 1][j + 1] === 9 ? mines[i - 1][j + 1] : mines[i - 1][j + 1]+1;
          //   }
          // } else {
          //   if (j === 0) {
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i + 1][j] = mines[i + 1][j] === 9 ? mines[i + 1][j] : mines[i + 1][j]+1;
          //     mines[i + 1][j + 1] = mines[i + 1][j + 1] === 9 ? mines[i + 1][j + 1] : mines[i + 1][j + 1]+1;
          //     mines[i - 1][j] = mines[i - 1][j] === 9 ? mines[i - 1][j] : mines[i - 1][j]+1;
          //     mines[i - 1][j + 1] = mines[i - 1][j + 1] === 9 ? mines[i - 1][j + 1] : mines[i - 1][j + 1]+1;
          //   } else if (j === 8) {
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i + 1][j] = mines[i + 1][j] === 9 ? mines[i + 1][j] : mines[i + 1][j]+1;
          //     mines[i + 1][j - 1] = mines[i + 1][j - 1] === 9 ? mines[i + 1][j - 1] : mines[i + 1][j - 1]+1;
          //     mines[i - 1][j] = mines[i - 1][j] === 9 ? mines[i - 1][j] : mines[i - 1][j]+1;
          //     mines[i - 1][j - 1] = mines[i - 1][j - 1] === 9 ? mines[i - 1][j - 1] : mines[i - 1][j - 1]+1;
          //   } else {
          //     mines[i][j + 1] = mines[i][j + 1] === 9 ? mines[i][j + 1] : mines[i][j + 1]+1;
          //     mines[i][j - 1] = mines[i][j - 1] === 9 ? mines[i][j - 1] : mines[i][j - 1]+1;
          //     mines[i + 1][j] = mines[i + 1][j] === 9 ? mines[i + 1][j] : mines[i + 1][j]+1;
          //     mines[i + 1][j + 1] = mines[i + 1][j + 1] === 9 ? mines[i + 1][j + 1] : mines[i + 1][j + 1]+1;
          //     mines[i + 1][j - 1] = mines[i + 1][j - 1] === 9 ? mines[i + 1][j - 1] : mines[i + 1][j - 1]+1;
          //     mines[i - 1][j] = mines[i - 1][j] === 9 ? mines[i - 1][j] : mines[i - 1][j]+1;
          //     mines[i - 1][j + 1] = mines[i - 1][j + 1] === 9 ? mines[i - 1][j + 1] : mines[i - 1][j + 1]+1;
          //     mines[i - 1][j - 1] = mines[i - 1][j - 1] === 9 ? mines[i - 1][j - 1] : mines[i - 1][j - 1]+1;
          //   }
          // }
        }
      }
    }

    console.log(mines);
    return (
      <div className="App">
        <Menu/>
      </div>
    );
  }
}

export default App;
