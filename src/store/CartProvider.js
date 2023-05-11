import React from 'react';
import Cartcentent from './cart-centent';

function CartProvider(props) {
    const addItemToCartHandeler=(item)=>{};
    const removeItemFromCartHandeler=(id)=>{};

    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandeler,
        removeItem:removeItemFromCartHandeler
    };
  return (<Cartcentent.Provider value={cartContext}>
    {props.children}
  </Cartcentent.Provider>
    
  )
}

export default CartProvider;