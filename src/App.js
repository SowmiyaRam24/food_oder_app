import React, {useState} from 'react';
import './App.css';
import Header from './compounds/Header/Header';
import Meals from './compounds/meals/melas';
import Cart from './compounds/Cart/Cart'; 
import CartProvider from './store/CartProvider';

function App() {
  const [CartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCarthandeler=()=>{
    setCartIsShown(false);
  };
  return (
    <CartProvider>
       {CartIsShown&&<Cart onClose={hideCarthandeler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}
export default App;
