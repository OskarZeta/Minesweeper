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
    return (<div className='options'>
      <div className='options__modal'>
        OPTIONS
        <form onSubmit={(e) => {this.submitHandler(e)}}>
          <label>
            <span>10</span>
            <input
              type='radio' name='mines_number' value='10'
              checked={this.state.value === 10}
              onChange={(e) => this.changeInputHandler(e)}
            />
          </label>
          <label>
            <span>40</span>
            <input
              type='radio' name='mines_number' value='40'
              checked={this.state.value === 40}
              onChange={(e) => this.changeInputHandler(e)}
            />
          </label>
          <label>
            <span>99</span>
            <input
              type='radio' name='mines_number' value='99'
              checked={this.state.value === 99}
              onChange={(e) => this.changeInputHandler(e)}
            />
          </label>
          <button type='submit'>Save</button>
          <button onClick={() => this.props.triggerOptions()}>Cancel</button>
        </form>
      </div>
    </div>);
  }
};

export default Options;
