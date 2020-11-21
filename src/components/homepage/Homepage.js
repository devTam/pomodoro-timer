import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

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
      <div className="button">

      <Link to='/pomodoro'
        className="next-btn">
        <i className="fas fa-arrow-right"></i>
      </Link>
      </div>
    </>
  );
};

export default Homepage;
