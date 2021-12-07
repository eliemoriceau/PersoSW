import React, {Component} from "react";

export default class SearchBar extends Component {

    searchAction = (value) => {
        this.props.searchAction(value)
    }

    render() {
        return (
            <input name='query' className='flex-fill form-control border-warning mr-4 border-shadow-yellow' placeholder="Search..." onChange={event => {
                this.searchAction(event.target.value)
            }}/>
        )
    }
}