import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

const Section3 = () => {
    return (
        <div className='section_3 my-5'>
            <Container>
                <h6>Pratice advice</h6>
                <h1>Our Experts Teacher</h1>
                <p className='my-3'>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="circle m-auto my-3"></div>
                        <p className="text-center text-secondary fw-bold">Slate helps you see how many more days <br />
                        you need to work to reach your financial <br />
                        goal for the month and year.</p>
                        <p className='text-center'>⭐⭐⭐⭐<Star/></p>
                        <p className='text-center fw-bold'>Regina Miles</p>
                        <p className='text-center fw-bold text-secondary'>Design</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="circle circle1 m-auto my-3"></div>
                        <p className="text-center text-secondary fw-bold">Slate helps you see how many more days <br />
                        you need to work to reach your financial <br />
                        goal for the month and year.</p>
                        <p className='text-center'>⭐⭐⭐⭐<Star/></p>
                        <p className='text-center fw-bold'>Regina Miles</p>
                        <p className='text-center fw-bold text-secondary'>Design</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section3;