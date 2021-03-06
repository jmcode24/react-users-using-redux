import React, {useState} from 'react';
import {Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineNumber } from "react-icons/ai";
import firebase from '../firebase/config'

function User(props) {
  const user = props.user;
  const index = props.index;

  const [isShowing, setIsShowing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleDelete = () => {
    try {
      firebase.firestore().collection("users").doc(user.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let userData = {
        id: user.id,
        name: name,
        email: email,
        gen: gen,
      };

      firebase.firestore().collection("users").doc(user.id).update(userData);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <tr>
        <td className="text-center text-success">{index + 1}</td>
        <td className='text-center'>{user.name}</td>
        <td className='text-center'>{user.email}</td>
        <td className='text-center'>{user.gen}</td>
        <td>
          <div className='d-flex justify-content-around'>
            <Button onClick={() => setIsShowing(true)}>Edit</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
        </td>
      </tr>
      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
              <FormControl type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><AiOutlineMail /></InputGroup.Text>
              <FormControl type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><AiOutlineNumber /></InputGroup.Text>
              <FormControl type="number" placeholder="Generation" value={gen} onChange={(e) => setGen(e.target.value)} aria-label="Gen Year" aria-describedby="basic-addon1" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleSubmit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;