import React from 'react';
import products from '../../../../JSON/products.json';
function ProductsList() {
  return (
    <ul
      style={{
        height: '487px',
        width: '842px',
        overflow: 'scroll',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '28px',
      }}
    >
      {products.slice(0, 20).map(({ weight, calories, category, title }) => {
        return (
          <li
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignitems: 'center',
              justifyContent: 'center',

              padding: '16px',
              color: `var(--main-text-color)`,
              width: '405px',
              height: '141px',
              backgroundColor: `var(--transparent-medium-3)`,
              border: '1px',
              borderRadius: '12px ',
            }}
          >
            <p>DIET</p>
            <p>Recommended</p>
            <p>{title}</p>
            <p>
              Calories: <span>{calories}</span>
            </p>
            <p>
              Category: <span>{category}</span>
            </p>
            <p>
              Weight: <span>{weight}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
