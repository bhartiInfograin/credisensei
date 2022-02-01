import React from 'react';
import { Container, Row, Col ,Table, Button} from 'react-bootstrap';

export default function Price_Table() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3>Out with the old…in with Credit Sensei</h3>
                        <p>Big credit repair companies are better at deleting dollars from your pocket than negative accounts from your credit report. That’s why we
                            created Credit Sensei.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Lexington law</th>
                                    <th>Lexington law</th>
                                    <th>creditrepair.com</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Button>Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}