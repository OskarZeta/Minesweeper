import React, { Component } from 'react';

class Cell extends Component {
  state = {
    isClicked: false,
    isMarked: false
  }
  clickHandler(){
    if (this.props.generateMines) {
      this.props.generateMines(10, this.props.index.i, this.props.index.y);
    }
    if (!this.state.isClicked && !this.props.isClicked && !this.state.isMarked) {
      if (this.props.isBomb) {
        this.props.endGame();
        alert('YOU DIED');
      } else {
        this.setState({
          isClicked: true
        });
        if (this.props.value === 0) {
          this.props.checkNeighbours(this.props.index.i, this.props.index.j);
        }
      }
    }
  }
  markHandler(e){
    if (e) {
      e.preventDefault();
    }
    if (((!this.state.isClicked && !this.props.isClicked) || (this.props.isClicked && this.state.isMarked)) && this.props.start) {
      if (!this.state.isMarked && this.props.flagsLeft === 0) {
        return;
      }
      this.setState({
        isMarked: !this.state.isMarked
      }, () => {
        this.props.changeFlagsNumber(this.state.isMarked ? '-' : '+');
        if (this.props.isBomb && !this.props.isClicked) {
          this.props.checkMines(this.state.isMarked ? '-' : '+');
        }
      });
    }
  }
  render() {
    return (
      <div
        className={((this.props.isClicked && !this.state.isMarked) || this.state.isClicked) ? 'cell cell--clicked' : this.state.isMarked ? 'cell cell--marked' : 'cell'}
        onClick={() => this.clickHandler()}
        onContextMenu={(e) => this.markHandler(e)}
      >
        {(this.props.isClicked || this.state.isClicked) && this.props.value !== 0 ? this.props.value !== 9 ? this.props.value : '*' : ''}
      </div>
    );
  }
};

export default Cell;
