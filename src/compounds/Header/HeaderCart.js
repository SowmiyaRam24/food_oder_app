import classes from './Header.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton=props=>{
    return<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
            <span>cart</span>
        
        <span></span>
    </button>
}
export default HeaderCartButton;