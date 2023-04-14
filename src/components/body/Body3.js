import React from 'react'
import './Body3.css';
import img1 from '../../images/1.jpg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Body3 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container className='Body3-body11'>
                <Row className='Body3-body8'>
                    <Col md={5} className='Body3-body1'>
                        <Card className='Body3-body2'>
                            <Card.Img className='Body3-body3' variant="top" src={img1} />
                            <Card.Body className="Body3-body4">
                                <Card.Title className="Body3-body5">15</Card.Title>
                                <Card.Text className="Body3-body6">
                                Years of Trust and Excellence.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} className='Body3-body7'>
                        <div className="Body3-body12">
                            <div className="Body3-body13">
                                <div className="Body3-body14">Creating Solutions For Your Business</div>
                                <p className="Body3-body15">Incorporated in the year 2006, Laxmi Enterprises is a trust worthy service provider of swimming pool and fountain construction services. Based at Gurugram (Haryana), we have garnered a huge client base by delivering world-class swimming pool services. We are offering Swimming Pool Construction Services, swimming pool accessories, etc. to our clients spread across the country.
                                </p>
                                <p className="Body3-body16">We have hired professionals, who have rich on-site construction knowledge and experience that enables us to meet the industrial standards in a significant manner. Also, by being constantly engaged with clients to understand their specific demands, we have established strong business rapport with them.
                                </p>
                            </div>
                            <div className="Body3-body10">
                                <Button variant="link" onClick={()=>navigate("/ReadMoreSol")}>Read More</Button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Body3
