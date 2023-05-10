
import classes from './Items.module.css';
import MealsFrom from './MealsForm'
function Items(props){
    
    return(

    <li>
        <div className={classes.meal}>
             
        <div>

        <h3 className={classes.meals}>{props.name}</h3>
        
        
        <div className={classes.description}>{props.content}</div>
        <div className={classes.price}>{props.price}</div>
        
        </div>
        <div><MealsFrom></MealsFrom></div>
        </div>
        
    </li>
    

    )
}
export default  Items;