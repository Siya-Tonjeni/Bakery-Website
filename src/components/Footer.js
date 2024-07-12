import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return(
        <Navbar bg="secondary" data-bs-theme="secondary" expand="lg">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                <Nav className='me-auto'>
                    <Nav.Link href="#"><FaFacebook/></Nav.Link>
                    <Nav.Link href="#"><FaInstagram/></Nav.Link>
                    <Nav.Link href="#"><FaTwitter/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Footer;