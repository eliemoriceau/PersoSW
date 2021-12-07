import React, {Component} from 'react'
import {SearchBar} from "../index";
import {Col, Row} from "react-bootstrap-v5";

export default class App extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light px-3 container-fluid mb-4">
                <Row className="justify-content-md-center">
                    <Col>
                        <a className="navbar-brand" href="/">
                            SW Personage</a>
                    </Col>
                    <Col>
                        <SearchBar searchAction={this.props.search}/>
                    </Col>

                </Row>
            </header>
        );
    }
}