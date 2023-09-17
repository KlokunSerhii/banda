import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Welcome.module.css';
import bg from '../../images/side-view-people-training-gym 1.jpg';
import bgPhone from '../../images/side-view-people-training-gym-phone.jpg';
import line from '../../images/Line.png';
import polygon from '../../images/Polygon 1.png';
import man from '../../images/Group.png';
function Welcome() {
  return (
    <div className={styles.containerWelcome}>
      <div className={styles.infoWelcome}>
        <img src={line} alt="line" className={styles.line} />
        <h1 className={styles.title}>
          Transforming your body shape with Power Pulse
        </h1>
        <div className={styles.buttonContainer}>
          <NavLink className={styles.buttonUp} to="/singup">
            <span className={styles.buttonText}>Sign Up</span>
          </NavLink>
          <NavLink className={styles.buttonIn} to="/singin">
            <span className={styles.buttonText}>Sign In</span>
          </NavLink>
        </div>
      </div>
      <div className={styles.imgContainer}>
        {/* <img src={bg} alt="bg" className={styles.bg} /> */}

        <picture className={styles.bg}>
          <source srcSet={bgPhone} media="(max-width:1200px)" />
          <source srcSet={bg} media="(max-width:1200px)" />
          <img className={styles.bg} src={bg} alt="Bowl with ice cream" />
        </picture>

        <div className={styles.containerVideo}>
          <div className={styles.elips}>
            <img src={polygon} alt="polygon" className={styles.polygon} />
          </div>
          <p className={styles.videoNumber}>350+</p>
          <p className={styles.videoText}>Video tutorial</p>
        </div>
        <div className={styles.containerCalorie}>
          <div className={styles.elipsRun}>
            <img src={man} alt="man" className={styles.man} />
          </div>
          <div>
            <p className={styles.calNumber}>500</p>
            <p className={styles.calText}>cal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
