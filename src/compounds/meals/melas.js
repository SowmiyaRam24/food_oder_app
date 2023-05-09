import React from 'react';
import  MealsItems from './mealsItems';
import  MelasSummary from './mealsSummary';

function Meals(){
    return(
        <div>
            
            <MelasSummary/>
            <MealsItems/>
        </div>
    )
}
 export default Meals;