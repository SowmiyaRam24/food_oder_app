import React,{useReducer} from 'react';
import Cartcentent from './cart-centent';
const defaultCartstate={
  items:[],
  totalAmount:0
};
const cartReducer=(state,action)=>{
  if(action.type==='ADD'){
    const updatedItem=state.items.concat(action.item);
    const updateTotal=state.totalAmount+action.item.price*action.item.amount
    return{
      items:updatedItem,
      totalAmount:updateTotal
    }
  }
  return defaultCartstate;
};
function CartProvider(props) {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartstate);
    const addItemToCartHandeler=(item)=>{
      dispatchCartAction({type:'ADD',item:item});
    };
    const removeItemFromCartHandeler=(id)=>{
      dispatchCartAction({type:'REMOVE',id:id});
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandeler,
        removeItem:removeItemFromCartHandeler
    };
  return (<Cartcentent.Provider value={cartContext}>
    {props.children}
  </Cartcentent.Provider>
    
  )
}

export default CartProvider;