import React, { Component } from 'react';
import timer from "../img/timer.png";

class Timer extends Component {
  state = {
    t: 0
  }
  timer(par){
    if (par === 'on'){
      this.interval = setInterval(() => {
        this.setState({
          t: this.state.t + 1
        });
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.props.setTime(this.state.t);
    }
  }
  componentDidUpdate(prevProps){
    if (prevProps.start !== this.props.start || prevProps.final !== this.props.final){
      if (!this.props.final) {
        this.setState({
          t: 0
        });
      }
      this.props.start ? this.timer('on') : this.timer('off');
    }
  }
  componentWillUnmount(){
    this.timer('off');
  }
  render(){
    return (
      <div className="game__timer">
        <img className="game__timer-icon" src={timer} alt="timer"/>
        <div className="game__timer-value">{this.state.t}</div>
      </div>
    );
  }
};

export default Timer;
