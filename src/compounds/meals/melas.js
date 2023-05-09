import React,{Fragment} from 'react';
import  MealsItems from './mealsItems';
import  MelasSummary from './mealsSummary';

function Meals(){
    return(
        <Fragment>
            <MelasSummary/>
            <MealsItems/>
        </Fragment>
    )
}
 export default Meals;