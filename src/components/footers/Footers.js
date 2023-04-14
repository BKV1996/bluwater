import React from 'react'
import { Col, Row, Container, Nav } from 'react-bootstrap';
import './Footers.css';
import { useNavigate } from 'react-router-dom';

const Footers = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='footer6'>
            <Container>
                <Row className='footer5'>
                    <Col md>
                        <div className='footer1'>
                            <h2>Blu Water Pools</h2>
                            <p className='footer2'>Incorporated in the year 2023,
                                Blu water pools is a trust worthy service provider of swimming pool and fountain construction services.
                            </p>
                            <div>+91-8586002094</div>
                            <div>+91-9990700914</div>
                            <div>24/7 Support</div>
                        </div>
                    </Col>
                    <Col md>
                        <div className='footer1'>
                            <h2>Quik Links</h2>
                            <div>
                                <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
                                <Nav.Link onClick={()=>navigate("/about")}>About Us</Nav.Link>
                                <Nav.Link onClick={()=>navigate("/visionMission")}>Vision & Mission</Nav.Link>
                                <Nav.Link onClick={() =>navigate("/services")}>Services We Offer</Nav.Link>
                                <Nav.Link onClick={() =>navigate("/Gallery")}>Gallery</Nav.Link>
                                <Nav.Link onClick={() =>navigate("/Enquiry")}>Enquiry</Nav.Link>
                            </div>
                        </div>
                    </Col>
                    <Col md>
                        <div className='footer1'>
                        <h2>Swimming Pool</h2>
                        <div>
                            <Nav.Link href="#action1">Family Pool</Nav.Link>
                            <Nav.Link href="#action2">Pool with Spa</Nav.Link>
                            <Nav.Link href="#action3">Lap Pools</Nav.Link>
                            <Nav.Link href="#action4">Above Ground</Nav.Link>
                            <Nav.Link href="#action5">Plunge Pool</Nav.Link>
                        </div>
                        </div>
                    </Col>
                    <Col md>
                        <div className='footer1'>
                        <h2>Find Us</h2>
                        <address className='footer4'>
                            <strong>Office Address:- </strong>Plot No. 143B, Anand Industrial Area, Mohan Nagar, Arthala, Ghaziabad, Uttar Pradesh-201007 <br/>
                            <strong>Call Us:- </strong>+91-8586002094, 9990700914<div></div>
                            <strong>E-Mail Id:- </strong>info@bluwaterpools.in, bluwaterpools0401@gmail.com
                        </address>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className='footer3'>
                <p>Copyright © All Rights Reserved.</p>
            </div>
            
        </>
    )
}

export default Footers
