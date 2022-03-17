
import React from "react";
import { Container, Navbar } from "react-bootstrap";


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
        ЭИОС «ЛГПУ»
        </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

export default NavBar;