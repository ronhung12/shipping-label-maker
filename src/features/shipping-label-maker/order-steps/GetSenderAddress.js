import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class GetSenderAddress extends Component {
    render() {
        const { onAction } = this.props;
        const senderDetails = this.props.wizardContext.from;

        return (
                <Container>
                    <h2>Enter the sender's address:</h2>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                                <Form.Control
                                    placeholder="Enter full name"
                                    id="from"
                                    field="name"
                                    type="text"
                                    onChange={onAction}
                                    value={senderDetails.name}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Street Address:</Form.Label>
                                <Form.Control
                                    placeholder="Enter current street address"
                                    id="from"
                                    field="street"
                                    type="text"
                                    onChange={onAction}
                                    value={senderDetails.street}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicCity">
                            <Form.Label>City:</Form.Label>
                                <Form.Control
                                    placeholder="Enter current city"
                                    id="from"
                                    field="city"
                                    type="text"
                                    onChange={onAction}
                                    value={senderDetails.city}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicState">
                            <Form.Label>State:</Form.Label>
                                <Form.Control
                                    placeholder="Enter current state"
                                    id="from"
                                    field="state"
                                    type="text"
                                    onChange={onAction}
                                    value={senderDetails.state}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicZipCode">
                                <Form.Label>Zip:</Form.Label>
                                <Form.Control
                                    placeholder="Enter current zip code"
                                    id="from"
                                    field="zip"
                                    type="text"
                                    onChange={onAction}
                                    value={senderDetails.zip}
                                />
                        </Form.Group>
                    </Form>
                </Container>
        );
    }
}
export default GetSenderAddress;
