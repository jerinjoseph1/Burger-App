import React from 'react';
import classes from './BuildControls.css';
import Controls from './Controls/Controls';

const controls=[
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
]

const buildControls = (props) =>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {controls.map((control)=>{
                return <Controls key={control.label} label={control.label}
                        added={()=>props.ingredientAdded(control.type)}
                        removed={()=>props.ingredientRemoved(control.type)}
                        disabled={props.disabled[control.type]}/>
            })}
            <button onClick={props.modal} disabled={props.orderDisabled} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;