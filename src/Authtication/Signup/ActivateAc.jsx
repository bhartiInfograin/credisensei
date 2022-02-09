import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Step2 from './Step2';
import Footer from '../../Common/Footer';


export default function ActivateAc() {
    return (
        <>
            <AuthHeader />
            <section>
                <Container className='creditreportmain mt-5'>
                    <Row>
                        <Col lg={12}>
                            <div className='creditReport_prgressbar'>
                                <Step2 progress={2} />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className='activate_content '>
                                <h3> Smartcredit Account</h3>
                                <div className='acctivate_msg'>
                                    <h4>Successful connection! Reactivate your Smart Credit account to link your 3 bureau credit report.</h4>
                                </div>
                                <Link to="" > <Button className='activateBtn mt-3' style={{background:"#4b7a7c", border:"none",fontSize:"19px",fontWeight: "bold"}}> ACTIVATE</Button></Link>
                                  
                                  <p className='unlink'>Unlink Smartcredit Account from Credit Sensei
                                  <hr/> 
                                  </p>
                                <p>
                                Need help ?  Call us  (222)999-333
                                Monday - Friday 9AM to 5PM 
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className='mt-4 '>
                            <Link to="/login" className='navmenubutton'> <Button className='signBtn btn-dark mt-3'>Back</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />


        </>
    )
}
