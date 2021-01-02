import React from 'react';
import './RecipeList.css'
import RecipeCard from './RecipeCard';

const RecipeList = (props)=>{
    return (
        <div className="container">
        <div className="row">
        {props.recipes.map(item => (
            <RecipeCard item={item} addingToCart={props.addingToCart}/>
        ))}
        </div>
    </div>
    )
}

export default RecipeList;