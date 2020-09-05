import React, {Component} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{

    shouldComponentUpdate(nextProps,nextState){         //performance improvement--only rerender if modalshow is true
        return nextProps.modalState !== this.props.modalState;        
    }   

    componentDidUpdate(){                       //logs on each render
        console.log("[modal] update")
    }

    render(){
        return(
            <React.Fragment>
                <Backdrop show={this.props.modalState} clicked={this.props.clicked}/>
                <div className={classes.Modal}
                style={{
                    transform: (this.props.modalState)? 'translateY(0)':'translateY(-100vh)',
                    opacity: (this.props.modalState)?'1':'0'
                }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;