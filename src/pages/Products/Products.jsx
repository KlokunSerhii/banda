import React from 'react';
import styles from "./Products.module.css";
import ProductsFilters from "../../components/products/ProductsFilters/"

function Products() {
  return (
    <div className={styles.containerWrapper}>
      <ProductsFilters />
    </div>
  );
}

export default Products;
