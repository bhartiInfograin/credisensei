import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCalendarDay, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import logo from '../asset/image/creditsensei.png';
import { Slide } from "react-awesome-reveal";
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section style={{ background: "#d3d3d252" }} className='mt-5' >
                <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="mt-3">
                                <Link to = "/" className='navmenubutton'> <Image className='footer_logo ' src={logo} /></Link>
                                    <p className='footer_content '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                                        error distinctio. Soluta blanditiis reprehenderit est cumque corrupti deleniti
                                        sint cupiditate ab consequatur,
                                        magnam ex, nihil similique nulla expedita? Possimus, numquam?
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} className='mt-3'>
                                <div className="footercol2 mt-3 ">
                                    <h6 className='companyHeading '>Company</h6>
                                    <p><FaCalendarDay className=' footericon' />Mon - Fri 9am to 5pm PST</p>
                                    <p><FaEnvelopeOpen className='footericon' />support@creditsensei.com</p>
                                    <p><FaPhoneAlt className='footericon' />(222) 999 - 3333</p>
                                </div>
                            </Col>
                            <Col lg={4} className='mt-3'>
                                <div className="footerProduct mt-3  ">
                                    <h6 className='companyHeading'>Product</h6>
                                    <ul className='footercompanylist'>
                                        <li>Home</li>
                                        <li>How It Work</li>
                                        <li>Pricing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
         

                    <Slide>
                        <Row>
                            <Col lg={12}>
                                <ul className='socialicon'>
                                    <li> <FaFacebook /></li>
                                    <li>  <FaInstagram /></li>
                                    <li>  <FaTwitter /></li>
                                    <li>  <FaYoutube /></li>
                                </ul>
                            </Col>
                            <Col lg={12}>
                                <ul className='socialtext'>
                                    <li><Link to="/termscondition" >Terms Of Use</Link></li>
                                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                    <li>© 2020 Credit Senei, All rights reserved.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Slide>
                </Container>
            </section>

        </>
    )
}
