import React from 'react';
import './clock.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Clock = ({clockCount, sessionLength, breakLength, title}) => {

  // Format clock function
  const formatClock = (clock) => {
    let minutes = Math.floor(clock / 60);
    let seconds = Math.floor(clock % 60);
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  };

  // Chnage seconds to percentage
  const toPercentage = (initial, final) => {
    return Math.floor((initial/final) * 100)
  }

//  Calculate the reduction value of progressbar
  const calculateValue = (clockCount, sessionLength, breakLength, title) => {

    // If in session then calculate reduction value using session length else use break length
    if(title === 'Get to work!') {
      return toPercentage(clockCount, sessionLength*60)
    }else {
      return toPercentage(clockCount, breakLength*60)
    }
  }

  let value = calculateValue(clockCount, sessionLength, breakLength, title);

  return (
    <div className="clock-body">
      <div className="clock">
        <CircularProgressbar
          value={value}
          text={formatClock(clockCount)}
          maxValue={100}
          styles={buildStyles({
            trailColor: '#FEDEDE',
            pathColor: '#FA6D6D',
            textColor: 'rgb(68, 60, 60)',
          })}
        />
      </div>

      <p className="clock-title">{title}</p>
    </div>
  );
};

export default Clock;
