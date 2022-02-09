import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import Step2 from './Step2';
import {Link} from 'react-router-dom'
// import { Slide } from "react-awesome-reveal";



export default function Carosel() {
    return (
        <>
            <AuthHeader  text={"Already a member"} action={"Log In"} url={"/login"}/>
       
            <Container >
                <Row>
                    <Col lg={4} className=''>
              
                        <div className="singupform">
                            <h3>Creting your account only takes a few seconds.</h3>
                            <p>Let's start with some basic info.</p>
                        </div>         
                 
                    </Col>
                    <Col lg={8}>
                        <div className='sigup_form'>
                            < div className='mb-5'>
                                <Step2 progress={0} style={{}} />
                            </div>
                            <Form.Label className="mt-3">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                            <Form.Label className="mt-3" >Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                            <Form.Label className="mt-3">Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" />
                            <Form.Label className="mt-3">Passowrd</Form.Label>
                            <Form.Control type="password" placeholder="Your Password" />
                            <Form.Check className="mt-3"  label="I agree to the Term of Use  and Private Policy"/> 
                            <Link to = "/addProfile"  className='navmenubutton'> <Button className='signBtn btn-dark mt-3'>Next </Button></Link> 

                        </div>


                    </Col>
                </Row>
            </Container>

       
                    
          
          
            <Footer />
        </>
    )
}