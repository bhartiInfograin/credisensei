import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function CreditScore() {
    return (
        <>
            <Container fluid >
                <Row>
                    <Col lg={12}  >
                        <div className='creditscore_main mt-5'>
                            <h1 className='creditscore_heading' >Credit Score</h1>
                            <p className='creditscore_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem dicta fugit corrupti</p>
                        </div>
                    </Col>
                </Row>
              
                <Row   style={{background:"#d3d3d252", padding:"78px" }}>
                    <Col lg={4} >
   
                        <Card className="creditscore_card" style={{background:"#a8d8da",border:"none",borderRadius:"29px"  }} >
                            <Card.Body className=''>
                                <Card.Title> <div className='credirscore_card_count'>1</div> </Card.Title>
                                <Card.Title>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text className='card_text' >
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} >
                        <Card className="creditscore_card" style={{background:"#a8d8da",border:"none",borderRadius:"29px"  }}>
                            <Card.Body className=''>
                                <Card.Title> <div className='credirscore_card_count'>2</div> </Card.Title>
                                <Card.Title>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text  className='card_text'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} >
                        <Card className="creditscore_card" style={{background:"#a8d8da",border:"none",borderRadius:"29px"  }}>
                            <Card.Body className=''>
                                <Card.Title> <div className='credirscore_card_count'>3</div> </Card.Title>
                                <Card.Title>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text  className='card_text'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            
               

            </Container>
        </>
    )

}
