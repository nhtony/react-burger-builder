import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cà chua', type: 'bacon' },
    { label: 'Phô mai', type: 'cheese' },
    { label: 'Bò', type: 'meat' }
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Giá hiện tại: <strong>{props.price.toFixed(2)}</strong>$</p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick = {props.ordered}
        >{props.isAuth ? 'ORDER NGAY' : 'ĐĂNG KÝ ĐỂ ORDER NGAY!'}</button>
    </div>
)
export default buildControls;