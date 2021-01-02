import React from 'react';
import { Link, withRouter } from "react-router-dom";

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
                <form onSubmit={this.onFormSubmit} className="input-group mb-3" action="/">
                    <Link className="navbar-brand" to="/">
                        <img src="https://banner2.cleanpng.com/20180511/qkw/kisspng-monumental-restaurant-logo-cafe-5af54f48cfbed6.7759304615260260568509.jpg" width="50" height="30" alt=""/>
                    </Link>
                    <input className="form-control" type="text" placeholder="Search Recipes Here" aria-label="default input example" value={this.context.term} onChange={this.onValueChange}></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                    <div className="input-group-append">
                        <Link class="nav-link" to="/cart">Cart</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);