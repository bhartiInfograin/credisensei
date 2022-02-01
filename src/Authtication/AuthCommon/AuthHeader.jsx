import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import logo from '../../asset/image/creditsensei.png';

export default function AuthHeader() {
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <div className='navbarBrand'>
                            <img src={logo} className="d-inline-block align-top headerlogo " />

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Already a member ? <a href="#login">Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
