import React from 'react';
import classes from './Carts.module.css';
function Carts(props){
   return <div className={classes.Carts}>{props.children}</div>
}
export default Carts;