import React, { Component } from "react";
import {Card, ListGroup, Container, Button} from "react-bootstrap";

export default class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: this.props.wizardContext,
            shippingOption: " ",
            shippingTotal: 0
        };

        this.confirm = this.confirm.bind(this);
    }

    componentDidMount() {
        this.getShippingOption();
        this.getShippingCost();
    }

    getShippingOption = () => {
        const option =
            this.state.wizardContext.shippingOption === "1" ? "Ground" : "Express";

        this.setState({ shippingOption: option });
    };

    getShippingCost = () => {
        const { wizardContext } = this.state;
        const weight = wizardContext.weight;
        const shippingOption = wizardContext.shippingOption;

        const shippingRate = 0.4,
            shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

        const shippingTotal = shippingCost.toFixed(2);
        this.setState({ shippingTotal });
    };

    confirm() {
        this.props.onAction(this.state);
    }

    render() {
        const { wizardContext } = this.state;
        return (
            <Container>
                <div style={ContainerFormat}>
                    <Container>
                        <Card>
                            <Card.Header>From:</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{wizardContext.from.name}</ListGroup.Item>
                                <ListGroup.Item>{wizardContext.from.street}</ListGroup.Item>
                                <ListGroup.Item>{wizardContext.to.city}, {wizardContext.to.state} {wizardContext.to.zip} </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Header>To:</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{wizardContext.to.name}</ListGroup.Item>
                                <ListGroup.Item>{wizardContext.to.street}</ListGroup.Item>
                                <ListGroup.Item>{wizardContext.to.city}, {wizardContext.to.state} {wizardContext.to.zip} </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <br/>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>Weight: {wizardContext.weight} lbs</ListGroup.Item>
                                <ListGroup.Item>Shipping Method: {this.state.shippingOption}</ListGroup.Item>
                                <ListGroup.Item style={{ fontWeight: "bold" }}>Shipping Total: ${this.state.shippingTotal}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Container>
                </div>
                <div style={ButtonFormat}>
                    <Button primary onClick={this.confirm}>
                        Confirm Info
                    </Button>
                </div>
            </Container>
        );
    }
}

const ContainerFormat = {
    border: 'solid',
    borderWidth: '0.5px',
    borderColor: 'grey',
    borderRadius: '5px',
    padding: '15px'
};

const ButtonFormat = {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center'
};
