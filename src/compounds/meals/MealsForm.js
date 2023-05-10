import classes from './MealsForm.module.css';



const MealsForm =(props)=>{
   return(<form className={classes.form}>
         <input></input>
         <button className={classes.formbutton}>+Add</button>
   </form>

   )
}
export default MealsForm;