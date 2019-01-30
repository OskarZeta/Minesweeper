import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Options from './Options.js';

class Menu extends Component {
  state = {
    options : false
  }
  triggerOptions(e) {
    this.setState({
      options: !this.state.options
    });
  }
  render() {
    return <div className="menu">
      <h1 className="menu__header">minesweeper</h1>
      <ul>
        <li>
          <Link className="menu__btn" to='/game'>New game</Link>
        </li>
        <li>
          <button  className="menu__btn" onClick={() => {this.triggerOptions()}}>
            Options
          </button>
          {this.state.options && <Options triggerOptions={() => {this.triggerOptions()}}/>}
        </li>
        <li>
          <Link className="menu__btn" to='/scores'>High scores</Link>
        </li>
      </ul>
    </div>
  }
};

export default Menu;
