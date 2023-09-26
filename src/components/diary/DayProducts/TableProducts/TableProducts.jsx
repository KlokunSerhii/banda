import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../../images/symbol-defs.svg";
import styles from "./TableProducts.module.css";
import { getDiariesByDate } from 'redux/diary/operations';
import { useDiary } from 'hooks';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

function TableProducts() {
  const [products, setProducts] = useState([]);
  const date = new Date().toISOString()

  // const getData = useCallback(async () => {
  //   const { data } = await axios.get(`diaries/${date}`)
  //   return setProducts(data.meal)
  // }, [date])
  const { diary } = useDiary()
  console.log(diary)
  const dispatch = useDispatch()

 const getData = useCallback(() => {
  dispatch(getDiariesByDate(date))
  }, [dispatch])

  useEffect(() => {
    getData()
  }, [getData])

  const handleDelete = productId => {
    // if (productId) {
    //   const { status, data } =  axios.delete(
    //     `eaten-products/${productId}`,
    //     { data: productId }
    //   );
    //   if (status === 200) {
    //     toast.success('Delete was successful')
    //     return { productId: productId, data };
    //   }
    //   toast.error('Delete is failed');
    //   return {};
    // }
  };


  const listOfProducts = products.map((obj) => {
    const num = nanoid();
    const caloriesEaten = Math.round((obj.weight * obj.product.calories) / 100);

    return (
      <tr key={num}>
        <td className={styles.tdTitle}>
          <div>{obj.product.title}</div>
        </td>
        <td className={styles.tdCategory}>
          <div>{obj.product.category}</div>
        </td>
        <td className={styles.tdCalories}>
          <div>{caloriesEaten}</div>

        </td>
        <td className={styles.tdWeight}>
          <div>{obj.weight}</div>
        </td>
        <td className={styles.tdRecommend}>
          {/* {recomendProduct(obj.product.groupBloodNotAllowed) ? (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="green" />
                </svg>
                <p>Yes</p>
              </span>
            </>
          ) : (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="red" />
                </svg>
                <p>No</p>
              </span>
            </>
          )} */}
        </td>
        <td className={styles.tdDellete}>
          <button onClick={() => handleDelete(obj.product._id)}>
            <svg>
              <use href={symbolDefs + "#trash-icon"}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>{listOfProducts.length > 0 ? (
      <div className={styles.DayProducts}>

        <div className={styles.DayProductsTable}>
          <table>
            <thead>
              <tr>
                <th className={styles.thTitle}>Title</th>
                <th className={styles.thCategory}>Category</th>
                <th className={styles.thCalories}>Calories</th>
                <th className={styles.thWeight}>Weight</th>
                <th className={styles.thRecommend}>Recommend</th>
              </tr>
            </thead>
            <tbody>{listOfProducts}</tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className={styles.DayProducts}>
        <div className={styles.DayProductsHead}>
          <h2>Products</h2>
        </div>
        <div className={styles.DayProductsTable}>
          <p className={styles.not_found}>Not found products</p>
        </div>
      </div>
    )}
    </>

    // <>
    //   {/* Head */}
    //   <div className={styles.tableHead}>
    //     <p className={styles.title}>Title</p>
    //     <p className={styles.category}>Category</p>
    //     <p className={styles.calories}>Calories</p>
    //     <p className={styles.weight}>Weight</p>
    //     <p className={styles.recommended}>Recommend</p>
    //   </div>

    //   {/* Body */}
    //   <div className={styles.tableWrapper}>
    //     <table className={styles.table}>
    //       <tbody className={styles.tableBody}>
    //         {table.getRowModel().rows.map(row => (
    //           <tr className={styles.tableRow} key={row.id}>
    //             {row.getVisibleCells().map(cell => (
    //               <td className={styles.tableCell} key={cell.id}>
    //                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //               </td>
    //             ))}

    //             {/* {filteredRecList.map((el) => {
    //               return <p key={el._id}
    //     className={
    //       el.groupBloodNotAllowed[bloodType]
    //         ? styles.productsStatusRecommendedTextTrue
    //         : styles.productsStatusRecommendedTextFalse
    //     }
    //   >
    //     {el.groupBloodNotAllowed[bloodType]
    //       ? 'Yes' : 'No'}
    //   </p>

    //             })

    //             } */}
    //             <button
    //               className={styles.deleteBtn}
    //               onClick={() => handleDelete({ productId: row.id })}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 viewBox="0 0 20 20"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M7.5 2.5H12.5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
    //                   stroke="#EF8964"
    //                   stroke-width="1.5"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //                 <path
    //                   d="M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5"
    //                   stroke="#EF8964"
    //                   stroke-width="1.5"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </svg>
    //             </button>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </>
  );
}

export default TableProducts;
