import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class GetWeight extends Component {
    render() {
        const { onAction } = this.props;
        const { weight } = this.props.wizardContext;

        return (
                <Container>
                    <h2>Enter the weight:</h2>
                    <Form>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            placeholder="Enter weight in lbs"
                            id="weight"
                            type="text"
                            onChange={onAction}
                            value={weight}
                        />
                    </Form>
                </Container>
        );
    }
}

export default GetWeight;
