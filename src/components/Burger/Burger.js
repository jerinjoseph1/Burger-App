import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) =>{
    let transformedIngredients;

    (props.ingredients.salad===0 && props.ingredients.cheese===0 && props.ingredients.bacon===0 && props.ingredients.meat===0) ?
    transformedIngredients=<p>Please add ingredients</p>
    :
    transformedIngredients=Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredients type={igKey} key={igKey +i}/>
        });
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger;