import React from 'react';
import Clock from '../clock/Clock';
import "./pomodoro.css";
import { motion } from "framer-motion";

class Pomodoro extends React.Component {


    timer = undefined;
    state = {
        isPlaying: false,
        breakLength: 5,
        sessionLength: 25,
        clockCount: 25 * 60,
        title: 'Get to work!',
        settings: false,
    }

    audioRef = React.createRef()

    handleChange = (num, type) => {
        const { sessionLength, breakLength, isPlaying } = this.state

        let sessionCount;
        let breakCount;
        if (type === "session") {
            sessionCount = sessionLength + num;

        } else {
            breakCount = breakLength + num;
        }

        if (sessionCount > 0 && sessionCount < 61 && !isPlaying) {
            this.setState({
                sessionLength: sessionCount,
                clockCount: sessionCount * 60
            })
        }

        if (breakCount > 0 && breakCount < 61 && !isPlaying) {
            this.setState({
                breakLength: breakCount
            })
        }
    }


    handlePlayPause = () => {
        const { isPlaying } = this.state;

        if (isPlaying) {
            clearInterval(this.timer);
            this.setState({
                isPlaying: false
            })
        } else {
            this.setState({
                isPlaying: true
            })

            this.timer = setInterval(() => {
                const { clockCount, title, breakLength, sessionLength } = this.state;
                if (clockCount === 0) {

                    this.setState({
                        title: (title === 'Get to work!') ? 'Take a break!' : 'Get to work!',
                        clockCount: (title === 'Get to work!') ? (breakLength * 60) : (sessionLength * 60)
                    })
                    this.audioRef.current.play()

                } else {

                    this.setState({
                        clockCount: clockCount - 1

                    })

                }

            }, 1000)
        }
    }

    resetTimer = () => {
        clearInterval(this.timer);
        this.setState({
            sessionLength: 25,
            clockCount: 25 * 60,
            breakLength: 5,
            isPlaying: false,
            title: 'Get to work!'
        })
        this.audioRef.current.pause();
        this.audioRef.current.currentTime = 0;
    }

    render() {
        const { clockCount, isPlaying, sessionLength, breakLength, title, settings } = this.state;

        return (
            <motion.div className="pomodoro"
                exit={{ x: '100vw', transition: { ease: 'linear', duration: .6 } }}
            >
                <h1>Pomodoro</h1>
                <audio ref={this.audioRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" id="beep" preload="auto"></audio>

                <motion.div className="pomodoro__timer"
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: .6, type: 'tween', delay: .2 } }}

                >
                    <Clock clockCount={clockCount} title={title} sessionLength={sessionLength} breakLength={breakLength} />
                </motion.div>

                <motion.div className="pomodoro__buttons"
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: .6, type: 'tween', delay: .2 } }}
                >
                    <button className="btn" onClick={() => this.setState({
                        settings: true
                    })} >
                        <i className="fas fa-cog"></i>
                    </button>
                    <button className="btn" onClick={this.handlePlayPause}>
                        <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
                    </button>
                    <button className="btn" onClick={this.resetTimer}>
                        <i className="fas fa-sync-alt"></i>
                    </button>
                </motion.div>

                <div className={`pomodoro__settings ${settings ? "show" : ""}`}>
                    <div className="session">
                        <h4>Session length</h4>
                        <div className="session-btns">

                            <button className="btn btn-sec" onClick={() => this.handleChange(-1, "session")} >
                                <i className="fas fa-arrow-down"></i>
                            </button>
                            <span className="fixed">{sessionLength}</span>
                            <button className="btn btn-sec" onClick={() => this.handleChange(1, "session")}>
                                <i className="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </div>

                    <div className="break">
                        <h4>Break length</h4>
                        <div className="break-btns">

                            <button className="btn btn-sec" onClick={() => this.handleChange(-1, "break")}>
                                <i className="fas fa-arrow-down"></i>
                            </button>
                            <span className="fixed">{breakLength}</span>
                            <button className="btn btn-sec" onClick={() => this.handleChange(1, "break")}>
                                <i className="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </div>
                    <button className="btn btn-sec close-btn" onClick={() => this.setState({
                        settings: false
                    })}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </motion.div>
        )
    }
}

export default Pomodoro;
