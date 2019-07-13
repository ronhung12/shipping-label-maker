import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export class Progression extends Component {
    render() {
        const progress = this.props.currentStep;

        return (
            <div style={{ marginTop: "20px" }}>
                <ProgressBar
                    animated
                    label={`${progress * 20}%`}
                    now={progress}
                    max="5"
                    progress="ratio"
                />
            </div>
        );
    }
}

export default Progression;
