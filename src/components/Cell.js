import React, { Component } from 'react';

class Cell extends Component {
  state = {
    isClicked: false,
    isMarked: false
  }
  clickHandler(){
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
    e.preventDefault();
    if (!this.state.isClicked) {
      this.setState({
        isMarked: !this.state.isMarked
      }, () => {
        if (this.props.isBomb) {
          if (this.state.isMarked) {
            this.props.checkMines('-');
          } else {
            this.props.checkMines('+');
          }
        }
      });
    }
  }
  render() {
    return (
      <div
        className={(this.props.isClicked || this.state.isClicked) ? 'cell cell--clicked' : this.state.isMarked ? 'cell cell--marked' : 'cell'}
        onClick={() => this.clickHandler()}
        onContextMenu={(e) => this.markHandler(e)}
      >
        {(this.props.isClicked || this.state.isClicked) && this.props.value !== 0 ? this.props.value !== 9 ? this.props.value : '*' : ''}
      </div>
    );
  }
};

export default Cell;
