import React, { useState } from 'react';
import Clock from '../clock/Clock';
import "./pomodoro.css";

const Pomodoro = () => {

    const [showSettings, setShowSettings] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    let [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [clockCounter, setClockCounter] = useState(25*60);
    const [title, setTitle] = useState('Get to work!');
    // Take a break


    const handleChange = (num, type) => {
        let sessionCount;
        let breakCount;
        if(type == "session" )  {
            sessionCount = sessionLength + num;
        }else {
            breakCount = breakLength + num;
        }  
        
        if(sessionCount > 0 && sessionCount < 61 && !isPlaying) {
            setSessionLength(sessionCount);
            setClockCounter(sessionCount * 60);
        }
        
        if(breakCount > 0 && breakCount < 61 && !isPlaying) {
            setBreakLength(breakCount);
        }
    }

    const resetTimer = () => {
        setSessionLength(25);
        setClockCounter(25*60)
        setBreakLength(5)
        setIsPlaying(false)
        setTitle('Get to work!')
    }

    return (
        <div className="pomodoro">
            <h1>Pomodoro</h1>

            <div className="pomodoro__timer">
                <Clock clockCounter={clockCounter} title={title} />
            </div>

            <div className="pomodoro__buttons">
                <button className="btn" onClick={() => setShowSettings(true)} >
                    <i className="fas fa-cog"></i>
                </button>
                <button className="btn">
                    <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
                </button>
                <button className="btn" onClick={resetTimer}>
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>

            <div className={`pomodoro__settings ${showSettings ? "show" : ""}`}>
                <div className="session">
                    <h4>Session length</h4>
                    <div className="session-btns">

                        <button className="btn btn-sec" onClick={() => handleChange(-1, "session")} >
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <span>{sessionLength}</span>
                        <button className="btn btn-sec" onClick={() => handleChange(1, "session")}>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>

                <div className="break">
                    <h4>Break length</h4>
                    <div className="break-btns">

                        <button className="btn btn-sec" onClick={() => handleChange(-1, "break")}>
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <span>{breakLength}</span>
                        <button className="btn btn-sec" onClick={() => handleChange(1, "break")}>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <button className="btn btn-sec close-btn" onClick={() => setShowSettings(false)}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default Pomodoro;
