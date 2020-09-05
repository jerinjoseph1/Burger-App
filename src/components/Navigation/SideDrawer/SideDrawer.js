import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../Layout/Backdrop/Backdrop'

const sideDrawer =(props)=>{
    let showSideDrawer=[classes.SideDrawer, classes.Close];
    if(props.show) showSideDrawer=[classes.SideDrawer, classes.Open];

    return(
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={showSideDrawer.join(' ')}>
                <div style={{height:'11%',marginBottom:'32px'}}>
                        <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    )    
}

export default sideDrawer;