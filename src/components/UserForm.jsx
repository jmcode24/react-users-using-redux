import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineNumber } from "react-icons/ai";
import { v4 as uuid } from 'uuid';
import { connect } from "react-redux";
import { addUserAction } from "../actions/actions";


function UserForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleGenChange = (e) => {
    setGen(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);
    
    setName('');
    setEmail('');
    setGen('');
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto mt-5'>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                  <FormControl type="text" placeholder="Your Name" value={name} onChange={handleNameChange} aria-label="Name" aria-describedby="basic-addon1" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><AiOutlineMail /></InputGroup.Text>
                  <FormControl type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} aria-label="Email" aria-describedby="basic-addon1" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1"><AiOutlineNumber /></InputGroup.Text>
                  <FormControl type="number" placeholder="Gen. Year" value={gen} onChange={handleGenChange} aria-label="Gen Year" aria-describedby="basic-addon1" />
              </InputGroup>
              <Button variant="primary" type="submit" className="w-100 mt-2">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>);

};

//aka mapDispatchToProps
const sendActionAsProps = {
  addUser: addUserAction,
};

export default connect(null, sendActionAsProps)(UserForm);