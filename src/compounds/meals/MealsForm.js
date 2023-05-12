import classes from './MealsForm.module.css';
import Inputs from  '../UI/inputs';
import {useRef,useState} from 'react';


const MealsForm =(props)=>{
   const[amountIsValid,setamountIsValid]=useState(true);
   const amountInputRef=useRef();
const submitHandler=event=>{
   event.preventDefault();
   const enteredAmount=amountInputRef.current.value;
   const enteredAmountToNumber=+enteredAmount;
   if(enteredAmount.trim().length===0||enteredAmountToNumber<1||enteredAmount>5){
       setamountIsValid(false);
      return;
   }
   props.onAddToCart(enteredAmountToNumber )
   }
   return(<form className={classes.form} onSubmit={submitHandler}>
         <Inputs
          ref={amountInputRef}
          label ="Amount" input={{
            id:'amount_'+props.id,
            type:'number',
            min:'0',
            max:'5',
            step:'1',
            defaultValue:'1'
         }}/>
         <button className={classes.formbutton}>+Add</button>
         {!amountIsValid && <p>Please Enter Valid Input</p>}
      </form>

   )
}
export default MealsForm;