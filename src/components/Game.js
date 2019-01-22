import React, { Component } from 'react';
import Cell from './Cell.js';

let array = [];

class Game extends Component {
  state = {
    cells: [],
    empties : [],
    final: false
  }
  endGame(){
    this.setState({
      final: true
    });
  }
  checkNeighbours (i, j) {
    let arr = this.state.cells;
    if (i-1 in arr) {
      if (!array.find(el => el.i === i-1 && el.j === j)){
        array.push({i: i-1, j});
        if (arr[i-1][j] === 0) {
          this.checkNeighbours(i-1, j);
        }
      }
    }
    if (i+1 in arr) {
      if (!array.find(el => el.i === i+1 && el.j === j)){
        array.push({i: i+1, j});
        if (arr[i+1][j] === 0) {
          this.checkNeighbours(i+1, j);
        }
      }
    }
    if (j-1 in arr[i]) {
      if (!array.find(el => el.i === i && el.j === j-1)){
        array.push({i, j: j-1});
        if (arr[i][j-1] === 0) {
          this.checkNeighbours(i, j-1);
        }
      }
      if (i-1 in arr) {
        if (!array.find(el => el.i === i-1 && el.j === j-1)){
          array.push({i: i-1, j: j-1});
          if (arr[i-1][j-1] === 0){
            this.checkNeighbours(i-1, j-1);
          }
        }
      }
      if (i+1 in arr) {
        if (!array.find(el => el.i === i+1 && el.j === j-1)){
          array.push({i: i+1, j: j-1});
          if (arr[i+1][j-1] === 0){
            this.checkNeighbours(i+1, j-1);
          }
        }
      }
    }
    if (j+1 in arr[i]) {
      if (!array.find(el => el.i === i && el.j === j+1)){
        array.push({i, j: j+1});
        if (arr[i][j+1] === 0) {
          this.checkNeighbours(i, j+1);
        }
      }
      if (i-1 in arr) {
        if (!array.find(el => el.i === i-1 && el.j === j+1)){
          array.push({i: i-1, j: j+1});
          if (arr[i-1][j+1] === 0) {
            this.checkNeighbours(i-1, j+1);
          }
        }
      }
      if (i+1 in arr) {
        if (!array.find(el => el.i === i+1 && el.j === j+1)){
          array.push({i: i+1, j: j+1});
          if (arr[i+1][j+1] === 0) {
            this.checkNeighbours(i+1, j+1);
          }
        }
      }
    }
    this.setState({
      empties: array
    });
  }
  generateMines(n){
    let width = 9;
    let height = 9;
    if (n === 40) {
      width = 16;
      height = 16;
    }
    if (n === 99) {
      width = 30;
      height = 16;
    }
    let cells = [];
    for (let i = 0; i < height; i++) {
      cells.push([]);
      for (let j = 0; j < width; j++) {
        cells[i].push(0);
      }
    }
    for (let i = 0; i < n; i++) {
      let x = (Math.floor(Math.random() * height));
      let y = (Math.floor(Math.random() * width));
      if (cells[x][y] === 0) {
        cells[x][y] = 9;
      } else {
        --i;
      }
    }
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (cells[i][j] === 9) {
          if (i-1 in cells) {
            cells[i - 1][j] = cells[i - 1][j] === 9 ? cells[i - 1][j] : cells[i - 1][j]+1;
          }
          if (i+1 in cells) {
            cells[i + 1][j] = cells[i + 1][j] === 9 ? cells[i + 1][j] : cells[i + 1][j]+1;
          }
          if (j-1 in cells[i]) {
            cells[i][j - 1] = cells[i][j - 1] === 9 ? cells[i][j - 1] : cells[i][j - 1]+1;
            if (i-1 in cells) {
              cells[i - 1][j - 1] = cells[i - 1][j - 1] === 9 ? cells[i - 1][j - 1] : cells[i - 1][j - 1]+1;
            }
            if (i+1 in cells) {
              cells[i + 1][j - 1] = cells[i + 1][j - 1] === 9 ? cells[i + 1][j - 1] : cells[i + 1][j - 1]+1;
            }
          }
          if (j+1 in cells[i]) {
            cells[i][j + 1] = cells[i][j + 1] === 9 ? cells[i][j + 1] : cells[i][j + 1]+1;
            if (i-1 in cells) {
              cells[i - 1][j + 1] = cells[i - 1][j + 1] === 9 ? cells[i - 1][j + 1] : cells[i - 1][j + 1]+1;
            }
            if (i+1 in cells) {
              cells[i + 1][j + 1] = cells[i + 1][j + 1] === 9 ? cells[i + 1][j + 1] : cells[i + 1][j + 1]+1;
            }
          }
        }
      }
    }
    this.setState({
      cells,
      mines: n,
      minesLeft: n
    });
  }
  componentDidMount(){
    this.generateMines(10);
  }
  checkMines(par){
    this.setState({
      minesLeft: eval(`${this.state.minesLeft} ${par} ${1}`)
    }, () => {
      if (this.state.minesLeft === 0) {
        this.endGame();
        alert('YOU WON!');
      }
    });
  }

  render() {
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
    //console.log(mines);
    return <div className='game'>
      GAME
      <div>
        {this.state.cells.map((row, i) =>
          <div className='game__row' key={i}>
            {row.map((cell, j) =>
              <Cell
                key = {j}
                index = {{i,j}}
                value = {cell}
                isBomb = {cell === 9}
                isClicked = {!this.state.final ? !!this.state.empties.find(el => el.i === i && el.j === j) : true}
                checkNeighbours = {(i, j) => this.checkNeighbours(i, j)}
                endGame = {(option) => this.endGame(option)}
                checkMines = {(par) => this.checkMines(par)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  }
};

export default Game;
