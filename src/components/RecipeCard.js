import React from 'react';
import RecipeList from './RecipeList';
import './RecipeList.css'

class RecipeCard extends React.Component {

    state={
        ingredients: '',
        healthLabels: '',
    }

    componentDidMount(){
        this.setState({
            ingredients: this.props.item.recipe.ingredientLines.join(', '),
            healthLabels: this.props.item.recipe.healthLabels.join(', ')
        })
        console.log(this.state.healthLabels)
    }

    onAddingCart = ()=>{
        this.props.addingToCart(this.props.item)
    }

    render(){
        return(
            <div id='card' className="col-md-4 border card">
            <img src={this.props.item.recipe.image} className="card-img-top img-thumbnail image"/>
            <div className="middle">
                <div className="text">Calories - {this.props.item.recipe.calories}</div>
                <div className="text">{this.state.healthLabels}</div>
            </div>
            <div className="card-body">
                <h5 className="title">{this.props.item.recipe.label}</h5>
                <p className="card-text">{this.state.ingredients}</p>
                <a href={this.props.item.recipe.url} className="btn btn-primary">Build Yourself</a>
                <button className="btn btn-secondary" onClick={this.onAddingCart}>Add to cart</button>
            </div>
        </div>
        )
    }
}

export default RecipeCard;