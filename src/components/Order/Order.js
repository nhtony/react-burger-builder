import React from 'react'
import classes from './Order.module.css'
const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amout: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
            key={ig.name}>{ig.name} ({ig.amout})</span>
    })

    return (
        <div className={classes.Order}>
            <p>Nhân bánh:  {ingredientOutput}</p>
            <p>Giá: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}
export default order;
