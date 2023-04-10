import React from 'react'
import './Body2.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';

const Body2 = () => {
    return (
        <>
            <Container>
                <Row className='Body2-body2'>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <div className="Body2-body1">
                                    <EqualizerRoundedIcon />
                                </div>

                                <Card.Title className='text-center'>Quality</Card.Title>
                                <Card.Text>
                                    Since, quality is the prime focus of our organization, we solely emphasize on maintaining the quality of the finished range of products and construction projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <div className="Body2-body1">
                                    <TouchAppRoundedIcon />
                                </div>
                                <Card.Title className='text-center'>Satisfaction</Card.Title>
                                <Card.Text>
                                    With our ethical business practice, high quality construction & products and cost competency we have become a popular name in the industries.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <div className="Body2-body1">
                                    <TrackChangesRoundedIcon/>
                                </div>
                                <Card.Title className='text-center'>Our Mission</Card.Title>
                                <Card.Text>
                                    Our mission is to be a store for pool owners and pool users providing comprehensible and true information on pool topics, competent product support.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Body2
