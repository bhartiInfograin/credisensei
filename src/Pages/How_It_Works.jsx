import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Work from '../Component/How_It_Work/Work';
import Curve from '../asset/image/curve-1 1.png';
import img2_1 from '../asset/image/img2 1.png';
import Curve2 from '../asset/image/curve-2 1.png';
import img1 from '../asset/image/img1 1.png';
import img3 from '../asset/image/img3 1.png';
import Header from '../Common/Header';
import Footer from '../Common/Footer'

export default function How_It_Works() {
  return (
    <>
    <Header/>
      <Container>
        <Row>
          <Col lg={12}>
            <div className='how_it_work_head'>
              <h3> Seriously, you can do this.</h3>
              <p className='text-center mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo excepturi fuga aspernatur nostrum exercitationem
                magni, dicta labore nam consequatur odit molestias ducimus
                iure ipsa,
                accusantium eum nesciunt commodi repudiandae alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo excepturi fuga aspernatur nostrum exercitationem
                magni, dicta labore nam consequatur odit molestias ducimus
                iure ipsa,
                accusantium eum nesciunt commodi repudiandae alias.
              </p>
            </div>
          </Col>
        </Row>
        <Work image={img1} count={1} title={"Link your credit report"} />
        <Row>
          <Col lg={12}>
            <Image src={Curve} />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className='work'>
              <div className='work_count'>2</div>
              <h3 className='work_heading mt-3'>Disputes that work</h3>
              <p className='work_content mt-2'>Credit Sensei automatically imports and analyzes your 3 bureau credit report, finds negative
                accounts, and prepares an aggressive dispute strategy.
                Credit Sensei never puts an inquiry on your credit report</p>
            </div>
          </Col>
          <Col lg={6}>
            <Image src={img2_1} style={{ height: "auto", width: "100%" }} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Image src={Curve2} />
          </Col>
        </Row>
        <Work image={img3} count={3} title={"Track your results"} />
        <div className='mt-5'>
        </div>
       
      </Container>
      <Footer/>
    </>
  )
}





