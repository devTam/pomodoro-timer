import React from 'react'
import "./clock.css";

const Clock = ({ clockCounter, title }) => {

    const formatClock = (clock) => {
        let minutes = Math.floor(clock / 60);
        let seconds = Math.floor(clock % 60);
        minutes < 10 ? minutes = ("0" + minutes) : minutes = minutes;
        seconds < 10 ? seconds = ("0" + seconds) : seconds = seconds;
        return `${minutes} : ${seconds}`;
    }

    return (
        <div className="clock-body">
            <div className="clock">
                {formatClock(clockCounter)}
            </div>

            <p className="clock-title">{title}</p>
        </div>
    )
}

export default Clock;
