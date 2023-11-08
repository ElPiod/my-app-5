import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={3} xs={6} className='text-white my-5'>
                        <h5>Get in touch</h5>
                        <p>the quick fox jumps over the <br /> lazy dog</p>
                        <div className="footer-icon d-flex gap-2">
                            <a href="www.facebook.com"><Facebook  size={25} style={{color: "23A6F0"}}/></a>
                            <a href="www.instagram.com"><Instagram size={25} style={{color: "23A6F0"}}/></a>
                            <a href="www.twitter.com"><Twitter   size={25} style={{color: "23A6F0"}}/></a>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className='text-white my-5'>
                        <h5>Company info</h5>
                        <a href="top">About us</a> <br />
                        <a href="top">Carrier</a><br />
                        <a href="top">We hiring</a> <br />
                        <a href="top">Blog</a>
                    </Col>
                    <Col md={3} xs={6} className='text-white my-5'>
                        <h5>Feactures</h5>
                        <a href="top">Business Marketing</a><br />
                        <a href="top">User Analytic</a><br />
                        <a href="top">Live chat</a><br />
                        <a href="top">Unlimited Support</a>

                    </Col>
                    <Col md={3} xs={6} className='text-white my-5'>
                        <h5>Ressources</h5>
                        <a href="top">IOS & Android</a><br />
                        <a href="top">Watch a Demo</a><br />
                        <a href="top">Customers</a><br />
                        <a href="top">API</a>                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;