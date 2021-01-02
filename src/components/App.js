import React from 'react';
import SearchBar from './SearchBar'
import recipe_api from '../api/RecipeCall'
import RecipeList from './RecipeList'
import Cart from './Cart'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{

    state = {
        recipes: [],
        added_recipes: []
    }

    addingToCart = (item)=>{
            this.setState({
                added_recipes: [...this.state.added_recipes, item]
            })

        console.log(this.state.added_recipes)

    }

    onTermSubmit = async(term) => {
        const response = await recipe_api.get('',{
            params: {
                q: term
            }
        })
        this.setState({
            recipes: response.data.hits
        })

        console.log(this.state.recipes)
    }


    render(){
        return (
            <div>
            <Router>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <Switch>
                <Route path="/cart" exact component={() => <Cart list={this.state.added_recipes}/>} />
                <Route path="/" exact component={() => <RecipeList recipes={this.state.recipes} addingToCart={this.addingToCart}/>}/>
            </Switch>

            </Router>
            </div>
        )
    }
}

export default App;