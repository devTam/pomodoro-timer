import React from 'react';
import './homepage.css';

import { ReactComponent as Image } from '../../pomodoro.svg';

const Homepage = (props) => {
  return (
    <>
      <div className="image">
        <Image />
      </div>
      <h1 className="text">
        Pomodoro technique allows you to work for a long time without getting
        tired
      </h1>
      <button
        className="next-btn"
        onClick={() => props.history.push('/pomodoro')}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </>
  );
};

export default Homepage;
