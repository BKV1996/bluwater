import React, { useState } from 'react'
import Headers from '../headers/Headers'
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import FooterCall from '../footers/FooterCall';
import Footers from '../footers/Footers';
import './Enquiry.css';

const Enquiry = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const postUserData = async (e) => {
    e.preventDefault();

    const {name, phone, email, message} = user;

    if(name && phone && email && message){
      const response = await fetch("https://contactpage-83c1c-default-rtdb.firebaseio.com/contactform.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        })
      });
  
      if(response){
        setUser({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Data Stored Successfully");
      }
    } else{
      alert("Please fill all the data");
    }
  }
  return (
    <>
      <Headers />
      <div className="enquiry3">
      <Container className='enquiry1'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Adam Smith" autocomplete='off' value={user.name} onChange={getUserData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>Mobile No.</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="000000000" autocomplete='off' value={user.phone} onChange={getUserData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>Email address</Form.Label>
            <Form.Control type="text" name="email" placeholder="name@gmail.com" autocomplete='off' value={user.email} onChange={getUserData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='enquiry2'>Example textarea</Form.Label>
            <Form.Control as="textarea" type='text' name="message" rows={3} autocomplete='off' value={user.message} onChange={getUserData} />
          </Form.Group>
          <div className="enquiry4">
          <Button variant="primary" onClick={postUserData} >Submit</Button>
          </div>
      </Container>
      </div>
      <Footers/>
      <FooterCall />
    </>
  )
}

export default Enquiry
