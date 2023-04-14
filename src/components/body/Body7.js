import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Body7.css'
import { Col, Container, Row } from 'react-bootstrap';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import photo from '../../images/photo.jpg';

const Body7 = () => {
    return (
        <>
            <div className='Body7-body9'>
                <Container className='Body7-body8'>
                    <div className='Body7-body1'>
                        <div>Our Happy Client</div>
                    </div>
                    <div className='Body7-body2'>
                        <Carousel>
                            <Carousel.Item className='Body7-body3'>
                                <div className='Body7-body4'>
                                    <FormatQuoteOutlinedIcon />
                                </div>
                                <Row className='Body7-body5'>
                                    <Col md={2}>
                                        <div className='Body7-body6'>
                                            <img src={photo} />
                                        </div>
                                    </Col>
                                    <Col md={10}>
                                        <div className='Body7-body7'>
                                            <h3>Brijesh Vishwakarma</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div >
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className='Body7-body3'>
                                <div className='Body7-body4'>
                                    <FormatQuoteOutlinedIcon />
                                </div>
                                <Row className='Body7-body5'>
                                    <Col md={2}>
                                        <div className='Body7-body6'>
                                            <img src={photo} />
                                        </div>
                                    </Col>
                                    <Col md={10}>
                                        <div className='Body7-body7'>
                                            <h3>Shivam</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Body7
