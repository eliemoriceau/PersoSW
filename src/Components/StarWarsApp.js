import React, {Component} from "react";
import {Header, PersoList} from "./index";
import {getAllPeople, getByUrl, getPeopleByName} from "../actions/requestAPI";
import PersoDetails from "./PersoDetails/PersoDetails";
import {Col, Row} from "react-bootstrap-v5";

export default class StarWarsApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personages: null,
            selectedIndex: null,
            selectedPersonage: null,
            next: null,
            previous: null,
        }
    }

    componentDidMount() {
        if (!this.state.personages) {
            getAllPeople().then(res => {
                this.updatePersonage(res.results)
                this.updateNext(res.next)
                this.updatePrevious(res.previous)
            })
        }
    }

    updatePersonage = personages => {
        this.setState({personages})
    }

    updateNext = next => {
        this.setState({next})
    }

    updatePrevious = previous => {
        this.setState({previous})
    }

    updateSelectedIndex = (index) => {
        console.log(index)
        this.setState({selectedIndex: index})
        this.updateSelectedPersonages(this.state.personages[index])
    }

    updateSelectedPersonages = (info) => {
        this.setState({selectedPersonage: info})
    }

    changePage = (url) => {
        getByUrl(url).then(res => {
            this.updatePersonage(res.results)
            this.updateNext(res.next)
            this.updatePrevious(res.previous)
        })
    }

    handleSearch = (value) => {
        console.log({value})
        getPeopleByName(value).then(res => {
            console.log({res})

            this.updatePersonage(res.results)
            this.updateNext(res.next)
            this.updatePrevious(res.previous)
        })
    }

    render() {
        return (
            <Col className={''}>
                <Row>
                    <Header search={this.handleSearch}/>
                </Row>
                <Row>
                    <Col>
                        {this.state.personages &&
                        <PersoList next={this.state.next} previous={this.state.previous} changePage={this.changePage}
                                   peoples={this.state.personages} updateSelectedIndex={this.updateSelectedIndex}/>}
                    </Col>
                    {this.state.selectedPersonage && (
                        <Col className={'d-flex justify-content-center'}>
                            <PersoDetails personage={this.state.selectedPersonage}/>
                        </Col>
                    )}
                </Row>

            </Col>
        )
    }
}