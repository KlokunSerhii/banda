import React, {
  useEffect,
  // useState
} from "react";
import { useDispatch } from "react-redux";

import { useDiary } from "hooks";
import { getDiariesByDate, deleteDiaryProduct } from "redux/diary/operations";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import styles from './TableProducts.module.css'

// const exampleValues = [
//   {
//     Title: 'Bread Hercules grain',
//     Category: 'Flour',
//     Calories: 289,
//     Weight: 100,
//     Recommended: 'Yes',
//   },
//   {
//     Title: 'Rice semolina Garnets gluten-free',
//     Category: 'Cereals',
//     Calories: 340,
//     Weight: 100,
//     Recommended: 'No',
//   },
//   {
//     Title: 'Venison stew Specia',
//     Category: 'Meat',
//     Calories: 81,
//     Weight: 100,
//     Recommended: 'Yes',
//   },
//   {
//     Title: 'Bread Hercules grain',
//     Category: 'Flour',
//     Calories: 289,
//     Weight: 100,
//     Recommended: 'No',
//   },

//   {
//     Title: 'Rice semolina Garnets gluten-free',
//     Category: 'Cereals',
//     Calories: 340,
//     Weight: 100,
//     Recommended: 'No',
//   },
//   {
//     Title: 'Venison stew Specia',
//     Category: 'Meat',
//     Calories: 81,
//     Weight: 100,
//     Recommended: 'Yes',
//   },
//   {
//     Title: 'Bread Hercules grain',
//     Category: 'Flour',
//     Calories: 289,
//     Weight: 100,
//     Recommended: 'No',
//   },
// ];

const columnHelper = createColumnHelper();

 
const columns = [
  columnHelper.accessor('Title', {
    header: 'Title',
  }),
  columnHelper.accessor('Category', {
    header: 'Category',
  }),
  columnHelper.accessor('Calories', {
    header: 'Calories',
  }),
  columnHelper.accessor('Weight', {
    header: 'Weight',
  }),
  columnHelper.accessor('Recommended', {
    cell: info => <p className={styles.isRecommended}>{info.getValue()}</p>,
    header: 'Recommended',
  }),

];


function TableProducts() {
  const dispatch = useDispatch();
  // const [data, setData] = useState(exampleValues);
  const { diary, date } = useDiary();
  console.log("🚀 ~ file: TableProducts.jsx:84 ~ TableProducts ~ diary:", diary);
  

useEffect(() => {
    //==================================[[date format from useDiary]]===========
      // dispatch(getDiariesByDate('2023-09-20T14:15:19.192Z'));
    dispatch(getDiariesByDate(date));
      

  }, [date, dispatch]);
  
  
  

  const table = useReactTable({
    data: diary,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //  const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  const handleDelete = (productId) => {
    dispatch(deleteDiaryProduct(productId));

    console.log(`Delete was successful`);
  }

  return (
    <>
      {/* Head */}
      <div className={styles.tableHead}>
        <p className={styles.title}>Title</p>
        <p className={styles.category}>Category</p>
        <p className={styles.calories}>Calories</p>
        <p className={styles.weight}>Weight</p>
        <p className={styles.recommended}>Recommend</p>
      </div>
      
      {/* Body */}
      <div className={styles.tableWrapper}>

        <table className={styles.table}>
        
          <tbody className={styles.tableBody}>
            {table.getRowModel().rows.map(row => (
              <tr className={styles.tableRow} key={row.id}>
                {row.getVisibleCells().map(cell => (
         
                  <td className={styles.tableCell} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <button className={styles.deleteBtn} onClick={() => handleDelete({ productId: row.id })}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 2.5H12.5M8.33333 8.75V12.9167M11.6667 8.75V12.9167" stroke="#EF8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5" stroke="#EF8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </tr>
            ))}
          </tbody>
  
        </table>
      </div>
    </>
  );
};

export default TableProducts;
