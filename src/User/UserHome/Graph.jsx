import React from 'react';
import Score from '../../asset/image/score.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function Graph() {
  return (
      <>
       <Container >
        <Row>
          <Col lg={12}>
            <div className='graph'>
              <div className='transunion' >
                <h1> TRANSUNION </h1>
                <Image src={Score} />
              </div>
              <div className='experian'>
                <h1> EXPERIAN </h1>
                <p>Before we can track your scores we need to review your reports!</p>
                <Button style={{ background: "#4b7a7c", border: "none" }} >ADD 3 BUREAU REPORT</Button>
              </div>
              <div className='equifax'>
                <h1> EQUIFAX </h1>
                <Image src={Score} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </>
  )
}
