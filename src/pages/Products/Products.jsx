import React from 'react';
import "./Products.module"
import { Container } from './Products.module';
import ProductsFilters from "../../components/products/ProductsFilters/ProductsFilters"

function Products() {
  return (
    <Container style={{ color: 'white' }}>
      <ProductsFilters />
    </Container>
  );
}

export default Products;
