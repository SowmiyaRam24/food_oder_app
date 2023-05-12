import React,{useReducer} from 'react';
import Cartcentent from './cart-centent';
const defaultCartstate={
  items:[],
  totalAmount:0
};
const cartReducer=(state,action)=>{
  if(action.type==='ADD'){
    const updateTotal=state.totalAmount+action.items.price*action.item.amount;
    const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
    const existingCartItem=state.items[existingCartItemIndex];
    
    let updatedItems;
    if (existingCartItem){
      const  updatedItem={
        ...existingCartItem,
        amount:existingCartItem.amount+action.item.amount
      };
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;
    }else{

      updatedItems=state.items.concat(action.item);
    }

    return{
      items:updatedItems,
      totalAmount:updateTotal
    }
  }
  if(action.type==='REMOVE'){
    const existingCartItemIndex=state.items.findIndex(
      (item)=>item.id===action.id);
    const existingCartItem=state.items[existingCartItemIndex];
    const updateTotal =state.totalAmount-existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount===1){
          updatedItems=state.items.filter(item=> item.id!==action.id);
    }else{
         let updatedItem={...existingCartItem,amount:existingCartItem.amount-1};
         updatedItems=[...state.items];
         updatedItems[existingCartItemIndex]=updatedItem;
  }
  return {
    items:updatedItems,
    totalAmount:updateTotal
  }
};
}
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