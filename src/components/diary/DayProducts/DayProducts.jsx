import React from 'react';
import { NavLink } from 'react-router-dom';


import styles from './DayProducts.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import TableProducts from './TableProducts';

function DayProducts() {
  

  return (
    <div className={styles.dayProductsWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Products</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addProductBtn}>
            
            <NavLink to='/products'>Add product</NavLink>
          </button>
          <AiOutlineArrowRight width="16px" height="16px"/>
        </div>
       
      </div>

         {<TableProducts />
        ? <TableProducts />
        : <p className={styles.errNotFound} >Not found products</p>}
     </div>
   
  );
}

export default DayProducts;
