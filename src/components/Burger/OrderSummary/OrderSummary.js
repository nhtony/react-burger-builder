import React, { Component } from 'react';
import Aux from '../../../hoc/Auxcom/Auxcom';
import Button from '../../UI/Button/Button';
class orderSummary extends Component {

    //This could be a functional componet, doesn't have to be a class
   
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
        });
        return (
            <Aux>
                <h3>Order của bạn</h3>
                <p>Một chiếc Hamburger ngon tuyệt với các nguyên liệu sau:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Tổng tiền: {this.props.price.toFixed(2)}</strong></p>
                <p>Bạn có muốn checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Hủy</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Tiếp tục</Button>
            </Aux>
        )
    }
}

export default orderSummary;