import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-white fw-bold'>BrandName</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-white mx-auto">
                        <Nav.Link className='text-white fw-bold' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white fw-bold' href="#product">Product</Nav.Link>
                        <Nav.Link className='text-white fw-bold' href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className='text-white fw-bold' href="#contact">Contact</Nav.Link>
                    </Nav>
                    <div className="nav-contact py-2">
                        <Button className='login'>Login</Button>
                        <Button className='join-us'>Join us <ArrowRight/> </Button>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;