import classes from './Cart.module.css';
import CartItem from './CartItems';
import Modal from './Modal';
import { useContext } from 'react';
import Cartcentent from '../../store/cart-centent';
const Cart=props=>{
  const cartCtx=useContext(Cartcentent);
  let  totalAmount = `$${cartCtx.totalAmount}`;
    if (typeof cartCtx.totalAmount==='number'){
     
       totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
     }
  const hasItems=cartCtx.items.length>0;
  const cartItemRemoveHandler=id=>{
    cartCtx.removeItem(id);
  };
  const cartItemAddHandeler=item=>{
    cartCtx.addItem({...item,amount:1})
  };


  const CartItems=(<ul className={classes['cart-items']}>
    {cartCtx.items.map((item)=><CartItem key={item.id} name={item.name} amount={item.amount}  price={item.price}  onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandeler.bind(null,item)}
     />)}

  </ul>)
  return(
    <Modal onClose={props.onClose}>

    {CartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={classes.button}>Oder</button>}
    </div>
    </Modal>

  )
};
export default Cart;