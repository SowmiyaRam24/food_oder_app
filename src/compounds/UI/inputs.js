import classes from './input .module.css';

const Inputs=(props)=>{
   return (
   <div className={classes.input} >
      <label  htmlFor={props.input.id}>{props.label}</label>
      <input className={classes.inputlabel} id={props.input.id}{...props.input}/>
   </div>
   );
};
export default Inputs;