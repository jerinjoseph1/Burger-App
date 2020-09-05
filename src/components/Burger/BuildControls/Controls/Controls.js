import React from 'react';
import classes from "./Controls.css"

const control =(props)=>{
    return(
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.More} onClick={props.added}>+</button>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>-</button>
        </div>
    )

}
export default control;