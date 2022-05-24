import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
        <Navbar className='fullnav' sticky='top' collapseOnSelect expand="lg"   variant="dark">
    <Container>
        <Navbar.Brand className='text-white fw-bold fs-3'>Computer Manufacture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link className='text-white menu fw-bold fs-6'>Blogs</Nav.Link>
            <Nav.Link className='text-white menu fw-bold fs-6'>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </>
    );
};

export default Header;