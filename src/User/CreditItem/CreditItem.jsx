import React from 'react';
import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';

import UserHeader from '../Common/UserHeader';
import { FaSlidersH } from 'react-icons/fa';



export default function CreditItem() {
  return (
    <>
      <UserHeader />
      <Container>
        <Row>
          <Col lg={12}>
            <div className='creditItems_sectionContent mt-5'>
              <ul className="nav nav-tabs ml-auto ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" >Transunion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Experian</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Equifax</a>
                </li>
              </ul>
              <Button style={{ background: "#4b7a7c", border: "none" }}>CREATE TRANSUNION DISPUTE</Button>

            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={2} >
            <div className='filters'>
              <p>Filters </p>
              <p><FaSlidersH /></p>
            </div>
            <div className='accountStatus'>
              <p>Account Status</p>
              <ul>
                <li>
                <Form.Check   label="Positive"/>
                </li>
                <li>
                  <Form.Check label="Negative" />
                </li>
                <li>
                  <Form.Check label="Deleted"/>
                </li>
                <li>
                  <Form.Check label="Repaired" />
                </li>
                <li>
                  <Form.Check  label="All" />
                </li>
              </ul>
            </div>

            <div className='Dispute_Status'>
              <p>Dispute Status</p>
              <ul>
                <li>
                  <Form.Check  label="N/A" />
                </li>
                <li>
                  <Form.Check   label="Suggested"/>
                </li>
                <li>
                  <Form.Check  label="Created" />
                </li>
                <li>
                  <Form.Check  label="Sent" />
                </li>
                <li>
                  <Form.Check  label="Completed"  />
                </li>
                <li>
                  <Form.Check  label="All" />
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={10}>

            <Accordion className='mt-5'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ACCOUNTS <span className='accordianspan'>0</span></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>PUBLIC RECORDS <span className='accordianspan'>0</span></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>INQUIRIES <span className='accordianspan'>0</span></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

    </>
  )
}
