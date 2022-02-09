import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaStreetView, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import { Zoom, Roll } from "react-awesome-reveal";

export default function ContactUs() {
    return (
        <>
            <section style={{ background: "#a8d8da" }} className=' mt-5'>
                <Zoom duration={2000}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h3 className='contactus_heading'>Contact Us</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className='contact_box1'>
                                    <h5 className='contact_box1_heading'>YOU CAN FIND US HERE</h5>
                                    <div className='contact_box1_content mt-3'>
                                        <p className="mb-3"> <FaStreetView className='steetview' /> Street address</p>
                                        <p className="mb-3"><FaEnvelopeOpen className='mail' />support@creditsensei.com</p>
                                        <p className="mb-3"><FaPhoneAlt className='phone' />(222) 999 - 3333</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='contactus_form'>
                                    <Form.Control type="text" placeholder="Your Name" className="mb-3" />
                                    <Form.Control type="text" placeholder="Your Email" className="mb-3" />
                                    <Form.Control type="text" placeholder="Your Number" className="mb-3" />
                                    <Form.Control as="textarea" rows={3} className="mb-3" placeholder="Your Message" />
                                    <Button className=' mb-3 btn-dark '>SEND MESSAGE</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Zoom>
            </section>


        </>
    )
}
