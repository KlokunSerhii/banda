import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Welcome.module.css';
import symbolDefs from '../../images/symbol-defs.svg';
import line from '../../images/Line.png';
import Container from '../../components/Container';
function Welcome() {
  return (
    <section className={styles.backGround}>
      <Container>
        <div className={styles.screen}>
          <div className={styles.videoCountBox}>
            <div className={styles.videoCountBack}>
              <svg className={styles.videoPlayIcon} width="12" height="12">
                <use href={symbolDefs + '#play-symbol-icon'}></use>
              </svg>
            </div>
            <div>
              <p className={styles.videoCount}>350+</p>
              <p className={styles.videoTutorial}>Video tutorial</p>
            </div>
          </div>

          <div className={styles.caloriesCountBox}>
            <div className={styles.caloriesCountBack}>
              <svg className={styles.runIcon} width="17" height="17">
                <use href={symbolDefs + '#run-icon'}></use>
              </svg>
            </div>
            <div className={styles.caloriesContent}>
              <p className={styles.caloriesCount}>500</p>
              <p className={styles.caloriesTutorial}>cal</p>
            </div>
          </div>

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
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
