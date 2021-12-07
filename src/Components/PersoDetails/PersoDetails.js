import React, {Component} from "react";
import {Col, Row} from "react-bootstrap-v5";

export default class PersoDetails extends Component {
    render() {
        const personage = this.props.personage
        return (
            <div className={'container'}>
                <Col className={'mx-auto w-50 border border-warning p-3 d-flex flex-column'}>
                    <h4>{personage.name}</h4>
                    <Row>
                        <p><strong>Gender:</strong> {personage.gender}</p>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>Size:</strong> {personage.height} cm</p>
                        </Col>
                        <Col>
                            <p><strong>Mass:</strong> {personage.mass} Kg</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>Hair color:</strong> {personage.hair_color}</p>
                        </Col>
                        <Col>
                            <p><strong>Skin color:</strong> {personage.skin_color}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Created:</strong>
                            <p>{new Date(Date.parse(personage.created)).toLocaleString("fr-FR", {
                                day: '2-digit',
                                month: 'numeric',
                                year: 'numeric'
                            })}</p>
                        </Col>
                        <Col>
                            <strong>Edited:</strong>
                            <p>{new Date(Date.parse(personage.edited)).toLocaleString("fr-FR", {
                                day: '2-digit',
                                month: 'numeric',
                                year: 'numeric'
                            })}</p>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}