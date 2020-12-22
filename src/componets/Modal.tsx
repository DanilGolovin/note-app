import ModalCSS from '../styles/Modal.module.css';

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Modal: React.FC = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    modalRoot!.appendChild(el.current);
    return () => void modalRoot!.removeChild(el.current);
  }, []);

  return createPortal( <div className={ModalCSS.overlay}>
    <div className={ModalCSS.dialog} >
      {children}
    </div>
  </div>
  , el.current);
};

export default Modal;