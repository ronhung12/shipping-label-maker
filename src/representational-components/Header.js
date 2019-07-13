import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <header style={HeaderFormat}>
            <Container>
                <h2 style={titleFormat}>
                    Shipping Label Maker
                </h2>
            </Container>
        </header>
    );
};

const HeaderFormat = {
    backgroundColor: 'darkslateblue',
    padding: '30px 0'
};

const titleFormat = {
    color: 'white',
    fontSize: '60px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

export default Header;
