import {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import classes from './modal.module.css';
import React from 'react';

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}></div>
  )
};

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
  );
};
const getid=document.getElementById('overlays')

const Modal=(props)=>{
    return(<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,getid)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,getid)}
    </Fragment>

    )
} 
export default Modal;