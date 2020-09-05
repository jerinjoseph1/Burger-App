import React from 'react';
import classes from './NavigationItems.css';

const navigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
                <a className={classes.active} href="/">Burger Builder</a>
            </li>
            <li className={classes.NavigationItem}>
                <a className={null} href="/">Checkout</a>
            </li>
        </ul>
    )
}

export default navigationItems;