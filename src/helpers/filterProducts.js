export const filterProducts = (listProducts, filter) => {
  const { category, recommended } = filter;

  const search = filter.search ? filter.search.toLowerCase() : undefined;

  const stepOne = category
    ? listProducts.filter(el => el.category === category)
    : listProducts;
  const stepTwo =
    recommended === 'recommended'
      ? stepOne.filter(el => el.recommended)
      : recommended === 'notRecommended'
      ? stepOne.filter(el => !el.recommended)
      : stepOne;
  const stepThree = search
    ? stepTwo.filter(el => el.title.toLowerCase().includes(search))
    : stepTwo;

  return stepThree;
};
