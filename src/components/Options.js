import React, { Component } from 'react';

const Options = ({ triggerOptions }) => {
  return <div className='options' onClick={(e) => {triggerOptions(e)}}>
    <div className='options__modal'>
      OPTIONS
    </div>
  </div>
};

export default Options;
