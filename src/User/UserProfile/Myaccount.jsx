import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import UserHeader from '../Common/UserHeader';
import ProfileNav from './Common/ProfileNav';


export default function Myaccount() {
    return (
        <>

            <UserHeader />
            <ProfileNav
                title="Myaccount"
                menu1="Profile"
                menu2="My Docs"
                menu3="Credit Report"
                url1="myaccount"
                url2="mydocs"
                url3="usercreditreport" />

            <Container>
                <Row>
                    <Col lg={6}>
                        <div className=' mt-3'>
                            <h5>Personal Details</h5>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>FIRST NAME</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>LAST NAME</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>EMAIL (USERNAME)</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>PHONE NUMBER</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={12}>
                                <div className='mt-3'>
                                    <h5>Security</h5>
                                    <Form.Label className="mt-3 fromlabel">CURRENT PASSWORD</Form.Label>
                                    <Form.Control className="" type="password" placeholder="your current password" />
                                    <Form.Label className="mt-3 fromlabel">NEW PASSWORD</Form.Label>
                                    <Form.Control placeholder="Enter your new password" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <div className='mt-3'>
                                    <h5>Identity</h5>
                                    <Form.Label className="mt-3 fromlabel">ADDITIONAL FIRST NAME</Form.Label>
                                    <Form.Control className="" type="password" placeholder="your current password" />


                                    <Form.Label className="mt-3 fromlabel">ADDITIONAL LAST NAME</Form.Label>
                                    <Form.Control placeholder="Enter your new password" />


                                    <Button >Add</Button>


                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <Footer />

        </>
    )
}
