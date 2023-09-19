import React from 'react';
import css from './DaySwitch.module.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdArrowBackIos } from 'react-icons/md';

function DaySwitch() {
  return (
    <div className={css.container}>
      <p className={css.text}>20/07/2023</p>
      <AiOutlineCalendar
        size={60}
        style={{ width: 20 }}
        fill="#EF8964"
      ></AiOutlineCalendar>
      <div className={css.btnCont}>
        <button>
          <MdArrowBackIos fill="white"></MdArrowBackIos>
        </button>
        <button>
          <MdArrowBackIos
            fill="white"
            style={{ transform: 'rotate(180deg)' }}
          ></MdArrowBackIos>
        </button>
      </div>
    </div>
  );
}

export default DaySwitch;
