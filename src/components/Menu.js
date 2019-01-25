import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import Options from './Options.js';

class Menu extends Component {
  state = {
    options : false
  }
  triggerOptions() {
    this.setState({
      options: !this.state.options
    });
  }
  render() {
    return <div>
      <ul>
        <li>
          <Link to='/game'>New game</Link>
        </li>
        <li>
          <button onClick={() => {this.triggerOptions()}}>
            Options
          </button>
          {this.state.options && <Options triggerOptions={() => {this.triggerOptions()}}/>}
        </li>
        <li>
          <Link to='/scores'>High scores</Link>
        </li>
      </ul>
    </div>
  }
};

export default Menu;
