import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import firebase2 from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();

      const provider = new firebase2.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

       await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

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
          <h1 className="text-center fw-bold mt-2 mb-3 text-success text-decoration-underline fst-italic">Login</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
      
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between mt-2">
                  <Button variant="primary" type="submit" onClick={handleLogin}>
                  Sign in
                  </Button>
                  <Button variant="outline-warning" type="submit" onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
                <h6 className="mt-3 mb-4 text-center">
                  <span className="fst-italic text-muted">Don't have an account? </span> <br/> <Link to="/register"> Create Account</Link>
                </h6>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     display: "flex",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: "50%",
    //       backgroundColor: "#eee",
    //       borderRadius: 10,
    //       padding: 50,
    //     }}
    //   >
    //     <h1 className="text-center fw-bold mb-2">Login</h1>
    //     <Form>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control
    //           type="email"
    //           placeholder="Enter email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //         />
    //         <Form.Text className="text-muted">
    //           We'll never share your email with anyone else.
    //         </Form.Text>
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="Password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           value={password}
    //         />
    //       </Form.Group>
    //       <div className="d-flex justify-content-between">
    //         <Button variant="primary" type="submit" onClick={handleLogin}>
    //         Submit
    //         </Button>
    //         <Button variant="outline-primary" type="submit" onClick={signInWithGoogle}>
    //           Sign in with Google
    //         </Button>
    //       </div>
    //       <p className="mt-3">
    //         <span className="fst-italic text-danger">Don't have an account?</span> <Link to="/register"> Register</Link>
    //       </p>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default Login;