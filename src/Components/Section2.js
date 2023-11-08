import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Alarm, Cart, ChevronRight, Download, Eye, GraphUpArrow, Heart } from 'react-bootstrap-icons';


const Section2 = () => {
    return (
        <div className='section_2' id='pricing'>
            <Container>
                <h6>Product advice</h6>
                <h1>Make online education accessible</h1>
                <p>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics</p>
                <Row className='justify-content-center'>
                    <Col md={3} xs={12}>
                        <div className="sec2-img">
                            <div className="sale">
                                <p className='text-white text-center'>sale</p>
                            </div>
                            <div className="tree-icon d-flex justify-content-center gap-3">
                                <div className="borde heart"><Heart size={20}/></div>
                                <div className="borde"><Cart size={20}/></div>
                                <div className="borde"><Eye size={20}/></div>
                            </div>
                        </div>
                        <div className="col-bas text-white text-center d-flex justify-content-center align-items-center my-3 justify-content-around">
                            <h6 className='my-1'>English</h6>
                            <p className='note my-1'>⭐ 4.9</p>
                        </div>
                        <div className="col-bas mx-4">
                            <h5>Graphic Design</h5>
                            <p className='text-secondary'>We focus on ergonomics <br /> and meeting you....</p>
                            <p className='text-secondary fw-bold'><Download/> 15 Sales</p>
                            <p className="text-secondary fw-bold">$16.58 <span>$6.48</span></p>
                            <p><Alarm style={{color: "23A6F0"}}/> Pro... <GraphUpArrow style={{color: "E77C40"}}/> 64 les... <Alarm style={{color: "23A6F0"}}/>22hr..</p>
                            <Button className='col-bas-btn fw-bold'>Learn More <ChevronRight size={20}/></Button>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className="sec2-img1">
                            <div className="sale">
                                <p className='text-white text-center'>sale</p>
                            </div>
                            <div className="tree-icon d-flex justify-content-center gap-3">
                                <div className="borde"><Heart size={20}/></div>
                                <div className="borde"><Cart size={20}/></div>
                                <div className="borde"><Eye size={20}/></div>
                            </div>
                        </div>
                        <div className="col-bas text-white text-center d-flex justify-content-center align-items-center my-3 justify-content-around">
                            <h6 className='my-1'>English</h6>
                            <p className='note my-1'>⭐ 4.9</p>
                        </div>
                        <div className="col-bas mx-4">
                            <h5>Graphic Design</h5>
                            <p className='text-secondary'>We focus on ergonomics <br /> and meeting you....</p>
                            <p className='text-secondary fw-bold'><Download/> 15 Sales</p>
                            <p className="text-secondary fw-bold">$16.58 <span>$6.48</span></p>
                            <p><Alarm style={{color: "23A6F0"}}/> Pro... <GraphUpArrow style={{color: "E77C40"}}/> 64 les... <Alarm style={{color: "23A6F0"}}/>22hr..</p>
                            <Button className='col-bas-btn fw-bold'>Learn More <ChevronRight size={20}/></Button>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className="sec2-img2">
                            <div className="sale">
                                <p className='text-white text-center'>sale</p>
                            </div>
                            <div className="tree-icon d-flex justify-content-center gap-3">
                                <div className="borde"><Heart size={20}/></div>
                                <div className="borde"><Cart size={20}/></div>
                                <div className="borde"><Eye size={20}/></div>
                            </div>
                        </div>
                        <div className="col-bas text-white text-center d-flex justify-content-center align-items-center my-3 justify-content-around">
                            <h6 className='my-1'>English</h6>
                            <p className='note my-1'>⭐ 4.9</p>
                        </div>
                        <div className="col-bas mx-4">
                            <h5>Graphic Design</h5>
                            <p className='text-secondary'>We focus on ergonomics <br /> and meeting you....</p>
                            <p className='text-secondary fw-bold'><Download/> 15 Sales</p>
                            <p className="text-secondary fw-bold">$16.58 <span>$6.48</span></p>
                            <p><Alarm style={{color: "23A6F0"}}/> Pro... <GraphUpArrow style={{color: "E77C40"}}/> 64 les... <Alarm style={{color: "23A6F0"}}/>22hr..</p>
                            <Button className='col-bas-btn fw-bold'>Learn More <ChevronRight size={20}/></Button>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className="sec2-img3">
                            <div className="sale">
                                <p className='text-white text-center'>sale</p>
                            </div>
                            <div className="tree-icon d-flex justify-content-center gap-3">
                                <div className="borde"><Heart size={20}/></div>
                                <div className="borde"><Cart size={20}/></div>
                                <div className="borde"><Eye size={20}/></div>
                            </div>
                        </div>
                        <div className="col-bas text-white text-center d-flex justify-content-center align-items-center my-3 justify-content-around">
                            <h6 className='my-1'>English</h6>
                            <p className='note my-1'>⭐ 4.9</p>
                        </div>
                        <div className="col-bas mx-4">
                            <h5>Graphic Design</h5>
                            <p className='text-secondary'>We focus on ergonomics <br /> and meeting you....</p>
                            <p className='text-secondary fw-bold'><Download/> 15 Sales</p>
                            <p className="text-secondary fw-bold">$16.58 <span>$6.48</span></p>
                            <p><Alarm style={{color: "23A6F0"}}/> Pro... <GraphUpArrow style={{color: "E77C40"}}/> 64 les... <Alarm style={{color: "23A6F0"}}/>22hr..</p>
                            <Button className='col-bas-btn fw-bold'>Learn More <ChevronRight size={20}/></Button>
                        </div>
                    </Col>
                </Row>
            </Container> <br />
        </div>
    );
};

export default Section2;