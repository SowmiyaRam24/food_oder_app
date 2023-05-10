import Carts from '../UI/Carts';
import React from 'react';
import classes from  './mealsItems.module.css';
import Items from './Items'
const items=[
        
    {  id:1,
       name:'Sushi',
       content:"finest fish and veggies",
       price:'$22.99'
   },
   {
      id:2,
      name:'Schnitzel',
      content:'A german specialty',
      price:'$16.50'
   },
   {
      id:3,
      name:'Barbecue Burger',
      content:'American,raw,meaty',
      price:'$12.99'
   },
   {
    id:4,
    name:'Green Bowl',
    content:'Healthy...and green',
    price:'$13.66'
   }

]
function MealsItems(){
    const  mapping = items.map((item)=><Items key={item.id} name={item.name} content={item.content} price={item.price}/>) 
    return(
        <section className={classes.meals}>
            <Carts>
            <ul>
              {mapping} 
            </ul>
            </Carts>
        </section>
    );
}
export default MealsItems;