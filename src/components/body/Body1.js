import React from 'react'
import './Body1.css'
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Body1 = () => {
    return (
        <>
            <div className='Body1-body7'>
                <Container>
                    <Row className='Body1-body6'>
                        <Col md={9} className='Body1-body4'>
                            <div>
                                <h2 className='Body1-body2'>Talk To Bluwater Enterprises Inground Concrete Swimming Pool Specialist</h2>
                                <div className='Body1-body3'>No one else can build your pool like we can. For over 15 years we’ve retained the best tradespeople in the business. As Laxmipool construction   most experienced and capable pool builder, we are equipped to offer you invaluable advice that can save you thousands.</div>
                            </div>
                        </Col>
                        <Col md={3} className="Body1-body4">

                            <div className='Body1-body5'>
                                <Nav.Link href="tel:+91-7982569416">Call Us Now</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Body1
