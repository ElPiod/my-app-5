import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Section4 = () => {
    return (
        <div className='section_4'>
            <Container>
                <div className="sec_head text-center">
                <h6>Pratice advice</h6>
                <h1>Featured Products</h1>
                <p className='my-3'>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <Row>
                    <Col md={12} xs={12} className='d-flex justify-content-center my-5'>
                        <input type="text" placeholder='Your Email' className='w-75 p-2'/><button className="sec4_btn">Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section4;