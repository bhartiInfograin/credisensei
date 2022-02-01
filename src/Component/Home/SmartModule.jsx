import React from 'react';
import { Container, Row ,Col,Image} from 'react-bootstrap';
import card from '../../asset/image/card.png'

export default function SmartModule() {
  return(
    <>
     <Container fluid >
         <Row>
             <Col lg={6}>
             <div className=' item_content '>
                    <h3 className='item_title'>Professional Letters</h3>
                    <p className='item_text'>Letters are far more effective at getting accounts permanently deleted than online disputes. Credit Sensei’s letter generator helps you create effective disputes based on consumer protection laws.
                    </p>
                    <h3 className='item_title mt-2'>Track Your Results</h3>
                    <p className='item_text'>Every month Credit Sensei imports your new 3 bureau credit report and shows which accounts were deleted and your new credit scores. If an account wasn’t deleted, Credit Sensei will suggest a new strategy for additional disputes.
                    </p>
                 </div>
             </Col>
             <Col lg={6}>
                 <div className='smartmodule_img mt-5'>
                   <Image src={card} className=' disputeimage'></Image>
               </div>
             </Col>
         </Row>

     </Container>
    
    
    </>
  ) 
}
