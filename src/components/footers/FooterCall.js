import React from 'react';
import './FooterCall.css';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { Container, Nav, Navbar } from 'react-bootstrap';

const FooterCall = () => {
  
  return (
    <>
      <Navbar className="call1" fixed="bottom">
        <Container className='call4'>
        <div className="call2">
        <Nav.Link href="tel:+91-7982569416"><HiOutlinePhoneMissedCall/>Call Us Now</Nav.Link>
        </div>
        <div className="call3">
          <Nav.Link href="https://wa.me/+91-7840813316" target="_blank"><BsWhatsapp/> Whatsapp</Nav.Link>
        </div>
        </Container>
      </Navbar>
    </>
  )
}

export default FooterCall
