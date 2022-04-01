import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineNumber } from "react-icons/ai";
import { v4 as uuid } from 'uuid';
import firebase from '../firebase/config';


function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleGenChange = async (e) => {
    setGen(e.target.value);
  }

  const signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {

    try {
      e.preventDefault();

      let newUser = {
        id: uuid(),
        name: name,
        email: email,
        gen: gen,
      };

      firebase.firestore().collection("users").doc(newUser.id).set(newUser);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setEmail('');
    setGen('');
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto mt-2 shadow-lg p-3 mb-4 bg-body rounded'>
            <div className="d-flex justify-content-between mb-3 mt-2">
              <h4 className="text-muted mark fw-bold fst-italic">Welcome </h4>
              <Button variant="outline-danger" size="sm" onClick={signOut}>Sign out</Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                  <FormControl type="text" placeholder="Your Name" required value={name} onChange={handleNameChange} aria-label="Name" aria-describedby="basic-addon1" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><AiOutlineMail /></InputGroup.Text>
                  <FormControl type="email" placeholder="Your Email" required value={email} onChange={handleEmailChange} aria-label="Email" aria-describedby="basic-addon1" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><AiOutlineNumber /></InputGroup.Text>
                  <FormControl type="number" placeholder="Generation" required value={gen} onChange={handleGenChange} aria-label="Gen Year" aria-describedby="basic-addon1" />
              </InputGroup>
              <Button variant="primary" type="submit" className="w-100 mt-2">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>);

};

export default UserForm;