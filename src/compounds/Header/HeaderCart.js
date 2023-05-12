
import CartIcon from '../Cart/CartIcon';
import { useContext,useEffect,useState } from 'react';
import Cartcentent from '../../store/cart-centent';
import classes from './HeaderCart.module.css';
const HeaderCartButton=props=>{
    const[btnIsHighlighted,setIsHigh]=useState(false);
    const cartCtx=useContext(Cartcentent);
    const {items}=cartCtx
    const numberOfCartItems=items?cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount},0):0;

    const btnClasses=`${classes.button} ${btnIsHighlighted?classes.bump:''}`;
    useEffect(()=>{
      if(items.length===0){
        return;
      }
      setIsHigh(true);
      const timer=setTimeout(()=>{
      setIsHigh(false)
      },100);
      return()=>{
        clearTimeout(timer)
      }
    },[items])
    return (
        <div>
                <button className={btnClasses} onClick={props.onClick}>
                    <span className={classes.icon}><CartIcon/></span>
                        <span>Yourcart:</span>
                    
                    <span className={classes.badge}>{numberOfCartItems}</span>
                </button>
            
        </div>
    )
   
 }
export default HeaderCartButton;