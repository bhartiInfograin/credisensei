import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import AuthFooter from '../AuthCommon/AuthFooter'
import Step2 from './Step2';



export default function Carosel() {
    return (
        <>
            <AuthHeader />

            <Container>
                <Row>
                    <Col lg={4}>

                        <div className="singupform mt-5">
                            <h1>Creting your account only takes a few seconds.</h1>
                            <p>Let's start with some basic info.</p>
                        </div>
                    </Col>
                    <Col lg={8}>


                        <div className='sigup_form mt-5'>

                            < div className='mb-5'>
                                <Step2 />
                            </div>
                            <Form.Label className="mt-3">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                            <Form.Label className="mt-3" >Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                            <Form.Label className="mt-3">Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" />
                            <Form.Label className="mt-3">Passowrd</Form.Label>
                            <Form.Control type="password" placeholder="Your Password" />
                            <Form.Check className="mt-3" /> I agree to the Term of Use  and Private Policy
                            <Button className='signBtn btn-dark mt-3'>Next</Button>


                        </div>


                    </Col>
                </Row>
            </Container>
            <div className='mt-5'></div>
            <Footer />
        </>
    )
}