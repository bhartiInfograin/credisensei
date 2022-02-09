import React from 'react'
import { Container, Row, Col,Navbar,Nav } from 'react-bootstrap';
export default function ProfileNav(props) {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav style={{ maxHeight: '100px' }} >
                            <Nav.Link href={props.url1}>{props.menu1}</Nav.Link>
                            <Nav.Link href={props.url2}>{props.menu2}</Nav.Link>
                            <Nav.Link href={props.url3} >
                            {props.menu3}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
