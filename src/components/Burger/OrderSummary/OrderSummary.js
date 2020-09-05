import React from 'react';
import classes from './Button.css';
const orderSummary = (props) =>{

    const ingredientSummary=Object.keys(props.ingredients)
    .map((igKey)=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span>{props.ingredients[igKey]}</li>
    });

    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients is ready to serve:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
            <p>Do you want to continue to checkout?</p>
            <button onClick={props.clicked} className={[classes.Button,classes.Danger].join(" ")}>CANCEL</button>
            <button onClick={props.clicked2} className={[classes.Button,classes.Success].join(" ")}>CONTINUE</button>
        </React.Fragment>
    )
};

export default orderSummary;