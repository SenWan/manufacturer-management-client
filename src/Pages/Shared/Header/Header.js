import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    }
    return (
        <>
        <Navbar className='fullnav' sticky='top' collapseOnSelect expand="lg"   variant="dark">
    <Container>
        <Navbar.Brand as={Link} to='/' className='text-white fw-bold fs-3 '>Computer Manufacture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link as={Link} to='blogs' className='text-white menu fw-bold fs-6'>Blogs</Nav.Link>
            {
                user?
                <button onClick={handleSingOut} className='btn text-white fw-bold fs-6 menu'>Signout</button>
                :
                <Nav.Link className='text-white fw-bold fs-6 menu' eventKey={2} as={Link} to="login">
                    Login
                </Nav.Link>
            }
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </>
    );
};

export default Header;