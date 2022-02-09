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
                            <h4>Reset Password</h4>
                           
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='mainform  mt-5'>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >OTP</Form.Label>
                                <Form.Control type="number" placeholder="Enter valid Otp" />
                                <Form.Label className="mt-3 fromlabel"> New Passowrd</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Label className="mt-3 fromlabel"> Confirm Passowrd</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Group className="mb-3 fromlabel" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                               
                                <Button className='signBtn btn-dark fromlabel'> <Link to="/login" className='navmenubutton'>Reset</Link> </Button>
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
