import React from 'react';
import css from './DayProducts.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

function DayProducts() {
  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <p>Products</p>
        <button className={css.addBtn}>
          Add product
          <AiOutlineArrowRight width="16px" height="16px"></AiOutlineArrowRight>
        </button>
      </div>
      <div className={css.content}>
        <p>Not found products</p>
      </div>
    </div>
  );
}

export default DayProducts;
