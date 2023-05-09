import React, { Fragment } from 'react';
import mealsImage from './meals.jpg';
import HeaderCartButton from './HeaderCart';
import classes from './Header.module.css';
function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
              <h1>ReactMeal</h1>
              <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='loading'/>
            </div>
        </Fragment>
    )
}
export default Header ;