import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowBarRight } from 'react-bootstrap-icons';
import img1 from "../assets/img/Rectangle 51.png"
import img2 from "../assets/img/image 1.png"
import img3 from "../assets/img/image 3.png"

const Section1 = () => {
    return (
        <div className='section_1 my-5'id='products'>
            <Container>
                <Row className='justify-conent-center'>
                    <Col md={6} xs={12}>
                        <div className="sec-border my-5"></div>
                        <h1>Packages that are <br /> aprodable</h1>
                        <p>Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: <br />
                        Newtonian mechanics </p>
                        <a href="http://facebook.com" className='link_a'>Learn more <ArrowBarRight/></a>
                    </Col>
                    <Col md={6} xs={12} className='text-center'>
                        <img src={img3} alt="" className='img-fluid img1'/>
                        <img src={img1} alt="" className='img-fluid'/>
                        <img src={img2} alt="" className='img-fluid img2'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section1;