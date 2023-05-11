import React, { Fragment ,useState} from 'react';
import './App.css';
import Header from './compounds/Header/Header';
import Meals from './compounds/meals/melas';
import Cart from './compounds/Cart/Cart'; 

function App() {
  const [CartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCarthandeler=()=>{
    setCartIsShown(false);
  };
  return (
    <Fragment>
       {CartIsShown&&<Cart onClose={hideCarthandeler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}
export default App;
