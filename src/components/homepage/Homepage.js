import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

import { ReactComponent as Image } from '../../pomodoro.svg';
import { motion } from 'framer-motion';

const Homepage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw'
      
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'linear',
        duration: .6,
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'linear',
        duration: .6
      }
    }
  }

  return (
    <motion.div className="homepage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default Homepage;
