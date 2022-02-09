import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import card from '../../asset/image/img3.jpg'
import {Zoom } from "react-awesome-reveal";

export default function SmartModule() {
  return (
    <>
      <section className='mt-3'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='smart_item_content '>
                <h3 className='smart_item_title'>Professional Letters</h3>
                <p className='smart_item_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis, fugiat, quibusdam est ullam itaque accusamus saepe architecto tempore culpa laboriosam praesentium recusandae et labore corrupti, rerum dolorum consequatur vel.
                </p>
                <h3 className='smart_item_title mt-2'>Track Your Results</h3>
                <p className='smart_item_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate tempora laborum quam? Modi ut minima molestias, repellendus minus aperiam ex necessitatibus eos mollitia culpa accusamus nihil distinctio. Odio, recusandae!
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className='smartmodule_img'>
                <Zoom>
                  <Image src={card} className=' disputeimage'></Image>
                </Zoom>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
