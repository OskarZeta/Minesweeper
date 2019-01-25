import React, { Component } from 'react';
import Cell from './Cell.js';
import Timer from './Timer.js';

const defaultState = {
  cells: [],
  empties : [],
  start: false,
  final: false,
  minesLeft: undefined,
  flagsLeft: undefined,
  time: 0
};

class Game extends Component {
  state = Object.assign(defaultState)
  endGame(){
    this.setState({
      final: true,
      start: false
    }, () => {
      if (this.state.minesLeft === 0) {
        alert('YOU WON!');
      } else {
        alert('YOU DIED');
      }
    });
  }
  restart(){
    this.setState(defaultState);
  }
  checkNeighbours (i, j) {
    let cells = this.state.cells;
    let empties = this.state.empties;
    if (i-1 in cells) {
      if (!empties.find(el => el.i === i-1 && el.j === j)){
        empties.push({i: i-1, j});
        if (cells[i-1][j] === 0) {
          this.checkNeighbours(i-1, j);
        }
      }
    }
    if (i+1 in cells) {
      if (!empties.find(el => el.i === i+1 && el.j === j)){
        empties.push({i: i+1, j});
        if (cells[i+1][j] === 0) {
          this.checkNeighbours(i+1, j);
        }
      }
    }
    if (j-1 in cells[i]) {
      if (!empties.find(el => el.i === i && el.j === j-1)){
        empties.push({i, j: j-1});
        if (cells[i][j-1] === 0) {
          this.checkNeighbours(i, j-1);
        }
      }
      if (i-1 in cells) {
        if (!empties.find(el => el.i === i-1 && el.j === j-1)){
          empties.push({i: i-1, j: j-1});
          if (cells[i-1][j-1] === 0){
            this.checkNeighbours(i-1, j-1);
          }
        }
      }
      if (i+1 in cells) {
        if (!empties.find(el => el.i === i+1 && el.j === j-1)){
          empties.push({i: i+1, j: j-1});
          if (cells[i+1][j-1] === 0){
            this.checkNeighbours(i+1, j-1);
          }
        }
      }
    }
    if (j+1 in cells[i]) {
      if (!empties.find(el => el.i === i && el.j === j+1)){
        empties.push({i, j: j+1});
        if (cells[i][j+1] === 0) {
          this.checkNeighbours(i, j+1);
        }
      }
      if (i-1 in cells) {
        if (!empties.find(el => el.i === i-1 && el.j === j+1)){
          empties.push({i: i-1, j: j+1});
          if (cells[i-1][j+1] === 0) {
            this.checkNeighbours(i-1, j+1);
          }
        }
      }
      if (i+1 in cells) {
        if (!empties.find(el => el.i === i+1 && el.j === j+1)){
          empties.push({i: i+1, j: j+1});
          if (cells[i+1][j+1] === 0) {
            this.checkNeighbours(i+1, j+1);
          }
        }
      }
    }
    this.setState({
      empties
    });
  }
  renderField(){
    let n = this.props.minesTotal;
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
    this.setState({
      cells,
      flagsLeft: n,
      empties: [],
      time: 0
    });
  }
  generateMines(coordX, coordY){
    let width = this.state.cells[0].length;
    let height = this.state.cells.length;
    let cells = this.state.cells;
    let n = this.props.minesTotal;
    for (let i = 0; i < n; i++) {
      let x = (Math.floor(Math.random() * height));
      let y = (Math.floor(Math.random() * width));
      if (cells[x][y] === 0 &&
          (x !== coordX && x !== coordX + 1 && x !== coordX - 1) &&
          (y !== coordY && y !== coordY + 1 && y !== coordY - 1)
        ) {
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
      minesLeft: n,
      start: true
    });
  }
  setTime(t){
    this.setState({
      time: t
    })
  }
  changeFlagsNumber(par){
    if (par) {
      this.setState({
        flagsLeft: eval(`${this.state.flagsLeft} ${par} ${1}`)
      });
    }
  }
  checkMines(par){
    if (par) {
      this.setState({
        minesLeft: eval(`${this.state.minesLeft} ${par} ${1}`)
      }, () => {
        if (this.state.minesLeft === 0) {
          this.endGame();
        }
      });
    }
  }
  updateScores(){
    let difficulty;
    switch (this.props.minesTotal) {
      case 10:
        difficulty = 'easy';
        break;
      case 40:
        difficulty = 'medium';
        break;
      case 99:
        difficulty = 'hard';
        break;
    }
    let previousScore = 0;
    let scores = JSON.parse(localStorage.getItem('minesweeper'));
    if (scores !== null){
      if (scores[difficulty]) {
        previousScore = scores[difficulty];
      }
    }
    let obj = Object.assign(scores || {}, {
      [difficulty]: this.state.time < previousScore || previousScore === 0 ? this.state.time : previousScore
    });
    localStorage.setItem('minesweeper', JSON.stringify(obj));
  }
  componentDidMount(){
    this.renderField();
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.cells !== this.state.cells && this.state.cells.length === 0){
      this.renderField();
    }
    if (prevState.time !== this.state.time && this.state.minesLeft === 0) {
      this.updateScores();
    }
  }
  render() {
    return <div className='game'>
      GAME
      <Timer start={this.state.start} final={this.state.final} setTime={(t) => this.setTime(t)}/>
      <button onClick={() => this.restart()}>Restart</button>
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
                generateMines = {(!this.state.start && !this.state.final) ? (x, y) => {this.generateMines(x, y)} : undefined}
                start = {this.state.start}
                checkNeighbours = {(i, j) => this.checkNeighbours(i, j)}
                endGame = {(option) => this.endGame(option)}
                checkMines = {(par) => this.checkMines(par)}
                changeFlagsNumber = {(par) => this.changeFlagsNumber(par)}
                flagsLeft = {this.state.flagsLeft}
              />
            )}
          </div>
        )}
      </div>
    </div>
  }
};

export default Game;
