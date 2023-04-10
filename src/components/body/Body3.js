import React from 'react'
import './Body3.css';
import img1 from '../../images/1.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Body3 = () => {
    return (
        <>
            <Container>
                <Row className='Body3-body8'>
                    <Col md={5} className='Body3-body1'>
                        <div className='Body3-body2'>
                            <img className='Body3-body3' src={img1} alt="about" />
                            {/* <div className="Body3-body4"> */}
                                <div className="Body3-body5">15</div>
                                <div className="Body3-body6">Years of Trust and Excellence.</div>
                            {/* </div> */}
                        </div>

                    </Col>
                    <Col md={7} className='Body3-body7'>
                        <div className="">
                            <div className="">
                                <h2 className="">Creating Solutions For Your Business</h2>
                                <p className="">Incorporated in the year 2006, Laxmi Enterprises is a trust worthy service provider of swimming pool and fountain construction services. Based at Gurugram (Haryana), we have garnered a huge client base by delivering world-class swimming pool services. We are offering Swimming Pool Construction Services, swimming pool accessories, etc. to our clients spread across the country.
                                </p>
                                <p className="">We have hired professionals, who have rich on-site construction knowledge and experience that enables us to meet the industrial standards in a significant manner. Also, by being constantly engaged with clients to understand their specific demands, we have established strong business rapport with them.
                                </p>
                            </div>
                            <div className="Body3-body10">
                            <Button variant="link">Read More</Button>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Body3
