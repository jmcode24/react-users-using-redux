import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from "react-redux";

const UserList = (props) => {
  console.log(props.students);
  return (
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto mt-5'>
          <h1 className="text-center text-danger">User List</h1>
          {props.users.map((user, index) => {
            return (
              // user.name + "-" + index
              <div key={`${user.name}-${index}`}>
              <Card className="text-center bg-secondary">
                <Card.Header><h3 className="text-white"><span className="text-success">Name: </span>{user.name}</h3></Card.Header>
                <Card.Body>
                  <Card.Title><h5 className="text-white"><span className="text-warning">Email: </span>{user.email}</h5></Card.Title>
                  <Card.Text><h5 className="text-white"><span className="text-info">Generation: </span>{user.gen}</h5></Card.Text>
                </Card.Body>
              </Card>
              <br />
              </div>
            );
          })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

//aka mapStateToProps
const sendDataAsProps = (state) => {
  return { state: state, users: state.users, students: state.students };
};

export default connect(sendDataAsProps)(UserList);