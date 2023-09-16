import React from 'react';
import styles from "./Products.module.css"
import ProductsFilters from "../../components/products/ProductsFilters/ProductsFilters"

function Products() {
  return (
    <div className={styles.productsWrapper}>
      <ProductsFilters />
    </div>
  );
}

export default Products;
