import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, user }) => {
  if (!user) return <Navigate to="/login" replace={true} />;

  return children;
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(ProtectedRoute);