import React from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';
import { connect } from "react-redux";

const UserList = (props) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md='6' className='mx-auto mt-3'>
          <h1 className="text-center text-success">List Of Users</h1>
          <div>
            <Table bordered hover variant='dark'>
              <thead>
                <tr>
                  <th className='text-info text-center'>#</th>
                  <th className='text-warning text-center'>Name</th>
                  <th className='text-info text-center'>Email</th>
                  <th className='text-warning text-center'>Generation</th>
                </tr>
              </thead>
              <tbody>
              {props.users.map((user, index) => {
                return (
                  // user.name + "-" + index
                  <tr key={index}>
                    <td className="text-center text-danger">{index + 1}</td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.gen}</td>
                  </tr>
                );
              })}
              </tbody>
            </Table>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

//aka mapStateToProps
const sendDataAsProps = (state) => {
  return {users: state.users};
};

export default connect(sendDataAsProps)(UserList);