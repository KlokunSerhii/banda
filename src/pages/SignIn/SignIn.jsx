import Container from 'components/Container';
import SignInForm from 'components/welcome/SignInForm';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignIn.module.css';
import symbolDefs from '../../images/symbol-defs.svg';

function SignIn() {
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
          <div className={styles.screen__content}>
            <h2>Sign in</h2>
            <p className={styles.enterText}>
              Please enter your credentials to login to the platform:
            </p>
            <SignInForm />
            <p className={styles.noaccount}>
              Don't have an account?
              <NavLink to="/singup" className={styles.link}>
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SignIn;
