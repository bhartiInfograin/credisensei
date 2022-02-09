import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Forgotpwd() {
    return (
        <>
            <AuthHeader text={"Don’t have an account?"} action={"Signup"} url={"/createAccount"} />

            <Container className='mt-3'>
                <Row>
                    <Col lg={4} className='mt-5'>

                        <div className="singupform">
                            <h4>Forgot Password</h4>
                          
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='mainform  mt-5'>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                        
                                <Button className='signBtn mt-4 btn-dark '> <Link to="/resetpassword" className='navmenubutton'>Send Otp</Link> </Button>
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

