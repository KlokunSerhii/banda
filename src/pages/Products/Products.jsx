import React from 'react';
import styles from './Products.module.css';
import ProductsFilters from '../../components/products/ProductsFilters';
import Container from 'components/Container';
import ProductsList from 'components/products/ProductsList/ProductsItem';
import TitlePage from 'components/diary/TitlePage';

function Products() {
  return (
    <section className={styles.backGround}>
      <Container>
        <div className={styles.wrapper}>
          <TitlePage title="Products" />
          <ProductsFilters />
        </div>

        <ProductsList />
      </Container>
    </section>
  );
}

export default Products;
