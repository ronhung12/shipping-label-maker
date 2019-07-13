import React from "react";
import { Container, Button } from "react-bootstrap";

const ButtonFormat = {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center'
};
const Navigation = props => (
    <Container>
        <div style={ButtonFormat}>
            {props.currentStep < 2 ? null : (
                <Button variant="primary" onClick={props.previousStep}>
                    Previous
                </Button>
            )}
            <Button variant="primary" onClick={props.nextStep}>
                Next
            </Button>
        </div>
    </Container>
);

export default Navigation;
