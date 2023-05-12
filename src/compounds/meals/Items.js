import { useContext } from 'react';
import classes from './Items.module.css';
import MealsFrom from './MealsForm'
import Cartcentent from '../../store/cart-centent';
function Items(props){
    const cartCtx=useContext(Cartcentent)
    
    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    return(

    <li>
        <div className={classes.meal}>
             
        <div>

        <h3 className={classes.meals}>{props.name}</h3>
        
        
        <div className={classes.description}>{props.content}</div>
        <div className={classes.price}>{props.price}</div>
        
        </div>
        <div><MealsFrom onAddToCart={addToCartHandler}></MealsFrom></div>
        </div>
        
    </li>
    

    )
}
export default  Items;