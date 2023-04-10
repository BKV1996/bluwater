import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../../images/1.jpg'
import './Body5.css'

const Body5 = () => {
    return (
        <>
            <div className='Body5-body1'>
                <Row className='Body5-body7'>
                    <Col md={6} className='Body5-body2'>
                        <div className='Body5-body3'>
                            <img src={img1} />
                        </div>
                    </Col>
                    <Col md={6} className='Body5-body8'>
                        <div>
                            <div className='Body5-body11'>
                                <div>
                                <div className='Body5-body4'>POOL BUYERS GUIDE</div>
                                <p>Build your knowledge and find the best pool your money can buy.</p>
                                <p>Or take the fast route and <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> get a free quote.</a></p>

                                <h4>Popular articles to dive into:</h4>

                                <ul>
                                    <li>Construction Process</li>
                                    <li>How much does a pool cost ?</li>
                                    <li>How long does the pool construction process take?</li>
                                    <li>Swimming pool placement</li>
                                    <li>Fibreglass vs Concrete Pools</li>
                                    <li>Pool equipment: Pumps, Filters, Sanitisation and more</li>
                                </ul>
                                <div className='Body5-body5'>
                                    <span className='Body5-body6'><a href="#">Get A Free Quote</a></span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='Body5-body9'>
                        <div>
                            <div>
                                <h3>Why All Indians siders put their trust in Laxmi Enterprises.</h3>
                                <p><b>Peace of mind –</b> A concise contract with built-in inclusions, clear communication and efficient processes ensures performance every step of the way.</p>

                                <p><b>Better value –</b> Industry-leading craftsmanship, processes and inclusions mean a better pool for the same price.</p>

                                <p><b>India's most established and financially secure –</b> Pioneering the evolution of the great Aussie backyard pool since 1957.

                                </p>

                                <p><b>India's most technically capable –</b> Any block, location, type/shape, size or design, we’ve built it!</p>
                                <p><b>Dedicated Project Managers –</b> Fully accountable and trained to ensure construction at your property runs as smoothly as possible.</p>

                                <p><b>Experience and know-how –</b> The name behind Sydney’s most complex residential and commercial pool constructions. Delivered on time, at the right price.</p>
                                <p><b>A 60-year reputation –</b> for build quality and integrity. Referrals from satisfied clients are still the best indicator of quality in service and successful delivery.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='Body5-body10'>
                        <div>
                            <video width="100%" loop="" muted="" autoplay="">
                                <source src={img1} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Body5
