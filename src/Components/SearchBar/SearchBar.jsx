import React, {Component} from "react";

export default class SearchBar extends Component {

    searchAction = (value) => {
        this.props.searchAction(value)
    }

    render() {
        return (
            <input name='query' className='flex-fill form-control mr-4 ' placeholder="Search..." onChange={event => {
                this.searchAction(event.target.value)
            }}/>
        )
    }
}