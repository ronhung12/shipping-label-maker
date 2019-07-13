import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class GetShippingOption extends Component {
    render() {
        const { onAction } = this.props;

        return (
                <Container>
                    <h2>Enter the shipping option:</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Shipping:</Form.Label>
                            <Form.Check
                                label="Ground"
                                type="radio"
                                onChange={onAction}
                                id="shippingOption"
                                value="1"
                            />
                            <Form.Check
                                label="Express"
                                type="radio"
                                onChange={onAction}
                                id="shippingOption"
                                value="2"
                            />
                        </Form.Group>
                    </Form>
                </Container>
        );
    }
}

export default GetShippingOption;
