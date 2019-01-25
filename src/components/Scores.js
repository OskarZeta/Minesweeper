import React, { Component } from 'react';

const Scores = ({info}) => {
  return (
    <div className='scores'>
      SCORES
      <ul>
        <li>
          <span>Easy (10 bombs)</span>
          <span>{info.easy ? info.easy + 'sec' : 'not available'}</span>
        </li>
        <li>
          <span>Medium (40 bombs)</span>
          <span>{info.medium ? info.medium + 'sec' : 'not available'}</span>
        </li>
        <li>
          <span>Hard (99 bombs)</span>
          <span>{info.hard ? info.hard + 'sec' : 'not available'}</span>
        </li>
      </ul>
    </div>
  );
};

export default Scores;
