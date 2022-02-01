import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const Overlay = props => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const targetElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        targetElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        targetElement
      )}
    </React.Fragment>
  );
};

export default Modal;
