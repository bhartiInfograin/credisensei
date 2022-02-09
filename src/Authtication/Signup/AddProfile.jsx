import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import AuthFooter from '../AuthCommon/AuthFooter'
import Step2 from './Step2';
import {Link} from 'react-router-dom'




export default function Carosel() {
    return (
        <>
            <AuthHeader  text={"Already a member"} action={"Log In"}  url={"/login"}/>
            <Container >
                <Row>
                    <Col lg={4}>
                        <div className="singupform mt-5">
                            <h1>Great job,
                                Username!</h1>
                            <p>You're almost done.</p>
                            <p>What contact info would you like the credit bureaus to use?</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='sigup_form mt-5'>
                            < div className='mb-5'>
                                <Step2  progress={1} />
                            </div>
                            <Form.Label className="mt-3">Address</Form.Label>
                            <Form.Control type="text" placeholder="Your Address" />
                            <Form.Label className="mt-3" >City</Form.Label>
                            <Form.Control type="text" placeholder="Your City" />
                            <Form.Label className="mt-3">State</Form.Label>
                            <Form.Control type="email" placeholder="Your State" />
                            <Form.Label className="mt-3">Phone Number</Form.Label>
                            <Form.Control type="password" placeholder="Your phone number" />
                            <Link to = "/creditreport"  className='navmenubutton'><Button className='signBtn btn-dark mt-3'> Next  </Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='mt-5'></div>
            <Footer />
        </>
    )
}