import React from 'react';
import './clock.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Clock = (props) => {
  const formatClock = (clock) => {
    let minutes = Math.floor(clock / 60);
    let seconds = Math.floor(clock % 60);
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  };

  const toPercentage = (initial, final) => {
    return Math.floor((initial/final) * 100)
  }

 

  
  const calculateValue = (clockCount, sessionLength, breakLength, title) => {
    
    if(title === 'Get to work!') {
      return toPercentage(clockCount, sessionLength*60)
    }else {
      return toPercentage(clockCount, breakLength*60)
    }
  }



  
  return (
    <div className="clock-body">
      <div className="clock">
        <CircularProgressbar
          value={calculateValue(props.clockCount, props.sessionLength, props.breakLength, props.title)}
          text={formatClock(props.clockCount)}
          maxValue={100}
          styles={buildStyles({
            trailColor: '#FEDEDE',
            pathColor: '#FA6D6D',
            textColor: 'rgb(68, 60, 60)',
          })}
        />
      </div>

      <p className="clock-title">{props.title}</p>
    </div>
  );
};

export default Clock;
