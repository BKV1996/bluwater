import React from 'react'
import './Body4.css';
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import img1 from '../../images/1.jpg'
import { useNavigate } from 'react-router-dom';



const Body4 = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='Body4-body11'>
            <Container>
                <div className='Body4-body9'>
                    Your Ideal Custom Concrete Swimming Pool
                </div>
                <Row className='Body4-body8'>
                    <Col md={4} className='Body4-body1'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Custom Swimming Pool</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='Body4-body4'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Family Pool</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='Body4-body7'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Pool With Spa</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='Body4-body1'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Above Ground</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='Body4-body4'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Plunge Pools</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='Body4-body7'>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body className='Body4-body12'>
                                <Card.Title className='Body4-body10'>Edges & Blades</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='text-center'>
                <Button className='Body4-body10' variant="primary" onClick={()=> navigate("/AllPools")}>View All Pools Types</Button>
                </div>
            </Container>
            </div>
        </>
    )
}

export default Body4
