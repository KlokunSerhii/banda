import React, {
  // useEffect,
  useState,
} from 'react';

import styles from './DaySwitch.module.css';
import symbolDefs from '../../../images/symbol-defs.svg';

import Datepicker from '../Datepicker';
// import { useDispatch } from 'react-redux';
// import { useDiary } from 'hooks';

function DaySwitch({ selectedDate, setSelectedDate, handleToNextDay, handleToPreviousDay }) {
  // const dispatch = useDispatch();
  // const { date } = useDiary();
  const [isDatepickerVisible, setIsDatepickerVisible] = useState(false);

  // handle date changes
  // useEffect(() => {
  //   dispatch()
  // }, [selectedDate])

  // handle switching to the previous day

  // handle change datepicker value
  const handleDatepickerBtnClick = () => {
    setIsDatepickerVisible(!isDatepickerVisible);
  };

  // forrmated Date to the generally acceptable format
  const formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}/
  ${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/
  ${selectedDate.getFullYear()}`;

  return (
    <div className={styles.container}>
      <p className={styles.text}>{formattedDate}</p>
      <button className={styles.calendar} onClick={handleDatepickerBtnClick}>
        <svg style={{ width: '24px', height: '24px' }}>
          <use href={symbolDefs + '#calendar-icon'}></use>
        </svg>
      </button>

      <div className={styles.btnCont}>
        <button className={styles.btnArrow} onClick={handleToPreviousDay}>
          <svg className={styles.arrow}>
            <use href={symbolDefs + '#arrow-right-icon'}></use>
          </svg>
        </button>

        <button className={styles.btnArrow} onClick={handleToNextDay}>
          <svg className={styles.arrow}>
            <use href={symbolDefs + '#arrow-left-icon'}></use>
          </svg>
        </button>
      </div>
      {isDatepickerVisible ? <Datepicker date={selectedDate} onChange={setSelectedDate}/> : null}
    </div>
  );
}

export default DaySwitch;
