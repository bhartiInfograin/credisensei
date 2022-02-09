import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Login() {

    return (
        <>
            <AuthHeader text={"Don’t have an account?"} action={"Signup"} url={"/createAccount"} />

            <Container className='mt-3'>
                <Row>
                    <Col lg={4} className='mt-5'>

                        <div className="singupform">
                            <h4>Credit Repair used to be hard</h4>
                            <p>We made it easy</p>
                            <h1>You Got This!</h1>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='mainform  mt-5'>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                                <Form.Label className="mt-3 fromlabel">Passowrd</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Group className="mb-3 fromlabel" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Label className="fromlabel"><Link to="/forgotpwd" className='forgotpwd'>Forgot Your Password ?</Link></Form.Label>
                                <Link to="/useHome" className='navmenubutton'><Button className='signBtn btn-dark fromlabel'> Login </Button></Link> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='mt-5'></div>
            <Footer />
        </>
    )
}
