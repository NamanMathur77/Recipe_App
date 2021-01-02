import React from 'react';

const Cart = (props)=>{
    return (
        <div className="container">
        <div className="row">
        {props.list.map(item => (
            <h1>{item.recipe.label}</h1>
        ))}
        </div>
    </div>
    )
}

export default Cart;