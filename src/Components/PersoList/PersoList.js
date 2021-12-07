import React, {Component} from "react";
import PersoCard from "../PersoCard/PersoCard";
import PropTypes from 'prop-types'
import {Button} from "react-bootstrap-v5";

export default class PersoList extends Component{
    displayPersonageCard = () => {
        return this.props.peoples.map((p, index) => {
            return <PersoCard name={p.name} updateSelectedIndex={() => this.props.updateSelectedIndex(index)} key={p.name}/>
        })
    }
    render() {
        return(
            <div className={'container'}>
                {
                    this.displayPersonageCard()
                }
                <div className={'d-flex justify-content-evenly'}>
                    {this.props.previous && <Button onClick={() => this.props.changePage(this.props.previous)}>Previous</Button>}
                    {this.props.next && <Button onClick={() => this.props.changePage(this.props.next)}>next</Button>}
                </div>
            </div>
        )
    }

}

PersoList.prototypes = {
    peoples: PropTypes.object,
    className: PropTypes.string,

}