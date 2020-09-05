import React, {Component} from 'react';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state={
        showSideDrawer:false
    }

    openSideDrawerHandler=()=>{
        this.setState({showSideDrawer:true})
    }

    closeSideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar clicked={this.openSideDrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} clicked={this.closeSideDrawerHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
        </React.Fragment>
        )
    }
} 

export default Layout;