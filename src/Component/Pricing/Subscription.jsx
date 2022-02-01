import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

export default function Subscription() {
  return (
      <>
      <Container className='mt-5'>
        <Row>
          <Col lg={12}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <div>
             <h3>Don’t have an account? Select one from below. No contract. Cancel anytime.</h3>
            </div> 
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
              <div>
                <h4>smartcredit  BASIC</h4>
                <hr></hr>
                <p> $88 /mo</p>
                <p>CANCLEANYTIME</p>
                <hr/>
                <ul>
                  <li>Unlimited Credit Sensei Disutes</li>
                  <li>Monthlt 3 Bureaos Reports & Scores</li>
                </ul>
                <h3>smartcredit</h3>
                <ul>
                  <li>Identity Theft Insurance ($1m)</li>
                  <li>Credit Monitoring & Alerts (TU)</li>
                </ul>
                <p>Includes SmartCredit Money Manager with 2 monthly Transunion Report & Score updates in SmartCredit.</p>
              </div>
          </Col>
          <Col lg={6}>
          <div>
                <h4>smartcredit  PREMIUM</h4>
                <hr></hr>
                <p> $99 /mo</p>
                <p>CANCLEANYTIME</p>
                <hr/>
                <ul>
                  <li>Unlimited Credit Sensei Disutes</li>
                  <li>Monthlt 3 Bureaos Reports & Scores</li>
                </ul>
                <h3>smartcredit</h3>
                <ul>
                  <li>Identity Theft Insurance ($1m)</li>
                  <li>Credit Monitoring & Alerts (TU)</li>
                </ul>
                <p>Includes SmartCredit Money Manager with 2 monthly Transunion Report & Score updates in SmartCredit.</p>
              </div>
            
            </Col>
        </Row>
      </Container>
      </>
  )
}
