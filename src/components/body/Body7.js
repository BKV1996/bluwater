import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Body7.css'
import { Container } from 'react-bootstrap';

const Body7 = () => {
    return (
        <>
            <Container>
                <div className='Body7-body1'>
                    <div>Our Happy Client</div>
                </div>
                <div className='Body7-body2'>
                    <Carousel>
                        <Carousel.Item className='Body7-body3'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                        <Carousel.Item className='Body7-body3'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                        <Carousel.Item className='Body7-body3'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </>
    )
}

export default Body7
