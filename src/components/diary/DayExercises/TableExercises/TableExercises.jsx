import React, {
  useEffect,
  // useState
} from "react";
import { useDispatch } from "react-redux";

import { useDiary } from "hooks";
import { getDiariesByDate, deleteDiaryExercise } from "redux/diary/operations";
// import { toast } from 'react-toastify';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import styles from './TableExercises.module.css'

// const initialValues = [
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '45° side bend',
//     Target: 'Abs',
//     BurnedCalories: 323,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: 'Air bike',
//     Target: 'Abs',
//     BurnedCalories: 311,
//     Time: 60,
//   },
//  {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '45° side bend',
//     Target: 'Abs',
//     BurnedCalories: 323,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: 'Air bike',
//     Target: 'Abs',
//     BurnedCalories: 311,
//     Time: 60,
//   },

// ];

const columnHelper = createColumnHelper();

 
const columns = [
  columnHelper.accessor('BodyPart', {
     cell: info => <div className={styles.bodyPartWrapper}>{info.getValue()}</div>,
    header: 'Body Part',
  }),
  columnHelper.accessor('Equipment', {
     cell: info => <div className={styles.equipmentWrapper}>{info.getValue()}</div>,
    header: 'Equipment',
  }),
  columnHelper.accessor('Name', {
     cell: info => <div className={styles.exerciseNameWrapper}>{info.getValue()}</div>,
    header: 'Name',
  }),
  columnHelper.accessor('Target', {
     cell: info => <div className={styles.exerciseTargetWrapper}>{info.getValue()}</div>,
    header: 'Target',
  }),
    columnHelper.accessor('BurnedCalories', {
        cell: info => <div className={styles.burnedCaloriesWrapper}>{info.getValue()}</div>,
    header: 'BurnedCalories',
  }),
  columnHelper.accessor('Time', {
     cell: info => <div className={styles.exerciseTimeWrapper}>{info.getValue()}</div>,
    header: 'Time',
  }),

];


function TableExercises() {
  const dispatch = useDispatch();

  // const [data, setData] = useState(initialValues);
  const {
    diary,
    // date
  } = useDiary();

  // console.log( diary);

  

  const date = new Date().toISOString();
  // console.log(date);

  useEffect(() => {
    dispatch(getDiariesByDate(date));


  }, [dispatch]);


  
  

  const table = useReactTable({
    data: diary,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


  const handleDelete = (exerciseId) => {
    if (exerciseId) {
      dispatch(deleteDiaryExercise(exerciseId));
      // toast.success('Delete was successful')
      return;
    }

    // toast.error('Delete is failed');
  }


  return (
    <>
      
      {/* Head */}
        <div className={styles.tableHead}>
            <p className={`${styles.bodyPart} ${styles.titles}`}>Body Part</p>
            <p className={`${styles.equipment} ${styles.titles}`}>Equipment</p>
            <p className={`${styles.exerciseName} ${styles.titles}`}>Name</p>
            <p className={`${styles.exerciseTarget} ${styles.titles}`}>Target</p>
              <p className={`${styles.burnedCalories} ${styles.titles}`}>Burned Calories</p>
              <p className={`${styles.exerciseTime} ${styles.titles}`}>Time</p>

        </div>
      
      {/* Body */}
      <div className={styles.tableWrapper}>

      <table className={styles.table}>
        
        <tbody className={styles.tableBody}>
          {table.getRowModel().rows.map(row => (
            <tr className={styles.tableRow} key={row.id}>
            
              {row.getVisibleCells().map(cell => (
                <>
                <td className={styles.tableCell} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
                </>
         
              ))}
              <button className={styles.deleteBtn} onClick={()=>handleDelete({ exerciseId: row.id })}>
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

export default TableExercises;

