import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      firebase.auth().createUserWithEmailAndPassword(email, password);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md="6" className="mx-auto bg-secondary p-3 mt-5">
            <h1 className="text-center fw-bold mt-2 mb-3 text-success text-decoration-underline fst-italic">Create Account</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control
                  type="email" required
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password" required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Form.Text className="text-muted">
                  Your password should be reliable.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSignUp}>
                Create
              </Button>
              <h6 className="mt-3 mb-4 text-center">
                <span className="fst-italic text-muted">Already have an account? </span> <br/> <Link to="/login">Login</Link>
              </h6>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;