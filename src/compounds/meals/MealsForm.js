import classes from './MealsForm.module.css';
import Inputs from  '../UI/inputs';


const MealsForm =(props)=>{
   return(<form className={classes.form}>
         <Inputs label ="Amount" input={{
            id:'amount',
            type:'number',
            min:'0',
            max:'5',
            step:'1',
            defaultValue:'0'
         }}/>
         <button className={classes.formbutton}>+Add</button>
      </form>

   )
}
export default MealsForm;