import React from 'react';
import "./Products.css";
import ProductsFilters from "../../components/products/ProductsFilters/ProductsFilters"

function Products() {
  return (
    <div className='container' style={{color: 'white'}}>
      <ProductsFilters />
    </div>
  );
}

export default Products;
