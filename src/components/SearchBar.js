import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit = (event)=>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    onValueChange = (event)=>{
        this.setState({
            term: event.target.value
        })
    }


    render(){
        return (
            <div className = "container">
                <form onSubmit={this.onFormSubmit} className="input-group mb-3">
                    <input className="form-control" type="text" placeholder="Search Recipes Here" aria-label="default input example" value={this.context.term} onChange={this.onValueChange}></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;