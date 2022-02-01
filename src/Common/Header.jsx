import React from 'react';
import logo from '../asset/image/creditsensei.png';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function Header() {
    return (

        <>
            <Navbar className='navbarcontainer' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                <Navbar.Brand href="#home" >
                    <div className='navbarBrand'>
                    <img src={logo} className="d-inline-block align-top headerlogo " />
                     {/* <p> CreditSensei</p> */}
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                                <Nav.Link className='navlink'><Link  to="/" >HOME</Link></Nav.Link>
                                <Nav.Link className='navlink'><Link to="/how_it_work">HOW IT WORKS</Link></Nav.Link>
                                <Nav.Link className='navlink'><Link  to="/princing">PRICING</Link></Nav.Link>
                                <Button className='loginBtn btn-dark '>LOGIN</Button>
                                <Button className='signupBtn btn-dark'><Link to = "/createAccount">SIGNUP</Link> </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
        </>
    )

}
