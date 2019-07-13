import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class GetReceiverAddress extends Component {
    render() {
        const { onAction } = this.props;
        const receiverDetails = this.props.wizardContext.to;

        return (
        <Container>
            <h2>Enter the recipient's address:</h2>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        placeholder="Enter full name"
                        id="from"
                        field="name"
                        type="text"
                        onChange={onAction}
                        value={receiverDetails.name}
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
                        value={receiverDetails.street}
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
                        value={receiverDetails.city}
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
                        value={receiverDetails.state}
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
                        value={receiverDetails.zip}
                    />
                </Form.Group>
            </Form>
        </Container>
        );
    }
}
export default GetReceiverAddress;

