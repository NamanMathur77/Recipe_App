import React from 'react';
import SearchBar from './SearchBar'
import recipe_api from '../api/RecipeCall'
import RecipeList from './RecipeList'

class App extends React.Component{

    state = {
        recipes: []
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
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <RecipeList recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default App;