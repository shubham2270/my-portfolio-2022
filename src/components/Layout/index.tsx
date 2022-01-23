import React, { useRef, useEffect } from "react";

import styles from "./layout.module.scss";
const { container, main, background } = styles;

const Layout = ({ children }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <div className={main}>
      <video autoPlay muted loop className={background} ref={videoRef}>
        <source src='/assets/background.mp4' type='video/mp4'></source>
      </video>
      {/* <main className={background}></main> */}
      <div className={container}></div>
    </div>
  );
};

export default Layout;
