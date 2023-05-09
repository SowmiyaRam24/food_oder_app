import './mealsItems.modules.css';
const items=[
        
    {id:1,
       name:'sowmiya'
   },
   {
      id:2,
      name:'ramya'
   },
   {
      id:3,
      name:'kanmani'
   }

]
function MealsItems(){
    const  mapping = items.map(item=><li>{item.name}</li>) 
    return(

    
        <div>
            <ul>
              {mapping}
            </ul>
        </div>
        
        
    );
}
export default MealsItems;