
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import Cartcentent from '../../store/cart-centent';
import classes from './HeaderCart.module.css';
const HeaderCartButton=props=>{
    const cartX=useContext(Cartcentent);
    const numberOfCartItems=cartX.items.reduce((curNumber,item)=>{
        return curNumber+item.amount},0);
    return (
        <div>

            <button className={classes.button} onClick={props.onClick}>
                    <span className={classes.icon}><CartIcon/></span>
                        <span>Yourcart:</span>
                    
                    <span className={classes.badge}>{numberOfCartItems}</span>
                </button>
            
        </div>
    )
   
 }
export default HeaderCartButton;