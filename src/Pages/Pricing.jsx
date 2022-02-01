import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Bureaus from '../asset/image/bureaus 2.png';
import Table from '../Component/Pricing/Table';
import Subscription from '../Component/Pricing/Subscription'
import Header from '../Common/Header';
import Footer from "../Common/Footer"

export default function Pricing() {
  return (
    <>
    <Header/>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='pricing_img'>
              <Image src={Bureaus} />
            </div>

          </Col>
          <Col lg={6}>
            <div>
              <h3>The most powerful credit repair
                software ever created, is free.</h3>
              <p>Only pay for a 3 credit bureau subscription and
                postage for your dispute letters.</p>
            </div>

          </Col>
        </Row>
        <Table />
        <Subscription />
      </Container>
      <Footer/>
    </>
  )
}
