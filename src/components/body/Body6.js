import React from 'react'
import './Body6.css'
import {Col, Row} from 'react-bootstrap';

const Body6 = () => {
  return (
    <>
      <div className='Body6-body1'>
          <Row className='Body6-body6'>
            <Col md={3} className='Body6-body2'>
              <div className='Body6-body3'>
                <div className='Body6-body4'>15</div>
                <div className='Body6-body5'>YEAR OF EXPERIENCE</div>
              </div>
            </Col>
            <Col md={3} className='Body6-body2'>
              <div className='Body6-body3'>
                <div className='Body6-body4'>21+</div>
                <div className='Body6-body5'>EXPERT CONSULTANT</div>
              </div>
            </Col>
            <Col md={3} className='Body6-body2'>
              <div className='Body6-body3'>
                <div className='Body6-body4'>256+</div>
                <div className='Body6-body5'>CLIENTS</div>
              </div>
            </Col>
            <Col md={3} className='Body6-body2'>
              <div className='Body6-body3'>
                <div className='Body6-body4'>62+</div>
                <div className='Body6-body5'>PROJECT FINISHED</div>
              </div>
            </Col>
          </Row>
          </div>   
    </>
  )
}

export default Body6
