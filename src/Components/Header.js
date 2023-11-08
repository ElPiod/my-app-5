import React from 'react';
import NavBar from './NavBar';
import { Button, Col , Container, Row } from 'react-bootstrap';
import { CardHeading, Check2All, EmojiNeutral } from 'react-bootstrap-icons';



const Header = () => {
    return (
        <div className='header' id='home'>
            <NavBar/>
            <div className="header container my-5 text-center text-white">
                <h6 className='my-5'>Welcome</h6>
                <h1>Selling on the <br /> internet like a pro</h1>
                <p>We know how large objects will act, but things on a <br />
                small scale just do not act that way.</p>
                <div className="nav-contact header-contact py-2">
                    <Button className='join-us'>Get code now</Button>
                    <Button className='login'>Learn More</Button>
                </div>
            </div>
            <Container>
                <Row className='justify-content-center gap-5 row'>
                    <Col md={3} xs={12} className='header_card bg-white'>
                        <div className="icon_card"> 
                            <EmojiNeutral size={25} color='red'/>
                        </div>
                        <div className="text-card">
                        <div className="mini-borde my-3"></div>
                        <h5>training Courses</h5>
                        <p >The gradual accumulation of <br />
                        information about atomic and <br />
                        small-scale behaviour...</p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className='header_card bg-white'>
                        <div className="icon_card card1">
                            <Check2All size={25} color= '#2DC071'/>
                        </div>
                        <div className="text-card">
                        <div className="mini-borde my-3"></div>
                        <h5>training Courses</h5>
                        <p >The gradual accumulation of <br />
                        information about atomic and <br />
                        small-scale behaviour...</p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className='header_card bg-primary'>
                        <div className="icon_card card2">
                            <CardHeading size={25} color="#23A6F0"/>
                        </div>
                        <div className="text-card">
                        <div className="mini-borde bg-white my-3"></div>
                        <h5>training Courses</h5>
                        <p >The gradual accumulation of <br />
                        information about atomic and <br />
                        small-scale behaviour...</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default Header;  