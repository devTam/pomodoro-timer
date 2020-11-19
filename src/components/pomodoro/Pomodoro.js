import React, { useRef } from 'react';
import "./pomodoro.css";

const Pomodoro = () => {

    const settingRef = useRef();

    const showSettings = () => {
        settingRef.current.classList.add('show');
    }

    return (
        <div className="pomodoro">
            <h1>Pomodoro</h1>

            <div className="pomodoro__timer">

            </div>

            <div className="pomodoro__buttons">
                <button className="btn" onClick={showSettings} >
                    <i className="fas fa-cog"></i>
                </button>
                <button className="btn">
                    <i className="fas fa-play"></i>
                    {/* <i className="fas fa-pause"></i> */}
                </button>
                <button className="btn">
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>

            <div className="pomodoro__settings" ref={settingRef}>
                <div className="session">
                    <h4>Session length</h4>
                    <div className="session-btns">

                        <button className="btn btn-sec">
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <span>25</span>
                        <button className="btn btn-sec">
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>

                <div className="break">
                    <h4>Break length</h4>
                    <div className="break-btns">

                        <button className="btn btn-sec">
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <span>5</span>
                        <button className="btn btn-sec">
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <button className="btn btn-sec close-btn" onClick={() => settingRef.current.classList.remove('show')}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default Pomodoro;
