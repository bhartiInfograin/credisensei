import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
// import img1 from '../../asset/image/img1 1.png'

export default function Work(props) {
    return (
        <>
            <Row>
                <Col lg={6}>
                    <Image src={props.image} style={{height:"auto",width:"100%"}} />
                </Col>
                <Col lg={6}>
                    <div className='work'>
                        <div className='work_count'>{props.count}</div>
                        <h3 className='work_heading mt-3'>{props.title}</h3>
                        <p className='work_content mt-2'>Credit Sensei automatically imports and analyzes your 3 bureau credit report, finds negative
                            accounts, and prepares an aggressive dispute strategy.
                            Credit Sensei never puts an inquiry on your credit report</p>
                    </div>
                </Col>
            </Row>

        </>
    )
}


