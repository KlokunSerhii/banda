import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./BasicModalWindow.module.css";

import symbolDefs from "../../images/symbol-defs.svg";

const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  useEffect(() => {
    document.body.classList.add(`${css.overflow_hidden}`);
    return () => {
      document.body.classList.remove(`${css.overflow_hidden}`);
    };
  }, []);

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <div className={css.basic_modal_window} onClick={handleClickBackground}>
      <div className={css.modal}>
        <button className={css.closeSvg} onClick={() => isOpenModalToggle()}>
          <svg className={css.colorSvg} width="20" height="20">
            <use href={symbolDefs + "#close-icon"}></use>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.querySelector("#portal_modal"));
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  children: PropTypes.any,
  isOpenModaltoggle: PropTypes.func,
};