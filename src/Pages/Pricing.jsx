import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Bureaus from '../asset/image/bureaus 2.png';
import Table from '../Component/Pricing/Table';
import Subscription from '../Component/Pricing/Subscription'
import Header from '../Common/Header';
import Footer from "../Common/Footer";
import { Zoom, Slide } from "react-awesome-reveal";


export default function Pricing() {
  return (
    <>
      <Header />
      <div className='pricing_hero'>
        <Container >
          <Row>
            <Col lg={12} duration={1000} >
              <Zoom>
              <div className='pricing_hero_content'>
                <h1 >Lorem ipsum dolor sit</h1>
                <p>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam neque
                  optio cumque vitae similique magnam ducimus. Quas nam aut pariatur, exercitationem
                  quos perspiciatis in nulla id quidem, inventore cum similique! ipsum dolor sit,
                  amet consectetur adipisicing elit. Illum corrupti repellat ea sapiente in ipsam
                  ad, blanditiis aspernatur! Fugiat temporibus totam rem ab numquam debitis
                  dolorem tempore alias culpa modi?</p>
              </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>


      <Container>
        <section className='mt-3'>
          <Row >
            <Col lg={6}>
              <div className='pricing_img'>
                <Image className='letterImg' src={Bureaus}  />
              </div>
            </Col>
            <Col lg={6}>
              <Zoom>
                <div className='pricing_content'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                  <p>Only pay for a 3 credit bureau subscription and
                    postage for your dispute letters.</p>
                </div>
              </Zoom>
            </Col>
          </Row>
        </section>

      </Container>
      <Subscription />
        <Table />

      <Footer />
    </>
  )
}
