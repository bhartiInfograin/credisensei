import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import People from "../asset/image/people.jpg"
import { FaCheckCircle } from 'react-icons/fa';
import SmartModule from '../Component/Home/SmartModule';
import UnlimitedModule from '../Component/Home/UnlimitedModule';
import CreditScore from '../Component/Home/CreditScore';
import ContactUs from '../Component/Home/ContactUs';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <Header />
            <section className='homeheader' >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='homesectionImg'>
                                <Slide>
                                    <Image className='homeImg' src={People} />
                                </Slide>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Fade duration={2000}>
                                <div className='homecontent'>
                                    <h2 className='hometitle'>Repair all 3 Credit bureaus.<br /> Increase your Credit Score.<br /> Easily do it yourself</h2>
                                    <div className='homeline' ></div>
                                    <Link to="/createAccount" className='navmenubutton'>   <button className='btn-dark homebutton' >GET STARTED</button></Link>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
            <UnlimitedModule />
            <CreditScore />
            <SmartModule />
            <section className='module mt-3' style={{ background: "#d3d3d252" }}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='modul_header'>
                                <h3 className='modul_title'>Dispute any account on all 3 bureaus</h3>
                                <p className='modul_text'>Credit Sensei can help you delete these accounts from Experian, Equifax, and TransUnion:</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                        <div className='modul_content'>
                        <ul className='account_feature'>
                            <li ><FaCheckCircle className='modul_check'/>Late Payments</li>
                            <li><FaCheckCircle className='modul_check' />Repossessions </li>
                            <li><FaCheckCircle className='modul_check' />Charge Offs</li>
                            <li><FaCheckCircle className='modul_check' />Foreclosures</li>
                            <li><FaCheckCircle className='modul_check' />Collections </li>
                            <li><FaCheckCircle className='modul_check' />Judgments</li>
                            <li><FaCheckCircle className='modul_check' />Inquiries</li>
                            <li><FaCheckCircle className='modul_check' />Bankruptcy</li>
                        </ul>
                        <p className='modul_text'> No need to create an account with each credit bureau. Credit Sensei brings all three <br /> credit bureaus to you.</p>
                    </div>
                        </Col>
                    </Row>
                   


                </Container>
            </section>
            <ContactUs />
            <Footer />
        </>
    )
}
