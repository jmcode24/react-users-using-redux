import React from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';
import { connect } from "react-redux";
import User from './User'

const UserList = (props) => {
  return (
    <div>
     <Container fluid>
        <Row>
          <Col md='6' className='mx-auto'>
            <Table bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="text-danger text-center">#</th>
                  <th className="text-warning text-center">Name</th>
                  <th className="text-info text-center">Email</th>
                  <th className="text-warning text-center">Gen</th>
                  <th className="text-info text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user, index) => {
                  return (
                    <User key={user.id} user={user} index={index}/>
                  )})}
              </tbody>
            </Table>
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