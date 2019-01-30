import React from 'react';
import { Link } from 'react-router-dom';

const Scores = ({info}) => {
  return (
    <div className="scores">
      <h2 className="scores__header">HIGH SCORES</h2>
      <ul>
        <li className="scores__item">
          <span className="scores__difficulty">Easy (10 bombs)</span>
          <span className="scores__value">{info.easy ? info.easy + ' sec' : 'n/a'}</span>
        </li>
        <li className="scores__item">
          <span className="scores__difficulty">Medium (40 bombs)</span>
          <span className="scores__value">{info.medium ? info.medium + ' sec' : 'n/a'}</span>
        </li>
        <li className="scores__item">
          <span className="scores__difficulty">Hard (99 bombs)</span>
          <span className="scores__value">{info.hard ? info.hard + ' sec' : 'n/a'}</span>
        </li>
      </ul>
      <Link className="scores__back-btn" to='/'>Back to menu</Link>
    </div>
  );
};

export default Scores;
