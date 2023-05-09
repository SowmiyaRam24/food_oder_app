import './mealsItems.modules.css';
const items=[
        
    {  id:1,
       name:'sushi',
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
    const  mapping = items.map(item=><li>{item.name}<div>{item.content}</div>{item.price}</li>) 
    return(

    
        <div>
            <ul>
              {mapping}
            </ul>
        </div>
        
        
    );
}
export default MealsItems;