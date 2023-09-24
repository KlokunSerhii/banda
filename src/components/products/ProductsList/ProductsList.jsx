import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ProductsList.module.css';
import { useProduct } from '../../../hooks/products';
import ProductsItem from '../ProductsItem';
import { productList } from '../../../redux/products/operation';
import { useAuth } from '../../../hooks/auth';
import SearchNotResult from '../SearchNotResult';
import BasicModalWindow from '../../BasicModalWindow';
import AddProductSuccess from '../AddProductSuccess';
import { filterProducts } from '../../../helpers/filterProducts';
import AddProductForm from 'components/AddProductModalWindow/';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { filterProduct, selectProductsList } = useProduct();
  const { user } = useAuth();
  const bloodType = user.bodyParams.blood;
  const [modalData, setModalData] = useState(null);

  const productsList = selectProductsList?.map(el => ({
    ...el,
    recommended: el.groupBloodNotAllowed[bloodType],
  }));
  const filteredList = filterProducts(productsList, filterProduct);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const openModalToggle = el => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  console.log(modalData);
  console.log(typeof modalData);
  return (
    <>
      {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {typeof modalData === 'object' ? (
            <AddProductForm
              eldata={modalData}
              closeModal={closeModal}
              onClick={openModalToggle}
            />
          ) : (
            <AddProductSuccess closeModal={closeModal} calories={modalData} />
          )}
        </BasicModalWindow>
      )}
      {filteredList?.length > 0 ? (
        <ul className={styles.productsList}>
          {filteredList &&
            filteredList.map(el => (
              <ProductsItem
                key={el._id}
                el={el}
                openModalToggle={openModalToggle}
              />
            ))}
        </ul>
      ) : (
        <SearchNotResult />
      )}
    </>
  );
};

export default ProductsList;
