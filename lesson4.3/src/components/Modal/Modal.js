import React from "react";
import classes from './Modal.module.css'
const Modal = ({children,handleShow}) => {
    return (
        <>
            <div onClick={handleShow} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
            </div>
        </>
    )
}
export default Modal;