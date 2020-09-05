import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/Layout/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE={
    salad: 0.4,
    cheese: 0.8,
    bacon: 0.5,
    meat:1.3
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice:4,
        orderButton: true,
        modalShow: false
    }

    addIngredientHandler=(type)=>{
        let ingredientCount=this.state.ingredients[type]+1;
        let updatedIngredientState={...this.state.ingredients};
        updatedIngredientState[type]=ingredientCount;
        let updatedPrice=this.state.totalPrice+INGREDIENT_PRICE[type];
        this.setState({
            ingredients:updatedIngredientState,totalPrice:updatedPrice
        });
        this.orderButtonState(updatedPrice);
    }

    RemoveIngredientHandler=(type)=>{
        if(this.state.ingredients[type]<=0)
            return;
        let ingredientCount=this.state.ingredients[type]-1;
        let updatedIngredientState={...this.state.ingredients};
        updatedIngredientState[type]=ingredientCount;
        let updatedPrice=this.state.totalPrice-INGREDIENT_PRICE[type];
        this.setState({
            ingredients:updatedIngredientState,totalPrice:updatedPrice
        });
        this.orderButtonState(updatedPrice);
    }

    orderButtonState=(totalPrice)=>{
        (totalPrice > 4)?
            this.setState({orderButton:false}): 
            this.setState({orderButton:true}) 
    }

    modalShowState=()=>{
        this.setState({modalShow:true});
    }

    modalHideState=()=>{
        this.setState({modalShow:false});
    }

    checkoutConfirm=()=>{
        alert("Checkout sucess");
    }

    render(){

        let disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0; // if less than equal to 0 condition is true calue is true and vice-versa
        }
        return(
            <React.Fragment>
                <Modal modalState={this.state.modalShow} clicked={this.modalHideState}>
                    <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice}
                    clicked={this.modalHideState} clicked2={this.checkoutConfirm}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.RemoveIngredientHandler}
                disabled={disabledInfo} price={this.state.totalPrice} 
                orderDisabled={this.state.orderButton} modal={this.modalShowState}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;