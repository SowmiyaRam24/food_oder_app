import classes from './input .module.css';
import React from 'react';

const Inputs= React.forwardRef((props,ref) => {
   return (
   <div className={classes.input} >
      <label  htmlFor={props.input.id}>{props.label}</label>
      <input className={classes.inputlabel} id={props.input.id} ref={ref} {...props.input}/>
   </div>
   );
});
export default Inputs;