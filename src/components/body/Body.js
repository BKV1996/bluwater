import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import './Body.css';


const Body = () => {
  return (
    <>
      
    <Carousel>
      <Carousel.Item className='Body-body1'>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>India’s Most Experienced Swimming Pool Builder</h3>
          <p>Bluwater Enterprises Is The Benchmark In Build Quality And Value That All Other India Swimming Pool Builders Are Measured By</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Body-body1'>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>India’s Most Experienced Swimming Pool Builder</h3>
          <p>Bluwater Enterprises Is The Benchmark In Build Quality And Value That All Other India Swimming Pool Builders Are Measured By</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Body-body1'>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>India’s Most Experienced Swimming Pool Builder</h3>
          <p>
          Bluwater Enterprises Is The Benchmark In Build Quality And Value That All Other India Swimming Pool Builders Are Measured By
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Body
