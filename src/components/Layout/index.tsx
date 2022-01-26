import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar';

import styles from './layout.module.scss';
const { container, main, background, pathContainer, pathText, timeText, navContainer } = styles;

const Layout = ({ children }) => {
  const videoRef = useRef(null);
  const [time, setTime] = useState('');

  const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? 0 + minutes : minutes;
    const strTime = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
    return strTime;
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = formatAMPM(new Date());
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(timeInterval);
  });

  return (
    <div className={main}>
      <video autoPlay muted loop className={background} ref={videoRef}>
        <source src="/assets/background.mp4" type="video/mp4"></source>
      </video>
      <div className={container}>
        <div className={pathContainer}>
          <span className={pathText}>~/Home</span>
          <span className={timeText}>{time}</span>
        </div>
        <div className={navContainer}>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
