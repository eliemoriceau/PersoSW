import React, {Component} from "react";
import PropTypes from 'prop-types'


export default class PersoCard extends Component{
    render() {
        return(
                <div onClick={() => this.props.updateSelectedIndex()} className={"border border-warning bg-light container mb-2 w-50 hover-shadow hover-scale"} >
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.name}</h5>
                    </div>
                </div>
        )
    }
}

PersoCard.prototypes = {
    name: PropTypes.string,
    changeSelectedIndex: PropTypes.func
}
