import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import UserHeader from '../Common/UserHeader';
import Graph from '../UserHome/Graph';
import Graphimg from '../../asset/image/Group 62.png'
import Footer from '../../Common/Footer'

export default function History() {
    return (
        <>
            <UserHeader />
            <Graph />
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='histroy_title mt-5'>
                            <h1 >History</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='history_sec2_titile'>
                            <span>TRANSUNION</span>
                            <span>EXPERIAN</span>
                            <span>EQUIFAX</span>
                        </div>
                    </Col>
                    <Col lg={12} className="bg-red">
                        <div className='history_sec2_img mt-2'>
                            <Image src={Graphimg} className='graphimg' />
                            <div className='graph_content'>
                                <p>Before we can track your scores we need to review your reports!</p>
                                <Button style={{ background: "#4b7a7c", border: "none" }} >LINK MY REPORTS</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='history_sec3_title mt-5'>
                            <h1> Reports</h1>
                        </div>
                        <div className="history_sec3_item"> 
                        <p>Date </p>
                        <p>Transunion</p>
                        <p>Experian</p>
                        <p>Equifax</p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
