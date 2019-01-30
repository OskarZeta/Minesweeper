import React, { Component } from 'react';

class Options extends Component {
  state = {
    value: Number.parseInt(localStorage.getItem('mines_number')) || 10
  }
  changeInputHandler(e){
    if (e.target.type === 'radio') {
      this.setState({
        value: Number.parseInt(e.target.value)
      });
    }
  }
  submitHandler(e){
    e.preventDefault();
    localStorage.setItem('mines_number', this.state.value);
    this.props.triggerOptions();
  }
  render(){
    return (<div className="options">
      <div className="options__modal">
        <h2 className="options__header">OPTIONS</h2>
        <h3 className="options__header-form">Difficulty:</h3>
        <form onSubmit={(e) => {this.submitHandler(e)}}>
          <label>
            <input
              type='radio' name='mines_number' value='10'
              checked={this.state.value === 10}
              onChange={(e) => this.changeInputHandler(e)}
            />
            <span className="options__name">Easy</span>
          </label>
          <div className="options__info">
            10 mines, 9 x 9 cells field
          </div>
          <label>
            <input
              type='radio' name='mines_number' value='40'
              checked={this.state.value === 40}
              onChange={(e) => this.changeInputHandler(e)}
            />
            <span className="options__name">Medium</span>
          </label>
          <div className="options__info">
            40 mines, 16 x 16 cells field
          </div>
          <label>
            <input
              type='radio' name='mines_number' value='99'
              checked={this.state.value === 99}
              onChange={(e) => this.changeInputHandler(e)}
            />
            <span className="options__name">Hard</span>
          </label>
          <div className="options__info">
            99 mines, 16 x 30 cells field
          </div>
          <div className="options__buttons-wrapper">
            <button type='submit'>Save</button>
            <button type='reset' onClick={() => this.props.triggerOptions()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>);
  }
};

export default Options;
