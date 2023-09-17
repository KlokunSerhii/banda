import React from 'react';
import css from './TitlePage.module.css';

function TitlePage({ title }) {
  return (
    <div className={css.titleContainer}>
      <h1>{title}</h1>
    </div>
  );
}

export default TitlePage;
